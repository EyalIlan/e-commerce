const jwt = require('jsonwebtoken')
const User = require('../model/user')


const auth = async (req,res,next) =>{
    
    
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token,'thisismynewcours')
        const user = await User.findOne({_id: decoded._id ,'tokens.token': token })    
        

        console.log(token);
        console.log(user);
        console.log(decoded);
        
        
        if(!user){
            throw new Error()
        }

        req.token = token
        req.user = user

        next()

    }
    catch(e){
        console.log(e);
        res.status(401).send({error:'Please authenticate'})
    }

}

module.exports = auth