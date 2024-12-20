export type TUser = {
    id?: string | undefined;
    givenName: string;
    lastName: string;
    email: string;
    password: string;
    isVerified?: boolean,
    verificationToken?: string,
    resetToken?: string,
    updatedAt?: Date,
    createdAt?: Date
}