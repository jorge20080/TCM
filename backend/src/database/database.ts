import { Database as Db } from 'sqlite3';
import { Schema } from '../types/schema';

export class Database {
    private connection: undefined | Db;

    constructor(name: string, schemas: Schema[]) {
        this.connection = new Db(name);
        schemas.map(schema => {
            this.generateTable(schema);
        })
    }

    getConnection() {
        return this.connection;
    }

    generateTable(schema: Schema) {
        let sql = `CREATE TABLE IF EXISTS ${''}`
    }
}