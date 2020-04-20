const express = require("express"); 

const PORT = process.env.PORT || 3000; 

const app = express(); 

app.get((req, res) => {
    console.log(req.url); 
    res.end("Finished"); 
})



app.listen(PORT, () => {
    console.log("Listening..")
})