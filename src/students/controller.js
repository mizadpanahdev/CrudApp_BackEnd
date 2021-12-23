
const { query } = require('express');
const pool = require('../../db');
const queris =require('./queries');
//get method: retrieve all record in person table!
const getStudents = (req,res)=> {
    pool.query(queris.getStudents, (error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}
//post method: check the email is exist if not add student to the db!
const addStudent =(req,res)=>{
    const {first_name,last_name,email,gender,date_of_birth,country_of_birth}= req.body;
    pool.query(queris.checkStudentByEmail,[email],(error,result)=>{
        if (result.rows.length){
            res.send("the email is exist");
        } 
    pool.query(queris.addStudentToDb,[first_name,last_name,email,gender,date_of_birth,country_of_birth],(error,result)=>{
        if (error) throw error;
        res.status('201').send("the student created successsfully!");
    })
    })

};
// get method byID: retrive the record with checking id.
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
// implement delete method with checking id student.
const removestudent = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queris.getStudentsById,[id],(error,result)=>{
        const nostudent = !(result.rows.length);
        if(nostudent) {
            res.send("the student doesn't exist in database")
        }else
    pool.query(queris.removestudent,[id],(error,result)=>{
        if (error) throw error;
        res.status(200).send(`the student with id:${id} deleted!`)
    })
    })
};
// implement put method with checking id student:

const updatestudent =(req,res)=>{
    const id= parseInt(req.params.id);
    const {first_name}=req.body;
    pool.query(queris.getStudentsById,[id],(error,result)=>{
        const nostudent= ! result.rows.length
    if (nostudent){
        res.send("the student doesn't exist in db!")
    }else
    {
        pool.query(queris.updatestudent,[first_name,id],(error,result)=>{
            res.status(200).send("the student update successfully")
        })
    }
    })

};


module.exports = {
  getStudents,
  getStudentById,  
  addStudent,
  removestudent,
  updatestudent
};