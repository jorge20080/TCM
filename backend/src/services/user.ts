import { db } from "../app.js";
import { TUser, TUserLoginResponse, TUserSaveResponse } from "../types/user.js";
import bcrypt from 'bcryptjs';
import { ErrorResponse } from "../utils/error-response.js";
import jwt from 'jsonwebtoken';
import { Email } from "./email.js";

export class User {
    id?: string;
    givenName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";
    isVerified?: boolean;
    verificationToken?: string;
    resetToken?: string;
    updatedAt?: Date;
    createdAt?: Date;

    constructor(user: TUser) {
        this.id = user.id;
        this.givenName = user.givenName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.isVerified = user.isVerified;
        this.verificationToken = user.verificationToken;
        this.resetToken = user.resetToken;
        this.updatedAt = user.updatedAt;
        this.createdAt = user.createdAt;
    }

    async sendWelcomeEmail() {
        const msg = {
            to: process.env.FROM_EMAIL,
            from: process.env.FROM_EMAIL,
            subject: 'Welcome to TCM, Please Verify Your Email Address',
            text: 'Welcome to TCM, Please Verify Your Email Address',
            html: `<div>Dear ${this.givenName}, <b/><b/> <p>Welcome to TCM!. To complete your registration and gain access to all our features, please verify your email address by clicking the link below:<b/> <a href="${process.env.FRONTEND_URL}/?token=${this.verificationToken}">Link<a/></p></div>`,
        }
        await Email.send(msg);
    }

    static async verifyEmail(email: string, token: string) {
        let result: TUserSaveResponse = { success: false, error: null };
        let message = "Failed to update user";
        const user = await db.user.findUnique({ where: { email } });

        if (user.isVerified) {
            message = "User already verified";
            result.error = new ErrorResponse({ status: 302, message })
        } else {
            if (user.verificationToken === token) {
                user.isVerified = true;
                user.verificationToken = null;
                try {
                    await db.user.update({ data: user, where: { email } });
                    result.success = true;
                } catch (e) {
                    result.error = new ErrorResponse({ status: 404, message })
                }
            } else {
                let message = "Invalid Token";
                result.error = new ErrorResponse({ status: 404, message })
            }
        }
        return result;
    }

    static async findById(id: string) {
        const user = await db.user.findUnique({ where: { id } });
        if (user) return new User({ ...user });
        else return null;
    }

    async save() {
        let result: TUserSaveResponse = { success: false, error: null }
        if (!this.id) {
            const hashedPass = await bcrypt.hash(this.password, 12);
            const data = {
                givenName: this.givenName,
                lastName: this.lastName,
                email: this.email,
                password: hashedPass
            }
            try {
                const user = await db.user.create({ data });
                this.verificationToken = user.verificationToken;
                result.success = true;
                await this.sendWelcomeEmail();
            } catch (e) {
                let message = "Failed to create user";
                if (e.code === "P2002") {
                    message = "Email already exists"
                }
                result.error = new ErrorResponse({ status: 404, message })
            }
        } else {
            try {
                await db.user.update({ where: { id: this.id }, data: { ...this } });
                result.success = true;
            } catch (e) {
                let message = "Failed to update user";
                result.error = new ErrorResponse({ status: 404, message })
            }
        }
        return result;
    }

    static async login(email: string, password: string) {
        let result: TUserLoginResponse = { error: null, token: null };
        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
            result.error = new ErrorResponse({ message: "User or Password Incorrect", status: 404 });
        } else {
            const doMatch = await bcrypt.compare(password, user.password);
            if (!doMatch) {
                result.error = new ErrorResponse({ message: "User or Password Incorrect", status: 404 });
            } else {
                if (!user.isVerified) {
                    result.error = new ErrorResponse({ message: "Email not verified", status: 404 });
                } else {
                    const token = jwt.sign(user, process.env.SECRETTOKEN, { expiresIn: "24h" });
                    result.token = token;
                }
            }

        }
        return result;
    }
}