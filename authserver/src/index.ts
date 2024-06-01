import dotenv from "dotenv"
import {app} from "./mainserver.ts"
import {mainDBConnection} from "./DatabaseConnection.ts"
dotenv.config({path:"./environmentfolders/.env"})

const startAllConfigForServer=async ()=>{
    console.log("Server Config Starting ")
    if(!process.env.PORT){
        throw new Error("PORT MISSING");
    }
    if(!process.env.JWT_SECRET){
        throw new Error("JWT_SECRET MISSING");
    }
  
    try{
       const connectionResponse=await mainDBConnection()
        console.log("Connected to AUTH MongoDb");
        const databases=connectionResponse?.databases;
        console.log("List of Databases in our cluster =>",databases)

    }catch(err){
        console.log(err)

    }
    // app.listen(process.env.PORT,"0.0.0.0",()=>{
    //     console.log(`AUTH Server started at http://localhost:${process.env.PORT}`)
    // })

    app.listen(4001,'0.0.0.0',()=>{
        console.log(`AUTH Server started at http://localhost:${process.env.PORT}`)
    })
   
}

startAllConfigForServer();

