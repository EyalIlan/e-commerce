
const express = require('express')
const userController = require('../controllers/user')
const { route } = require('./product')

const router = express.Router()


router.post('/add',userController.addUser)

router.put('/update',userController.updateUser)

router.get('/user',userController.getUser)

router.delete('/delete',userController.deleteUser)

module.exports = router