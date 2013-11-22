var http = require("http");
var site = process.argv[2];
http.get(site, function(res) {
    res.setEncoding("utf8");
    res.on('data', function(data) {
        console.log(data);
    });
}).on('error', function(e) {
    console.log("Got an error.\n" + e.message);
});
