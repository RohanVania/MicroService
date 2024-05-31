import express from  "express"
import {createUserRecord,login} from "../controller/createUserRecord"

const router=express.Router();

router.post("/api/user/create-user",createUserRecord)
router.post("/api/user/login",login)

export {router as UserRoutes}