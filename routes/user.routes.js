import express from 'express';
import pool from '../config/db.config.js';
import bcrypt from 'bcrypt'
const router = express.Router();
router.get ('/',async(req,res)=>{
    try {
        const user= await pool.query('SELECT * FROM users;')
        res.json({user:user.rows});
    }catch (error) {
        res.status(500).json({error: error.message});
    }
})
router.post('/',async(req,res)=>{
    try { 
        // cors faktor in bcrypt up to max:30 in this project we use 10.
        const passwordhash= await bcrypt.hash(req.body.password,10);
        const addNewUser= await 
        pool.query('INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *'
        ,[req.body.name,req.body.email,passwordhash]);
        res.json({user:addNewUser.rows[0]});

    }
    catch(error){
        res.status(500).json({error:error.message})

    }})
export default router;