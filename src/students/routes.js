const {Router} = require('express');
const router = Router();
const controller = require('./controller')
router.get('/',(req,res)=> {
    res.send("using student api routes");
})
router.get("/",controller.getStudents);
module.exports = router;