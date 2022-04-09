const express = require('express');
const router = express.Router();
const ControllerMerchant = require('../controllers/merchant');

router.post('/register', ControllerMerchant.Register);
router.get('/get-all-merchant', ControllerMerchant.GetAllMerchant);
router.post('/login', ControllerMerchant.Login)
router.delete('/delete-account/:id', ControllerMerchant.DeleteAccount);

router.post('/add-product', ControllerMerchant.AddProduct);
router.get('/view-product/:id', ControllerMerchant.ViewProduct);
router.put('/update-product/:id', ControllerMerchant.UpdateProduct);
router.delete('/delete-product/:id', ControllerMerchant.DeleteProduct);

module.exports = router;
