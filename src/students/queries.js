const getStudents = " SELECT * FROM person;"
const getStudentsById = "SELECT * FROM person WHERE id= $1;"
const checkStudentByEmail = "SELECT s FROM person s WHERE s.email=$1;"
module.exports= {
    getStudents,
    getStudentsById,
    checkStudentByEmail,
}