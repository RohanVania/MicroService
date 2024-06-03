import express from  "express"
import "express-async-errors"

import {createUserRecord,login} from "../controller/UserAuthController"

const router=express.Router();

router.post("/api/user/create-user", createUserRecord)
router.post("/api/user/login",login)




export {router as UserRoutes}