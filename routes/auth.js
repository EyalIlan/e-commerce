
const express = require('express')
const AuthController = require('../controllers/auth')
const Auth = require('../middleware/auth')

const router = express.Router()

router.post('/',AuthController.Login)

router.post('/logout',Auth,AuthController.LogOut)

router.post('/logoutall',Auth,AuthController.LogOutAll)

module.exports = router

