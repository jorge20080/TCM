import { Database as Db } from 'sqlite3';

export class Database {
    private connection: undefined | Db;

    constructor(name: string) {
        this.connection = new Db(name);
    }

    getConnection() {
        return this.connection;
    }
}