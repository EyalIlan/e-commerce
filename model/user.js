
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
    password:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            Validator.isStrongPassword()
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
    }
    
    

})