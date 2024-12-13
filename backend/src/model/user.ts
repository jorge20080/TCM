import { prisma } from "../app";
import bcrypt from 'bcryptjs';

type TUser = {
    id?: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type TCondition = {
    id?: string,
    email?: string,
    password?: string
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

    static async findBy({ id, email, password }: TCondition) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id,
                    email,
                    password
                }
            });
            return user;
        } catch {
            return;
        }
    }

    async save() {
        try {
            const hashedPass = await bcrypt.hash(this.password, 12);
            await prisma.user.create({
                data: {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: hashedPass
                }
            });
            return true;
        } catch {
            return;
        }
    }
}