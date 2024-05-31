import express from 'express';
import dotenv from "dotenv"
import {Response,Request,NextFunction} from "express"
import { UserRoutes } from './routes/UserRoutes';
dotenv.config({path:"../environmentfolders/.env"})


const app = express();

app.use(express.json());
app.use(UserRoutes)


app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});


app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
  console.log("Default express error handler called \n");
  console.log(err);
  return 
})

export {app};
