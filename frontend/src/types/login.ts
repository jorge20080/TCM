export type TLoginResponse = TLoginSucessResponse & TLoginErrorResponse

type TLoginSucessResponse = {
    token: string,
    message: string,
}

type TLoginErrorResponse = {
    error: object
}