import { prisma } from "../app";
import bcrypt from 'bcryptjs';

type TUser = {
    id?: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class User {
    id: string | undefined;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";

    constructor(user: TUser) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
    }

    async save() {

    }
}