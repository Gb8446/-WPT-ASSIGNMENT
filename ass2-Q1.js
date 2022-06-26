const mysql = require('mysql2');

let dbobject = {
    host: 'localhost',
    user: 'kaustubh',
    password: 'cdac',
    database: 'study',
    port: 3306
}

const connection = mysql.createConnection(dbobject);

console.log("Connection Successful!!");