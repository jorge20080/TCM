import { db } from "../app";
import { TUser, TUserSaveResponse } from "../types/user";
import bcrypt from 'bcryptjs';
import { ErrorResponse } from "../utils/ErrorResponse";

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
}