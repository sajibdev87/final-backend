import express from "express"
import { loginUser,regustarUser } from "../controllers/userControlar.js"

const userRouter = express.Router()

userRouter.post("/resiter",regustarUser)
userRouter.post("/login",loginUser)
export default userRouter;