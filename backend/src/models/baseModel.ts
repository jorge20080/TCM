import { db } from "../app";

export class BaseModel {
    id: undefined | number;

    save() {
        return new Promise((resolve) => {
            if (this.id === undefined) {
                const keys = Object.keys(this);
                const values = Object.values(this).map(value => value === undefined ? null : value);
                const hiddenValues = values.map(() => "?");
                let sql = `INSERT INTO ${this.constructor.name.toLowerCase()}s (`
                sql += keys.toString() + ")" + " VALUES (" + hiddenValues.toString() + ")";
                db.connection?.query(sql, values, (err) => {
                    console.log(err);
                })
            } else {

            }
        });
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