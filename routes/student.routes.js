import express  from 'express';
const  router = express.Router();
import controller from "../controllers/student.controller.js";
router.get("/",controller.getStudents);
router.get("/:id",controller.getStudentById);
router.post("/",controller.addStudent);
router.delete("/:id",controller.removestudent);
router.put("/:id",controller.updatestudent);
export default router;
