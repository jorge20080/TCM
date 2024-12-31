import { ErrorResponse } from "../utils/error-response.js";

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
export type TUserSaveResponse = {
    success: boolean,
    error: null | ErrorResponse
}
export type TUserLoginResponse = {
    error: null | ErrorResponse,
    token: string | null
}