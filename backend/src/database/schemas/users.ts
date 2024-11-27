import { Schema } from "../../types/schema";

export const userSchema: Schema = {
    tableName: "users",
    tableSchema: {
        id: {
            key: "PRIMARY",
            type: "INTEGER",
            autoIncrement: true
        },
        givenName: {
            type: "VARCHAR",
            length: 30,
            required: true
        },
        lastName: {
            type: "VARCHAR",
            length: 30,
            required: true
        },
        email: {
            type: "VARCHAR",
            required: true,
            length: 30,
            unique: true
        },
        password: {
            type: "VARCHAR",
            length: 100,
            required: true
        },
        isVerified: {
            type: "BOOLEAN",
            required: true
        },
        verificationToken: {
            type: "VARCHAR",
            length: 50,
        },
        resetToken: {
            type: "VARCHAR",
            length: 50,
        }
    }
}