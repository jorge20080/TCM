export type TUser = {
    id?: number,
    givenName: string,
    lastName: string,
    email: string,
    password: string,
    isVerified: boolean,
    verificationToken?: string,
    resetToken?: string
}