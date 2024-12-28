export type TErrorResponse = {
    error: {
        status: number,
        message: string,
        errors: { status: number, message: string, path: string[] }[]
    }
}