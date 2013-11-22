var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req, res){
    req.pipe(map(function (data) {
        return data.toString().toUpperCase();
    })).pipe(res);
});

server.listen(8000);
