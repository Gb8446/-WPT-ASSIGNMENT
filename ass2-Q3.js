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
    let input1 = {resourceid: 1, resourcename: 'printer', status: true}
    let input2 = {resourceid: 2, resourcename: 'monitor', status: false}
    let input3 = {resourceid: 3, resourcename: 'mouse', status: false}

    conn.query('insert into resourse(resourceid, resourcename, status) values (?,?,?), (?,?,?), (?,?,?)', 
            [input1.resourceid, input1.resourcename, input1.status,
                input2.resourceid, input2.resourcename, input2.status,
                input3.resourceid, input3.resourcename, input3.status], 
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
    let input4 = true;
    let input5 = 2;
    conn.query('update resourse set status = ? where resourceid = ?', [input4, input5],
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
    conn.query('select * from resourse where resourceid = ?', [input6], 
        (error, rows) => {
            if(error){
                console.log(error);
            }
            else{
                if(rows.length > 0){
                    console.log("resource found with resourceid : "+input6);
                    console.log(rows[0]);
                }
                else{
                    console.log("No resource found with resourceid : "+input6);
                }
            }
        });


// MULTI SELECT
    conn.query('select * from resourse', [], 
    (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            if(rows.length > 0){
                console.log("resources found");
                for(let i=0; i<rows.length; i++){
                    console.log(rows[i]);
                }
            }
            else{
                console.log("No resource found");
            }
        }
    });