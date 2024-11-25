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
            type: "TEXT",
            required: true
        },
        lastName: {
            type: "TEXT",
            required: true
        },
        email: {
            type: "TEXT",
            required: true
        },
        password: {
            type: "TEXT",
            required: true
        },
        isVerified: {
            type: "BOOLEAN",
            required: true
        },
        verificationToken: {
            type: "TEXT",
        },
        resetToken: {
            type: "TEXT"
        }
    }
}