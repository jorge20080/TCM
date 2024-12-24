import { db } from "../app";
import { TUser, TUserLoginResponse, TUserSaveResponse } from "../types/user";
import bcrypt from 'bcryptjs';
import { ErrorResponse } from "../utils/ErrorResponse";
import jwt from 'jsonwebtoken';
import { Email } from "./email";

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

    async sendVerificationTokenEmail() {
        const msg = {
            to: 'jolusarez@gmail.com',
            from: 'jolusarez@gmail.com',
            subject: 'TCM Registration',
            text: 'and easy to do anywhere, even with Node.js',
            html: `<strong>verify your email: <a href="http://localhost:5173/?token=${this.verificationToken}">Link<a/></strong>`,
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
                await this.sendVerificationTokenEmail();
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
            console.log(doMatch)
            if (!doMatch) {
                result.error = new ErrorResponse({ message: "User or Password Incorrect", status: 404 });
            }
            const token = jwt.sign(user, process.env.SECRETTOKEN, { expiresIn: "24h" });
            result.token = token;
        }
        return result;
    }
}