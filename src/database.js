const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'bramarcor',
    password: '12341234',
    database: 'company',
    multipleStatements: 'true' // se usa para mantener los sets del Post en empleados.js
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Conexion exitosa a Base de Datos');
    }
});

module.exports = mysqlConnection;