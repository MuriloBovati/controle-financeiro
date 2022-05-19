var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Servidor a milhao")
    console.log('Servidor a milhao')
})