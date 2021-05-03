const express = require('express')

const productController = require('../controllers/products')


const router = express.Router()


router.get('/',productController.GetProducts)




module.exports = router