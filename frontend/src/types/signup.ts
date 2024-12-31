import { TErrorResponse } from "./error"

export type TSignupParams = {
    givenName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}
export type TSignUpResponse = TSignUpSucessResponse & TErrorResponse

export type TSignUpSucessResponse = {
    success: boolean,
    message: string,
}