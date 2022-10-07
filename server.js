const express = require('express');

const app = express();

app.get('/', function (req,res) {
    res.send('<h1>Welcome to the Body Bell Database</h1>'
    )
})

app.listen(4000, function (){
    console.log('Listening on Port 4000')
})