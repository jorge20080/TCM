export type TUser = {
    userId?: number,
    givenName: string,
    lastName: string,
    email: string,
    password: string,
    isVerified: boolean,
    verificationToken?: string,
    resetToken?: string
}