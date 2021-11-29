const {Router} = require('express');
const router = Router();
router.get('/',(req,res)=> {
    res.send("using student api routes");
})
module.exports = router;