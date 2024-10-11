const express = require('express');


const app = express();
const port= 5000;


app.use('/',(req, res, next) => {
    res.send("Welcome")
    console.log("Hello, world!");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});