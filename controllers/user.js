const User = require('../model/user')


const addUser = async (req,res) =>{

    const {username,email,password} = req.body
    try{
    const user = new User({
    username:username,
    email:email,
    password:password  // check you unique to the word password with the others

    })
        const newUSER = await user.save()
        res.json(newUSER)
    }
    catch(err){
        console.log(err);
    }

}


const updateUser = async (req,res) =>{

    const {username,email,password,country,Address,phone} = req.body;
    
    try{
        const usr = await User.updateOne({email:email},{
            username:username,
            email:email,
            password:password,
            details:{
                country:country,
                Address:Address,
                phone:phone
            }
        },{new:true,runValidators:true})
        return res.json(usr)

    }
    catch(e){
      return  res.json(e)
    }

}


const getUser = async (req,res) =>{

    const {email} = req.body

    try{
        const usr = await User.find({email:email})
        
        return res.json(usr)
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    addUser,
    updateUser,
    getUser
}