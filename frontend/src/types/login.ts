import { TErrorResponse } from "./error"

export type TLoginResponse = TLoginSucessResponse & TErrorResponse

export type TLoginSucessResponse = {
    token: string,
    message: string,
}
export type TLoginParams = {
    email: string,
    password: string
}