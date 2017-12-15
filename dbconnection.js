var mysql = require('mysql');
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

module.exports = connection;
