const express = require('express');
const upload = require('../middlewares/imageUpload');
const router = express.Router();
const productController = require('../controllers/productPage');
const adminAuthenticator = require('../middlewares/adminAuthenticator');

router.put('/:id',adminAuthenticator, upload.array('images',20),productController.updateProducts);
router.get('/:id' ,productController.getProductInfo)
router.delete('/image/:id',adminAuthenticator,productController.deleteProductImage);

module.exports = router;