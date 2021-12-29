import express from "express";
import pool from "../config/db.config.js";
import bcrpt from "bcrypt";
import Jwt  from "jsonwebtoken";
const router = express.Router();

router.post('/login',async(req,res)=>{
    try{
        const{email,password}=req.body;
       const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email]);
       if (users.rows.length===0) return (res.status(401).json({error: "the email is incorrect!"}))
       

    }
    catch{

    }
})


export default router;