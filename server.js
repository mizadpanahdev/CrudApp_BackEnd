const experss = require('express')
const studentroute = require('./src/students/routes');
const app = experss();
const port = 3000;

app.get("/",(req,res) => {
    res.send('hello world!');
});
app.use('/api/v1/student',studentroute);
app.listen(port,()=> console.log(`app listening to port ${port}`));

