const Sequelize = require('sequelize')
require('dotenv').config();


let db = new Sequelize(process.env.DB_SCEM, process.env.DB_USER, process.env.DB_PASS, {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	logging : false,
	timezone: 'Asia/Bangkok',	
});

db.authenticate()
    .then(()=>{
        console.log("Connect to DB")
    })
    .catch((err)=>{
        console.log("cannot connect to db: " + err)
    })

module.exports = db;