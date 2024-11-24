import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/auth';
import { Database } from './database/database';
import { userSchema } from './database/schemas/users';

config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Connected to \x1b[35mhttp://localhost:${process.env.PORT}\x1b[0m`);
});

export const db = new Database("tcm", [userSchema]);
