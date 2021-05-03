const mongoose = require('mongoose')


const mongoConnect = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res =>{
        console.log('connected Success')
    })
    .catch(err => console.log(err))
}


exports.mongoConnect = mongoConnect