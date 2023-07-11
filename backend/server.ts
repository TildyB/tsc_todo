import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Data from "./modell/Todo.model"

dotenv.config();

const app:Express = express();

const port = process.env.PORT;
const uri:string = process.env.DB_URI || ""

app.use(express.json());


type Valasz = {
    name: String,
    location: String,
    isDone: Boolean
}

app.get("/",async (req:Request,res:Response)=>{
    const response: Valasz[] = await Data.find()
    res.status(200).json(response)
})

app.post("/api/upload",async(req,res,)=>{
        Data.create(req.body)
        res.status(200)
})

const connect_DB = async() =>{
    try{
       await  mongoose.connect(uri)
       app.listen(port,() => console.log("fut a server a porton: "+port+"-on"))
    }catch(error){
        console.log("nem jo")
    }
}
connect_DB()
