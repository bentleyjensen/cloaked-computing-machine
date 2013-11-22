var fs = require("fs");
var arr = [];
var small = 0;
module.exports = function(path, ext, callback){
    fs.readdir(path, function(err, list){
        if (err) { 
            return callback(err);
            console.log("BLEH!”);
        }
        else{
            for (var i = 0 ; i < list.length; i++){
                if ( list[i].match("\\." + ext)){
                    console.log(list[i]);
                    arr.push(list[i]);
                }               
            }
            return callback(null, arr);
        }
    });
}
