var express = require("express");

var app = express();

//http://localhost:8000/
app.get('/', function (req, res) {
    req.accepts('text/html');
    res.send(req.protocol);
});

var server = app.listen(8000, function () {
    console.log('Server is running at: ' + server.address().port)
});