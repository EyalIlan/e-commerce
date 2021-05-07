const User = require('../model/user')
// const bcrypt = require('bcryptjs')



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
    GetAllUsers
}