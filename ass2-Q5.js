const express = require('express');
const app = express();

const mysql = require('mysql2');

app.use(express.static("sf"));

app.listen(5555,function(){
    console.log("server start");

});

app.get('/getbalance', (req, resp) => {
    console.log("ajax function called");
    const dbobject = {
        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'jalgaon',
        port: 3306
    }
    const conn = mysql.createConnection(dbobject);

    let output = { status: false, detail: { accno: 0, balance: "" } }
    let accno = req.query.accno;
    console.log(accno);
    conn.query('select accno, balance from account where accno = ?', [accno],
        (error, rows) => {
            if (error) {
                console.log(error);
            }
            else {
                if (rows.length > 0) {
                    output.status = true;
                    output.detail = rows[0];
                }
                else {
                    console.log("No account with this Account No.");
                }
            }
            console.log(output);
            resp.send(output);
        });

});