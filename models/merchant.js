const mysql = require('mysql');
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT_DB,
  
});