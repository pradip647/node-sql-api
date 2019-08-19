'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test_node_php'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;