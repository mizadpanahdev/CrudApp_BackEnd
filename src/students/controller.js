const { query } = require('express');
const pool = require('../../db');
const queris =require('./queries');
const getStudents = (req,res)=> {
    pool.query(queris.getStudents, (error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}
const checkStudentByEmail =(req,res)=>{
    const {id,first_name,last_name,email,gender,date_of_birth,country_of_birth}= req.body;
    pool.query(queris.checkStudentByEmail,[email],(error,result)=>{
        if (result.rows.length){
            res.send('the email is exist');
        } 
    })

};
const getStudentById= (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queris.getStudentsById,[id],(error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    })
};
module.exports = {
    getStudents,
  getStudentById,  
  checkStudentByEmail,
};