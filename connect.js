var mysql = require('mysql');

//koneksi database

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'rest_api'
});

conn.connect((er)=>{
    if(err) throw err;
    console.log("terkoneksi");
});

module.exports = conn;