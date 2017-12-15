var mysql = require('mysql');
/*create Connection*/


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
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
    var sql = "INSERT INTO users (username, email, password) VALUES (username, email, password)"
}


