import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../model/User';
import bcrypt from "bcrypt"



// Correct the import statement if necessary
// Assuming createUserRecord is an asynchronous function that creates a user record
export const createUserRecord = async (req: Request, res: Response) => {
    // try {
        console.log("check point 1")
        throw new Error("asduhsaduh")
        const {email,password}=req.body;

        if(!email || !password){
            throw new Error("Password or email missing while creating a new Record");
        }

        const emailFound=await UserModel.findOne({email:email});
        if(emailFound){
            throw new Error("Email already exists");
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const createResponse=await UserModel.create({
            email:email,
            password:hashedPassword
        })

        console.log(createResponse);

        return res.status(200).json({
            status:'Success',
            msg:'user Created',
            responseData:createResponse
        })

        // Your logic for creating a user record goes here
    // } catch (err) {
        // next(err);
    // }
};

export const login=async(req:Request,resp:Response)=>{
    try{
        // const authorization=req.headers.authorization;
        // if(!authorization){
        //     throw new Error("No Authorization Token")
        // }

        // console.log(authorization);

        const {email,password}=req.body;
        if(!email || !password){
            throw new Error("Missing Credentials");
        }

        





        }catch(err){

    }

}
