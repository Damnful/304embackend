var mysql = require('mysql');
/*create Connection*/
function connectServer() {

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'filmdatabase'
    });
    con.connect(function(error){
        if(!!error){
            console.log("Error");
        } else {
            console.log("Connected");
        }
    })
}