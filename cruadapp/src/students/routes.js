const {Router} = require('express');
const  router = Router();
const controller = require('./controller')
router.get("/",controller.getStudents);
router.post("/",controller.addStudent);
router.delete("/:id",controller.removestudent);
router.get("/:id",controller.getStudentById);
module.exports = router;