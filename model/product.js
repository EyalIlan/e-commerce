const mongoose = require('mongoose')


const proudctSchema = mongoose.Schema({


    productName:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
    },
    descirption:{
       type:String,
       required:true,
       unique:false
    },

    price:{
        type:Number,
        required:true,
        validate(value){
            if(value < 0.01){
                throw new Error('price must be a positive')
            }
        }
    },

    premium:{
        type:Boolean,
        default:false
    },
    Image:{
        type:String,
        required:false,
        unique:false,
    },

    isActive:{
        type:Boolean,
        required:false,
        default:true
    }

},{
    timestamps:true
})


const product = mongoose.model('product',proudctSchema)

module.exports = product