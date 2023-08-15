const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',     // Cambia esto a tu host de MySQL
  user: 'root',    // Cambia esto a tu usuario de MySQL
  password: '', // Cambia esto a tu contraseña de MySQL
  database: 'dbpersonas' // Cambia esto a tu base de datos de MySQL
});

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error);
  }
    console.log('Conexión exitosa a la base de datos MySQL');
  
});

module.exports = connection;
