const ModelMerchant = require('../models/merchant');
var isLogin = false;
var id = undefined;

class ControllerMerchant {
  static Register(req, res) {
    ModelMerchant.Register(req.body);
    res.status(201).json('register success');
  }
}
