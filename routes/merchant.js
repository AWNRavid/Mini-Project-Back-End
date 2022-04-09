const express = require('express');
const router = express.Router();
const ControllerMerchant = require('../controllers/merchant');

router.post('/register', ControllerMerchant.Register);

module.exports = router;
