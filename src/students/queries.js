const getStudents = " SELECT * FROM person;"
const getStudentsById = "SELECT * FROM person WHERE id= $1;"
module.exports= {
    getStudents,
    getStudentsById,
}