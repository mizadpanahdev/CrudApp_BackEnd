const getStudents = " SELECT * FROM person;";
const getStudentsById = "SELECT * FROM person WHERE id= $1;";
const checkStudentByEmail = "SELECT s FROM person s WHERE s.email= $1;";
const addStudentToDb = "INSERT INTO person (first_name, last_name, email, gender, date_of_birth, country_of_birth) VALUES ($1, $2, $3, $4, $5, $6);";
const removestudent= " DELETE FROM person WHERE id=$1";
const updatestudent= " UPDATE person SET first_name=$1 WHERE id=$2"
module.exports= {
    getStudents,
    getStudentsById,
    checkStudentByEmail,
    addStudentToDb,
    removestudent,
    updatestudent
}