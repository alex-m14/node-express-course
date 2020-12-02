const express = require ('express'); //gives you access to express library
const app = express(); //creates instance of express constructor 

app.listen(8000, function(){
    console.log("server is running")
})
