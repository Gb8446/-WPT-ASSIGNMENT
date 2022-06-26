const mysql = require('mysql2');

let dbobject = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'jalgaon',
    port: 3306
}

const conn = mysql.createConnection(dbobject);


//INSERT
    let input1 = {itemno: 1, itemname: 'pencil', price: 10, category: 'stationery'}
    let input2 = {itemno: 2, itemname: 'eraser', price: 5, category: 'stationary'}
    let input3 = {itemno: 3, itemname: 'scale', price: 15, category: 'stationery'}

    conn.query('insert into item(itemno, itemname, price, category) values (?,?,?,?), (?,?,?,?), (?,?,?,?)', 
            [input1.itemno, input1.itemname, input1.price, input1.category,
                input2.itemno, input2.itemname, input2.price, input2.category,
                input3.itemno, input3.itemname, input3.price, input3.category], 
            (error, resp) => {
                if(error){
                    console.log("Some error occurred "+error);
                }
                else{
                    if(resp.affectedRows > 0){
                        console.log("Objects Inserted successfully");
                    }
                    else{
                        console.log("insert command failed");
                    }
                }
            });


//UPDATE
    let input4 = 'writing thing';
    let input5 = 2;
    conn.query('update item set category = ? where itemno = ?', [input4, input5],
            (error, resp) => {
                if(error){
                    console.log("Some error occurred "+error);
                }
                else{
                    if(resp.affectedRows > 0){
                        console.log("Object Updated successfully");
                    }
                    else{
                        console.log("Update command failed");
                    }
                }
            });


// SINGLE SELECT
    let input6 = 3;
    conn.query('select * from item where itemno = ?', [input6], 
        (error, rows) => {
            if(error){
                console.log(error);
            }
            else{
                if(rows.length > 0){
                    console.log("Item found with itemno : "+input6);
                    console.log(rows[0]);
                }
                else{
                    console.log("No Item found with itemno : "+input6);
                }
            }
        });


// MULTI SELECT
    conn.query('select * from item', [], 
    (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            if(rows.length > 0){
                console.log("Items found");
                for(let i=0; i<rows.length; i++){
                    console.log(rows[i]);
                }
            }
            else{
                console.log("No Item found");
            }
        }
    });