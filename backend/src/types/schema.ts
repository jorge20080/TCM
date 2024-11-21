export type Schema = NoKey | PrimaryKey | ForeignKey;

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
        key?: undefined,
        type: "INTEGER" | "STRING" | "BOOLEAN",
        required?: true,
        unique?: true
    }
}