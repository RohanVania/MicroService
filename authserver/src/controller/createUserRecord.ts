import { Request, Response } from 'express';
import { UserModel } from '../model/User';

// Correct the import statement if necessary
// Assuming createUserRecord is an asynchronous function that creates a user record
export const createUserRecord = async (req: Request, res: Response) => {
    try {
        const {email,password}=req.body;

        if(!email || !password){
            throw new Error("Password or email missing while creating a new Record");
        }

        const createResponse=await UserModel.create({
            email:email,
            password:password
        })

        console.log(createResponse);
        return res.status(200).json({
            status:'Success',
            msg:'user Created',
            responseData:createResponse
        })

        // Your logic for creating a user record goes here
    } catch (err) {
        console.error(err);
    }
};

export const login=async(req:Request,resp:Response)=>{
    try{
        const authorization=req.headers.authorization;
        if(!authorization){
            throw new Error("No Authorization Token")
        }
        }catch(err){

    }

}
