
const mongoose = require('mongoose')
const Validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
       
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(value.length < 3){
                throw new Error('User name to short')
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!Validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    type:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },

    password:{
        type:String,
        required:true,
        unique:false,
        validate(value){
            if(value.length <8){
                throw new Error('password must be at least 8 chacrters long')
            }
        }
    },
    details:{
        country:{
            type:String,
            required:false,
            
        },
        Address:{
            type:String,
            required:false,

        },
        phone:{
            type:String,
            validate(value){
                if (!Validator.isMobilePhone(value, "he-IL")){
                    throw new Error('Must be isreli phone')
                }
            }
        }
    },
    isActive:{
        type:Boolean,
        required:false,
        default:true
    },

    cart:{
        type: [mongoose.Schema.Types.ObjectId],
        required:false,
        default:[]
    },
    tokens:[{
        token:{
           type:String,
           required:true 
        }
    }]

})

userSchema.statics.findByCredentials = async (email,password) =>{

    const user = await User.findOne({email})

    if(!user){
        new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user

}

userSchema.methods.generateAuthToken = async function () {

    const user = this
    const token = jwt.sign({_id:user._id.toString()},'thisismynewcours') // the secret 2 arg need to be in a env file
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.toJSON =  function (){
    const user = this

    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens

    return userObject

}

userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    
    next()

})

const User  = mongoose.model('users',userSchema)

module.exports = User; 


