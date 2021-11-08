//installo el módulo mysql
const mysql = require('mysql');
//inicializo la conexión con el servidor de mysql y la base de datos y el usuario
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1122',
    database: 'teknos_bd'
});
//conecto la base de datos mostrando el error si existe y si no va mostrar el mensaje de conexión exitosa 
conection.connect( (err) =>{
    if(err) throw err
    console.log('la conexión funciona')
});
//exporto la conexión para poder usarla en otros archivos 
conection.end( (err) =>{
    if(err) throw err
    console.log('la conexión se cierra')
});
//exporto la conexión para poder usarla con otros archivos 
conection.query('SELECT * from users' , (err, rows) =>{
    if(err) throw err
    console.log('Los datos de la tabgla son estos:')
    console.log(rows)
});

//fin de la conexión con la base de datos
conection.end()