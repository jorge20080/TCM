import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/auth';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middlewares/error-handler';

config();

export const db = new PrismaClient();

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/", errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Connected to \x1b[35mhttp://localhost:${process.env.PORT}\x1b[0m`);
});