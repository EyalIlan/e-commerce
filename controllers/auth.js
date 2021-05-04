
const  User = require('../model/user')
const bcrypt = require('bcryptjs')


const Login = async (req,res) =>{

        const {email,password} = req.body
        
        try{
            const user = await User.find({email:email})
            if(user){
                 const isMatch = await bcrypt.compare(user.password,password) 
                 if(isMatch){

                    

                 }else{
                    res.json('user name or password is incorrect')
                 }
            }else{
                res.json('user name or password is incorrect')
            }
        }
        catch(e){
            res.json(e)
        }
    

}


const LogOut = (req,res) =>{


}



module.exports = {
    Login,
    LogOut
}