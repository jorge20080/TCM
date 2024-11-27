import { Database as Db } from 'sqlite3';
import { Schema } from '../types/schema';
import mysql, { createConnection } from 'mysql';

export class Database {
    connection: undefined | mysql.Connection;

    constructor(name: string, schemas: Schema[]) {
        const tempConn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        tempConn.query(`CREATE DATABASE IF NOT EXISTS ${name}`, (err, result) => {
            console.log("Database created");
            this.connection = createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: name
            })
            schemas.map(schema => {
                this.generateTable(schema);
            });
        });
    }

    private generateTable(schema: Schema) {
        const keys = Object.keys(schema.tableSchema);
        const values = Object.values(schema.tableSchema);
        let sql = `CREATE TABLE IF NOT EXISTS ${schema.tableName} (`;
        let constraints = "";

        keys.forEach((key, idx) => {

            sql += `${key}`;
            sql += ` ${values[idx]["type"]}`;
            if (values[idx]["type"] === "VARCHAR") {
                sql += `(${values[idx]["length"]})`
            }
            if (values[idx]["required"] === true) {
                sql += " NOT NULL";
            }
            if (values[idx]["unique"]) {
                sql += " UNIQUE";
            };
            if (idx !== keys.length - 1) {
                if (values[idx]["key"] === "PRIMARY") {
                    sql += " PRIMARY KEY NOT NULL";
                    if (values[idx]["autoIncrement"]) {
                        sql += " AUTO_INCREMENT";
                    };
                }
                sql += ", ";
            } else {
                sql += constraints + ");";
            }
        })
        this.connection?.query(sql);
    }
}