import express from  "express"
import {createUserRecord,login} from "../controller/UserAuthController"

const router=express.Router();

// router.post("/api/user/create-user",createUserRecord)
router.post("/api/user/create-user", async (req, res) => {
    await setTimeout(() => {throw new Error("test error")}, 2000)
    
})
router.post("/api/user/login",login)
router.post("/api/user/test",(req,resp)=>{
    throw new Error("asdhasdhuiashdiuhidsuhuishd")
})



export {router as UserRoutes}