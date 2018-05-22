var express = require('express');
var request = require('superagent');
var path = require('path');

var app = express();
var public_path = express.static(__dirname + '/public');
var port = 3001;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(public_path);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/ypSearchResult', function (req, res) {
    var whatTerm = req.query.what;
    request
        .post('https://www.detelefoongids.nl/v1/rest/api/ypSearchResult')
        .send({
            "what" : whatTerm,
            "whereTerm": {"where": "Amsterdam" }
            ,
            "sortBy": "relevance",
            "limit": 100,
            "startIndex": 0,
            "page":1,
            "skip":0,
            "originPath":"hovenier/colmschate/3-1/"
        })
        .end(function (err, response) {
            res.json(response.body);
        });
});


var server = app.listen(port, function () {
    const port = server.address().port;
    console.info(__dirname + " ==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
});

module.exports = server;
