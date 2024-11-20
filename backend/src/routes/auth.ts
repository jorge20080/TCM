import { Router } from 'express';

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.json({ message: "auth test" })
})

export default authRouter;