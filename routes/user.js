
const express = require('express')
const userController = require('../controllers/user')
const Auth = require('../middleware/auth')
const router = express.Router()


router.post('/add',userController.addUser)

router.put('/update',Auth,userController.updateUser)

router.get('/user',Auth,userController.getUser)

router.get('/users',Auth,userController.GetAllUsers)

router.delete('/delete',Auth,userController.deleteUser)

module.exports = router