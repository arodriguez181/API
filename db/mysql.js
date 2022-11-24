const mysql = require('../node_modules/mysql');
const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    //password : '',
    //port: '3307',
    database: 'contacto'

});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return
    } else {
        console.log('DB se conecto')
    }
})

module.exports = mysqlConnection;