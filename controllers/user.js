const User = require('../model/user')

//signup
const addUser = async (req, res) => {
    
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.send({user,token})
    }
    catch (err) {
        console.log(err);
    }

}


const addAvatarPicture = async (req,res) =>{
    
    console.log('hello');
    req.user.avatar = req.file.buffer
    await req.user.save()
    // res.send()

    // return res.status(201).send('picture added')
}

const DeleteUserPicture = async (req,res) =>{
    

    try{
        req.user.avatar = undefined
        await req.user.save()
        res.json('seccuss')
    }
    catch(e){
        req.json(e)
    }

}


//user
const updateUser = async (req, res) => {

    // const { username, email, password, country, Address, phone } = req.body;

    const updates = Object.keys(req.body)
    try {

        // let user =  await User.findOne({email:req.body.email})
        updates.forEach(update =>{
           req.user[update] = req.body[update]
        })

        req.user.save();
        res.status(200).json(req.user)
    }
    catch (e) {
        return res.json(e)
    }

}


//user
const getUser = async (req, res) => {

    // const { email } = req.body

    // try {
    //     const usr = await User.find({ email: email })

    //     return res.json(usr)
    // }
    // catch (err) {
    //     console.log(err)
    // }

    res.json(req.user)

}


// admin/user
const deleteUser = async (req, res) => {

    const { email } = req.body


    try {
        const usr = await User.findOneAndDelete({ email: email })

        if (usr) {
            return res.json(usr.username + " was deleted")
        } else {
            return res.json("problem deleting the user")
        }

    }
    catch (e) {
        return res.json('problem deleting the user')
    }

}

const GetUserImage = async (req,res) =>{

    try{

        const user = await User.findById(req.params.id)

        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/jpg')
        res.send(user.avatar)

    }
    catch(e){
        res.status(404).send()
    }
}


//Admin
const GetAllUsers = async (req,res) =>{

    
    try{
        const users = await User.find({})
        res.status(201).json(users)
    }
    catch(e){
        res.status(400).json(e)
    }
    

}


module.exports = {
    addUser,
    updateUser,
    getUser,
    deleteUser,
    GetAllUsers,
    addAvatarPicture,
    DeleteUserPicture,
    GetUserImage
}