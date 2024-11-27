export type Schema = {
    tableName: string,
    tableSchema: NoKey | PrimaryKey | ForeignKey;
}

type PrimaryKey = {
    [key: string]: {
        key: "PRIMARY",
        type: "INTEGER",
        autoIncrement?: true
    }
}

type ForeignKey = {
    [key: string]: {
        key: "FOREIGN",
        type: "INTEGER",
        reference: {
            table: string,
            column: string
        }
    }
}

type NoKey = {
    [key: string]: {
        type: "INTEGER" | "TEXT" | "BOOLEAN",
        required?: true,
        unique?: true
    } | {
        type: "VARCHAR",
        length: number,
        required?: true,
        unique?: true
    }
}