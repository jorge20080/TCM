import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/auth';
import { PrismaClient } from '@prisma/client';

config();

export const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Connected to \x1b[35mhttp://localhost:${process.env.PORT}\x1b[0m`);
});