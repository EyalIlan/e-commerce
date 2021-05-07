const express = require('express')
const Auth = require('../middleware/auth')
const productController = require('../controllers/products')

//upload product pictures
const multer = require('multer')

const upload = multer({
  dest:'avatars',
  limits:{
      fileSize:1000000
  }
})


const router = express.Router()


router.get('/allproducts',Auth,productController.GetAllProducts)

router.get('/category',Auth,productController.GetCategoryProdcuts)

router.get('/product/:id',Auth, productController.GetSpecificProduct)

router.put('/edit',Auth,productController.EditProduct)

router.delete('/delete',Auth,productController.DeleteProduct)

router.post('/add',Auth,productController.CreateProduct)



module.exports = router