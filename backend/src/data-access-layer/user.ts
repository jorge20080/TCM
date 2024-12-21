import { db } from "../app";
import { TUser, TUserLoginResponse, TUserSaveResponse } from "../types/user";
import bcrypt from 'bcryptjs';
import { ErrorResponse } from "../utils/ErrorResponse";
import jwt from 'jsonwebtoken';

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

    async sendVerificationToken() {

    }

    static async verifyEmail(email: string, token: string) {
        let result: TUserSaveResponse = { sucess: false, error: null };
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
                    result.sucess = true;
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

    async save() {
        let result: TUserSaveResponse = { sucess: false, error: null }
        if (!this.id) {
            const hashedPass = await bcrypt.hash(this.password, 12);
            const data = {
                givenName: this.givenName,
                lastName: this.lastName,
                email: this.email,
                password: hashedPass
            }
            try {
                await db.user.create({ data });
                result.sucess = true;
            } catch (e) {
                let message = "Failed to create user";
                if (e.code === "P2002") {
                    message = "Email already exists"
                }
                result.error = new ErrorResponse({ status: 404, message })
            }
        } else {
            result.error = new ErrorResponse({ status: 404, message: "Failed to create user" })
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