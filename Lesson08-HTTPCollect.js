var http = require('http');
var concat = require('concat-stream');
var write = concat(function(data) {});
var site = process.argv[2];

http.get(site, function(res) {
    res.setEncoding("utf8");
    res.pipe(concat(function(data) {
        console.log(data.length);
        data.toString();
        //console.log("Length is " + data.length);
        console.log(data);
    } ) );
}).on('error', function(e) {
    console.log("Welp, ya darn messed up. \n" + e);
    });

