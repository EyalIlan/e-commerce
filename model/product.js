const mongoose = require('mongoose')


const proudctSchema = mongoose.Schema({



    //review

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
    category:{
        type:String,
        required:true
    },
    quentity:{
        type:Number,
        required:true
    },

    premium:{
        type:Boolean,
        default:false
    },
    Image:{
        type:Buffer
    },

    isActive:{
        type:Boolean,
        required:false,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

},{
    timestamps:true
})


const product = mongoose.model('product',proudctSchema)

module.exports = product