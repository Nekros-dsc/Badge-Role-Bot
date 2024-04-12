const mysql = require("mysql")

module.exports = () =>{

    const db = mysql.createConnection({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        database: "rolebadge",
        charset: 'utf8mb4'

    })

    return db;
}