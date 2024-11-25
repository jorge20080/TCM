import { BaseModel } from "./baseModel";
import { TUser } from "../types/user";
import bcryptjs from "bcryptjs";
import crypto from "crypto";

export class User extends BaseModel {
    givenName: string;
    lastName: string;
    email: string;
    password: string;
    isVerified: boolean;
    verificationToken: undefined | string;
    resetToken: undefined | string;

    constructor(user: TUser) {
        super();
        this.id = user.id;
        this.givenName = user.givenName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = bcryptjs.hashSync(user.password, 12);
        this.isVerified = false;
        this.verificationToken = crypto.randomUUID();
    }
}