var mysql = require('mysql');
/*create Connection*/
function connectServer() {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'filmdatabase'
    });
    con.connect(function (err) {
        if (err) {
            console.log("Error");
        } else {
            console.log("Connected");
        }
    })
}

function insertDetails(client, username, email, password, callback) {
    client.query("INSERT INTO users{username, email, password) value(?,?,?)",
        [username, email, password], function(err, result) {
        if(err) {
            callback(err.message);
        } else {
            callback("Successfully added");
        }
        });
}

function getDetails(client, username, callback) {
    client.query('SELECT userID, email, password FROM users WHERE username  = "' + username + '"',
        function(err, results, fields) {
        if(err) {
            callback(err.message);
        } else {
            callback(results);
        }
    });
}

function addFilm(client, filmName, filmGenre, yearReleased, userRating, criticRating) {
    client.query("INSERT INTO users{filmName, filmGenre, yearReleased, userRating, criticRating) value(?,?,?,?,?)",
        [filmName, filmGenre, yearReleased, userRating, criticRating], function(err, result) {
            if(err) {
                callback(err.message);
            } else {
                callback("Successfully added");
            }
        });
}

exports.connect = connectServer;
exports.insertDetails = insertDetails;
exports.getDetails = getDetails;
exports.addFilm = addFilm;