'user strict';
var sql = require('./db.js');
//Task object constructor
var Registration = function(data){
    this.name = data.name;
    this.email = data.email;
    this.password= data.password;
};

Registration.createUserRegistration = function (newTask, result) {    
    sql.query("INSERT INTO node_example set ?", newTask, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

module.exports= Registration;