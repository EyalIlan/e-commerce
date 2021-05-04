
const Product = require('../model/product')



//Admin
const CreateProduct = async (req,res) =>{


    const {productName,descirption,price} = req.body

    const product = new Product({
        productName,
        descirption,
        price
    })
    await product.save()
    res.json('new product save Successfully')

}

//Admin
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

    const {_Id}  = req.params

    try{
        const product = await Product.findById(_Id)
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
