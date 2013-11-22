var http = require('http');
var concat = require('concat-stream');
var results = {};
var x = 0;

//console.log(argv);
var getStuff = function(count) {
    http.get(process.argv[2+count], function(res) {
        res.setEncoding('utf8');
        res.pipe(concat(function(data) {
            results[count] = data;
            x++;
            if(x==3){
                console.log(results['0']);
                console.log(results['1']);
                console.log(results['2']);
            }
        }));
    });
}

for(var i=0;i<3;i++) {
    getStuff(i);
}
