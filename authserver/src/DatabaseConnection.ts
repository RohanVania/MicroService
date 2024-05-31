import { MongoClient } from "mongodb"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../environmentfolders/.env" })


//** Connection using MONGODB */

// async function listDatabases(client:MongoClient){
//     let databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// export const mainDBConnection=async ()=>{
//     const client=new MongoClient(process.env.DATABASE_CONNECTION_STRING!);
//     try{
//         const responseConnectionStatus =await client.connect();
//         const list= await listDatabases(client);

//     }
//     catch(err){
//         console.log(err);

//     }

// }

//** Connection using MONGOOSE */

export const mainDBConnection = async () => {
    if (!process.env.DATABASE_CONNECTION_STRING) {
        throw new Error("DATABASE_CONNECTION_STRING_MISSING");
    }
    try {
        let connectionString=process.env.DATABASE_CONNECTION_STRING;
        const mongoconnect=await mongoose.connect(connectionString)
        return await mongoose.connection.listDatabases();
    }
    catch (err) {
        console.log(err);
    }

}


