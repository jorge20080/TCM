import { BaseModel } from "./baseModel";
import { TUser } from "../types/user";

export class User extends BaseModel {
    userId: undefined | number;
    givenName: string;
    lastName: string;
    email: string;
    password: string;
    isVerified: boolean;
    verificationToken: undefined | string;
    resetToken: undefined | string;

    constructor(user: TUser) {
        super();
        this.userId = user.userId;
        this.givenName = user.givenName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.isVerified = user.isVerified;
        this.verificationToken = user.verificationToken;
        this.resetToken = user.resetToken;
    }
}