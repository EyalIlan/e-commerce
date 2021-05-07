
const Product = require('../model/product')

//need to do testing

//Admin
const CreateProduct = async (req,res) =>{

    console.log(req.user);

    try{
        const product = new Product({
            ...req.body,
            owner:req.user._id
        })
        await product.save()
        res.status(201).json(product)
    }
    catch(e){
        console.log(e);
        res.status(400).json('errorrrr')
    }
}

//Admin need to change it like the user update
const EditProduct = async (req,res) =>{

    const {productName,descirption,price,premium,Image,isActive,_Id} = req.body


    try{
        const product = await Product.findByIdAndUpdate(_Id,{
    
            productName,
            descirption,
            price,
            premium,
            Image,
            isActive
    
        },{new:true,runValidators:true})
        
        res.json(product)
    }
    catch(e){
        res.json(e)
    }

}



//Admin
const DeleteProduct = async (req,res) =>{

    const {_id} = req.body

    try{
        const product = await Product.findByIdAndDelete(_id)
        res.json(product)
    }
    catch(e){
        res.json(e)
    }
}




//User
const GetAllProducts = async (req,res) =>{

    try{
        const products = await Product.find()
        res.json(products)

    }
    catch(e){
        res.json(e)
    }

}




//User
const GetCategoryProdcuts = async (req,res) =>{

    const {category} = req.body


    try{
        const products = await Product.find({category:category})
        res.json(products)
    }
    catch(e){
        res.json(e)
    }

}

//User ask how to get specific product by Id or name?
const GetSpecificProduct = async (req,res) =>{

    const {id}  = req.params

    try{
        const product = await Product.findById(id)
        res.json(product)
    }
    catch(e){
        res.json(e)
    }
}


module.exports = {
    CreateProduct,
    EditProduct,
    DeleteProduct,
    GetAllProducts,
    GetCategoryProdcuts,
    GetSpecificProduct
}
