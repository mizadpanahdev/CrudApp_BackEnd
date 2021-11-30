const { query } = require('express');
const pool = require('../../db');
const getStudents = (req,res)=> {
    pool.query("SELECT * FROM person;", (error,result)=>{
        if (error) throw error;
        res.status(200).json(row.result);
    })
}

module.exports = {
    getStudents,
};