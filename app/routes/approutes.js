'use strict';
module.exports = function(app) {
    /* Registraion */
    var Registration = require('../controller/regController');
    app.route('/createuser')
    .get(Registration.registerUserGET)
    .post(Registration.registerUserCNT)


};

    