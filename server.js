const experss = require('express')
const app = experss();
const port = 3000;

app.get("/",(req,res) => {
    res.send('hello world!');
});
app.listen(port,()=> console.log(`app listening to port ${port}`));

