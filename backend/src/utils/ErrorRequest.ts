type TError = {
    message: string,
    status: number,
    errors?: any[]
}
export class ErrorRequest {
    message: string;
    status: number;
    errors: any[];
    constructor(error: TError) {
        this.message = error.message;
        this.status = error.status;
        this.errors = error.errors;
    }
}