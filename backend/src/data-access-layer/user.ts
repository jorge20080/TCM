import { db } from "../app";
import { TUser } from "../types/user";
import bcrypt from 'bcryptjs';

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
                return true;
            } catch {
                return false;
            }
        } else {
            return false;
        }
    }
}