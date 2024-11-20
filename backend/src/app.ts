import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/auth';

config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Connected to http://localhost:${process.env.PORT}`);
})