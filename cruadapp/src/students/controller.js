
const { query } = require('express');
const pool = require('../../db');
const queris =require('./queries');
const getStudents = (req,res)=> {
    pool.query(queris.getStudents, (error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}
const addStudent =(req,res)=>{
    const {first_name,last_name,email,gender,date_of_birth,country_of_birth}= req.body;
    //check the email is exist
    pool.query(queris.checkStudentByEmail,[email],(error,result)=>{
        if (result.rows.length){
            res.send("the email is exist");
        } 
    // add student if the emial doesn't exist in db
    pool.query(queris.addStudentToDb,[first_name,last_name,email,gender,date_of_birth,country_of_birth],(error,result)=>{
        if (error) throw error;
        res.status('201').send("the student created successsfully!");
    })
    })

};
const getStudentById= (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queris.getStudentsById,[id],(error,result)=>{
        if (!result.rows.length) {
            res.send("the student dosen't exist in database")
        }
        else
        res.status(200).json(result.rows);
    })
};
// method remove
const removestudent = (req,res)=>{
    //check the id is exist in db? and send message if is not
    const id = parseInt(req.params.id);
    pool.query(queris.getStudentById,[id],(error,result)=>{
        if(!result.rows.length) {
            res.status(200).send("the student doesn't exist in database")
        }
    })
    // remove the student
    
}
module.exports = {
  getStudents,
  getStudentById,  
  addStudent,
  removestudent
};