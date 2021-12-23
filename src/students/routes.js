const {Router} = require('express');
const  router = Router();
const controller = require('./controller')
router.get("/",controller.getStudents);
router.get("/:id",controller.getStudentById);
router.post("/",controller.addStudent);
router.delete("/:id",controller.removestudent);
router.put("/:id",controller.updatestudent);
module.exports = router;