const User = require('../model/user')
const bcrypt = require('bcryptjs')



//signup
const addUser = async (req, res) => {

    const { username, email, password } = req.body

    const hashpassword = await bcrypt.hash(password, 8) // have to be a string


    try {
        const user = new User({
            username: username,
            email: email,
            password: hashpassword  // check you unique to the word password with the others

        })
        const newUSER = await user.save()
        res.json(newUSER)
    }
    catch (err) {
        console.log(err);
    }

}

//user
const updateUser = async (req, res) => {

    const { username, email, password, country, Address, phone } = req.body;

    try {
        const usr = await User.updateOne({ email: email }, {
            username: username,
            email: email,
            password: password,
            details: {
                country: country,
                Address: Address,
                phone: phone
            }
        }, { new: true, runValidators: true })
        return res.json(usr)

    }
    catch (e) {
        return res.json(e)
    }

}

//user
const getUser = async (req, res) => {

    const { email } = req.body

    try {
        const usr = await User.find({ email: email })

        return res.json(usr)
    }
    catch (err) {
        console.log(err)
    }
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


module.exports = {
    addUser,
    updateUser,
    getUser,
    deleteUser
}