
const mongoose = require('mongoose')
const Validator = require('validator')

const userSchema = mongoose.Schema({
       
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(value.length < 4){
                throw new Error('User name to short')
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!Validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    type:{
        type:Number,
        enum:[0,1]
    },

    password:{
        type:String,
        required:true,
        unique:true,
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
        type: [Schema.Types.ObjectId],
        required:false,
        default:[]
    }

})

const users  = mongoose.model('users',userSchema)
module.exports= users; 