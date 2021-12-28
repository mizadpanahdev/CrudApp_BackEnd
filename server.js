//expres is default export and {json} is a name export.
import express,{json} from "express";
import cors from "cors"; 
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import {dirname,join} from "path";
import { fileURLToPath } from "url";
import  userRouter from "./routes/user.routes.js";
import studentroute from "./routes/student.routes.js";
dotenv.config();
const __dirname= dirname(fileURLToPath(import.meta.url));
const app=express();
const port = process.env.port || 3000;
const corsoption= {Credential:true, origin:process.env.url||'*'};
app.use(cors(corsoption));
app.use(json());
app.use(cookieParser());
app.use('/',express.static(join(__dirname,'public')));
app.listen(port,()=>{
    console.log(`app listen on port ${port} `)
})
app.use('/api/users',userRouter);
app.use('/api/v1/student',studentroute);
