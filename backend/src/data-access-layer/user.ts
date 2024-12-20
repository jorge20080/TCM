import { prisma } from "../app";
import bcrypt from 'bcryptjs';
import { TUser } from "../types/user";

export class User {
    id: string | undefined;
    givenName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";

    constructor(user: TUser) {
        this.id = user.id;
        this.givenName = user.givenName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
    }

    async save() {

    }
}