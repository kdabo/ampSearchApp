var express = require('express');

var app = express();
var public_path = express.static(__dirname + '/public');
var port = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(public_path);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(port, function () {
    const port = server.address().port;
    console.info(__dirname + "==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
});

module.exports = server;
