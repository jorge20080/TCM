import { Database as Db } from 'sqlite3';
import { Schema } from '../types/schema';
import mysql, { createConnection } from 'mysql';

export class Database {
    private connection: undefined | mysql.Connection;

    constructor(name: string, schemas: Schema[]) {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            //database: name
        });

        this.connection.query(`CREATE DATABASE IF NOT EXISTS ${name}`, (err, result) => {
            console.log("Database created");
            this.connection?.destroy();
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

    getConnection() {
        return this.connection;
    }

    generateTable(schema: Schema) {
        const keys = Object.keys(schema.tableSchema);
        const values = Object.values(schema.tableSchema);
        let sql = `CREATE TABLE IF NOT EXISTS ${schema.tableName} (`;

        keys.forEach((key, idx) => {
            sql += `${key}`;
            sql += ` ${values[idx]["type"]}`;

            if (idx !== keys.length - 1) {
                if (values[idx]["key"] === "PRIMARY") {
                    sql += " PRIMARY KEY NOT NULL";
                    if (values[idx]["autoIncrement"]) {
                        sql += " AUTO_INCREMENT";
                    };
                }
                sql += ", ";
            } else {
                sql += ")";
            }
        })
        this.connection?.query(sql)
    }
}