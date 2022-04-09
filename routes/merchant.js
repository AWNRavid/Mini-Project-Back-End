const express = require('express');
const router = express.Router();
const ControllerMerchant = require('../controllers/merchant');

router.post('/register', ControllerMerchant.Register);
router.get('/get-all-merchant', ControllerMerchant.GetAllMerchant);

module.exports = router;
