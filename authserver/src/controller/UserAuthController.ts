import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../model/User';
import bcrypt from "bcrypt"



// Correct the import statement if necessary
// Assuming createUserRecord is an asynchronous function that creates a user record
export const createUserRecord = async (req: Request, res: Response) => {
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

        if(!createResponse){
            throw new Error("somewthin went wrong while creating a user")
        }

        return res.status(200).json({
            status:'Success',
            msg:'user Created',
            responseData:createResponse
        })

};

export const login=async(req:Request,resp:Response)=>{
        // const authorization=req.headers.authorization;
        // if(!authorization){
        //     throw new Error("No Authorization Token")
        // }

        // console.log(authorization);
        

        const {email,password}=req.body;

        if(!email || !password){
            throw new Error("Missing Credentials");
        }

        const userData=await UserModel.findOne({email:email});
        if(!userData){
            return resp.status(404).json({
                status:"Failed",
                msg:'User with given email dont exists',
                data:userData
            })
        }
        const checkpassword=await bcrypt.compare(password,userData.password as string);
        if(checkpassword===false){
            console.log(1);
            throw new Error("Password Invalid");
        }

        userData.password=undefined!

        return resp.status(200).json({ 
            status:"Success",  
            message:"User logged in Successfully",
            data:userData
        })


}
