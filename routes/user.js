
const express = require('express')
const userController = require('../controllers/user')
const Auth = require('../middleware/auth')
const multer = require('multer')


//upload product pictures
const upload = multer({
  limits:{
      fileSize:2000000
  },
  fileFilter(req,file,cb){
      
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return cb(new Error('Please upload an image'))
    }
      cb(undefined,true)
  }
})


const router = express.Router()

router.post('/add',userController.addUser)

router.post('/avatar',Auth,upload.single('avatar'),userController.addAvatarPicture)

router.delete('/avatar',Auth,userController.DeleteUserPicture)

router.delete('/delete',Auth,userController.deleteUser)

router.put('/update',Auth,userController.updateUser)

router.get('/user',Auth,userController.getUser)

router.get('/users',Auth,userController.GetAllUsers)

router.get('/avatar/:id',userController.GetUserImage)

module.exports = router