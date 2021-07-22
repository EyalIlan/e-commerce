const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const body = require('body-parser')

const multer = require('multer')

const upload = multer({
  dest:'images'
})




const mongooseConnect = require('./db/database')

const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
const authRouth = require('./routes/auth')

app.use(body.urlencoded({extended:true}))
app.use(body.json())
app.use(cors());

// app.use((req,res,next) =>{

//   console.log('method',req.method,'path',req.path);  
//   next()
// })


app.use(authRouth)
app.use('/product',productRoute)
app.use('/user',userRoute)



mongooseConnect.mongoConnect()


const port = 8000;

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});





