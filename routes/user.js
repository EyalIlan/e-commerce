
const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()


router.post('/add',userController.addUser)

router.put('/update',userController.updateUser)

router.get('/user',userController.getUser)

module.exports = router