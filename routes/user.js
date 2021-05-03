
const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()


router.post('/add',userController.addUser)

router.post('/update',userController.updateUser)

module.exports = router