const { json } = require('express');
const experss = require('express');
var cors = require('cors')
const studentroute = require('./src/students/routes');
const app = experss();
const port = 3000;
app.use(experss.json());
app.use(cors({
    "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.get("/",(req,res) => {
    res.send('hello world!');
});
app.use('/api/v1/student',studentroute);
app.listen(port,()=> console.log(`app listening to port ${port}`));

