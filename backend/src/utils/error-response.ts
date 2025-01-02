type TError = {
    message: string,
    status: number,
    errors?: any[],
    errorObj?: {
        [key: string]: string
    }
}
export class ErrorResponse extends Error {
    status: number;
    errors: any[];
    errorObj: { [key: string]: string }

    constructor(error: TError) {
        super();
        this.message = error.message;
        this.status = error.status;
        this.errors = error.errors;
        this.errorObj = error.errorObj
    }
}