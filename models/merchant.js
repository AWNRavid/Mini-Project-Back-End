const mysql = require('mysql');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT_DB,
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});

class ModelMerchant {
  static Register(data) {
    const query = `INSERT INTO merchant (id, password, name, address, phone_number) VALUES (?,?,?,?,?)`;
    const values = [uuidv4(), data.password, data.name, data.address, data.phone_number];

    connection.query(query, values, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
    // return data;
  }
}
