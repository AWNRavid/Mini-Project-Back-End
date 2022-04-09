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

  static GetAllMerchant() {
    // const query = 'select * from merchant_test';
    const query = 'select * from merchant';
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) {
          throw err;
        } else {
          // console.log('Merchant list: ', result);
          resolve(result)
        }
      });
    })
  }

  static Login(data) {
    const query = `select * from merchant where name = ?`;
    const values = [data.name];

    return new Promise((resolve, reject) => {
      connection.query(query, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static DeleteAccount(id) {
    const query = `delete from merchant where id = ?`;
    const values = [id];

    connection.query(query, values, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  }

  static AddProduct(data, merch_id) {
    const query = `INSERT INTO product_info (id, name, quantity, price, merchant_id) VALUES (?,?,?,?,?)`;
    const values = [uuidv4(), data.name, data.quantity, data.price, merch_id];

    connection.query(query, values, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  }

  static ViewProduct(merch_id) {
    const query = `select * from product_info where merchant_id = ?;`;
    const values = [merch_id];

    // connection.query(query, values, (err, result) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log(result);
    //   }
    // });

    return new Promise((resolve, reject) => {
      connection.query(query, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static UpdateProduct(data, merch_id) {
    const query = `update product_info set name = ?, price = ?, quantity = ? where id = ? and merchant_id = ?;`;
    const values = [data.name, data.price, data.quantity, data.id, merch_id];

    connection.query(query, values, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  }
}

module.exports = ModelMerchant;
