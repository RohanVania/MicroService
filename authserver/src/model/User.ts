import { Document } from "mongoose";
import {updateIfCurrentPlugin} from  "mongoose-update-if-current"
import mongoose from "mongoose";

interface User{
    email:String,
    password:String
}

interface UserModel extends User,Document{}

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true
    }
})

userSchema.plugin(updateIfCurrentPlugin)


export const UserModel=mongoose.model<UserModel>("User",userSchema);

