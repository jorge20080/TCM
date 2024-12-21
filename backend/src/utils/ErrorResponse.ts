type TError = {
    message: string,
    status: number,
    errors?: any[]
}
export class ErrorResponse extends Error {
    status: number;
    errors: any[];
    constructor(error: TError) {
        super();
        this.message = error.message;
        this.status = error.status;
        this.errors = error.errors;
    }
}