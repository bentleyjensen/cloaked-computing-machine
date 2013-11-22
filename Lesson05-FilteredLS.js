var fs = require("fs");
var i = 0;
fs.readdir(process.argv[2], function (err, list) {
    if (err) { throw err; } 
    else{
        for ( i = 0 ; i <= list.length; i++){
            if ( list[i].match("\\." + process.argv[3])){
                console.log(list[i]);
            }               
        }
    }
});
