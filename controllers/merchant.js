const ModelMerchant = require('../models/merchant');
var isLogin = false;
var id = undefined;

class ControllerMerchant {
  static Register(req, res) {
    ModelMerchant.Register(req.body);
    res.status(201).json('register success');
  }

  static GetAllMerchant(req, res) {
    ModelMerchant.GetAllMerchant().then((result) => {
      res.status(200).json(result);
    });
  }

  static Login(req, res) {
    ModelMerchant.Login(req.body).then((result) => {
      // console.log(result);
      if (result.length == 0) {
        console.log(`user not found`);
        res.status(404).json('not found');
      } else {
        if (req.body.password == result[0].password) {
          // console.log(`Login success`);
          res.status(200).json(`login success`);
          isLogin = true;
          console.log(isLogin);
          id = result[0].id;
          // this.DeleteAccount(req, res, true, result[0].id);
        } else {
          // console.log(`Incorrect password`);
          res.status(400).json(`Incorrect password`);
        }
      }
    });
  }

  static DeleteAccount(req, res) {
    if (isLogin == false) {
      console.log('access denied');
      res.sendStatus(401);
    } else {
      req.params.id = id;
      ModelMerchant.DeleteAllProduct(req.params.id);
      ModelMerchant.DeleteAccount(req.params.id);
      console.log('delete success');
      res.sendStatus(200);
      isLogin = false;
    }
  }

  static AddProduct(req, res) {
    if (isLogin == false) {
      res.sendStatus(401);
      console.log('access denied');
    } else {
      ModelMerchant.AddProduct(req.body, id);
      res.sendStatus(200);
    }
  }

  static ViewProduct(req, res) {
    if (isLogin == false) {
      res.sendStatus(401);
      console.log('access denied');
    } else {
      req.params.id = id;
      ModelMerchant.ViewProduct(req.params.id).then((result) => {
        // console.log(result);
        // result.array.forEach(element => {
        //   console.log(element);
        // });
        if (result.length == 0) {
          res.status(404).json('No products found');
        } else {
          for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
          }
          res.status(200).json(result);
        }
      });
      // res.sendStatus(200);
    }
  }

  static UpdateProduct(req, res) {
    if (isLogin == false) {
      res.sendStatus(401);
      console.log('access denied');
    } else {
      req.params.id = id;
      ModelMerchant.UpdateProduct(req.body, req.params.id);
      res.sendStatus(200);
    }
  }

  static DeleteProduct(req, res) {
    if (isLogin == false) {
      res.sendStatus(401);
      console.log('access denied');
    } else {
      req.params.id = id;
      ModelMerchant.DeleteProduct(req.params.id, req.body.name).then;
      res.sendStatus(200);
    }
  }
}

module.exports = ControllerMerchant;
