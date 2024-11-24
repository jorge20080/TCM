import { db } from "../app";

export class BaseModel {
    id: undefined | number;

    save() {
        return new Promise((resolve) => {
            let sql = `INSERT`
        })
    }
    static getAll(): Promise<[]> {
        return new Promise((resolve) => {
            let sql = `SELECT * FROM ${this.name}s`;
            db?.connection?.query(sql, (err, data) => {
                return resolve(data);
            });
        })
    }
    static getAllBy() {

    }
    static getById() {

    }
    delete() {

    }
}