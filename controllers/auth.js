
const  User = require('../model/user')

const Login =  async (req,res) =>{

    try{

        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()

        res.status(201).send({user,token})

    }
    catch(e){
        console.log(e);
        res.status(400).json(e)
    }
}



const LogOut = async (req,res) =>{
    
    try{

        req.user.tokens = req.user.tokens.filter(token =>{
            return token.token !== req.token
        })
          
        await req.user.save()

        res.send()
    }
    catch(e){
        res.status(500).send()
    }

}


const LogOutAll = async (req,res) =>{


    try{
        req.user.tokens = []
        await req.user.save()
        res.send('the user has logout')   

    }
    catch(e){
        res.status(500).json(e)
    }

}

module.exports = {
    Login,
    LogOut,
    LogOutAll
}