var express = require('express');
var fs = require('fs');

var app = express();
var public_path = express.static('dist');
var port = 3000;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(public_path);

var server = app.listen(port, function () {
    console.info(__dirname + "==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
});

module.exports = server;
