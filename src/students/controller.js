const { query } = require('express');
const pool = require('../../db');
const queris =require('./queries');
const getStudents = (req,res)=> {
    pool.query(queris.getStudents, (error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}
const getStudentById= (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queris.getStudentsById,[id],(error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}
module.exports = {
    getStudents,
  getStudentById,  
};