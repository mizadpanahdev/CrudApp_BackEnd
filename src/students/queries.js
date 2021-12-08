const getStudents = " SELECT * FROM person;";
const getStudentsById = "SELECT * FROM person WHERE id= $1;";
const checkStudentByEmail = "SELECT s FROM person s WHERE s.email= $1;";
const addStudentToDb = "INSERT INTO person (first_name, last_name, email, gender, date_of_birth, coutry_of_birth) VALUES ($1, $2, $3, $4, $5, $6);";
module.exports= {
    getStudents,
    getStudentsById,
    checkStudentByEmail,
    addStudentToDb,
}