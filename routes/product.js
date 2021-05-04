const express = require('express')

const productController = require('../controllers/products')


const router = express.Router()


router.get('/allproducts',productController.GetAllProducts)

router.get('/category',productController.GetCategoryProdcuts)

router.get('/product/:id')

router.put('/edit',productController.EditProduct)

router.delete('/delete',productController.DeleteProduct)

router.post('/create',productController.CreateProduct)



module.exports = router