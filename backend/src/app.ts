import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/auth';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { errorHandler } from './middlewares/error-handler';

config();
export const db = new PrismaClient();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "",
    credentials: true,
}));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/", errorHandler);

app.listen(port, () => {
    console.log(`Connected to \x1b[35mhttp://localhost:${port}\x1b[0m`);
});