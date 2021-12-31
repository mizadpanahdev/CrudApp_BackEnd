import express from "express";
import pool from "../config/db.config.js";
import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";
import {jwttoken} from "../utils/jwt-helpers.js";
const router = express.Router();


router.post('/login',async(req,res)=>{
    try{
        const{email,password}=req.body;
       const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email]);
       if (users.rows.length===0) return (res.status(401).json({error: "the email is incorrect!"}))
       //check password
       const validpassword = await bcrypt.compare(password,user.rows[0].user_password);
       if (!validpassword) then (res.status(401).send("user or password not found"));
       //jwt

    }
    catch{

    }
})


export default router;