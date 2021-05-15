import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import './product.css'
// import products from '../../../products'



export default function Productpage({match}) {
    
    const [product,SetProduct] = useState({})
    const {id} = useParams()
    
    useEffect(() =>{
    
        const getData = async () =>{
            const {data} = await Axios.get(`/product/product/${id}`)
            SetProduct(data)
        }
        getData()
    },[id])
    

    // const history = useHistory()
    // useEffect(() =>{
    //   if(!props.user){
          
    //      history.push('/')
    //   }
    // })
    
    return (
        <div className="products">
            <div className="container">
                <h1 className="lg-title">{product.productName}</h1>
                <p className="text-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, quasi corporis vel velit ad cum a deserunt quod laudantium, optio quis dolorum consectetur officiis temporibus soluta quae nemo. Ad, sequi.</p>
            
                <div className = "product-items">
                    <div className="product">
                        <div className="product-content">

                            <div className="product-left-side">
                                <h2 className="product-scale"> <span id="price-tag">Price: {product.price}$ </span></h2>
                                <h2 className="product-scale">number in Stock:  {product.quentity}</h2>
                                <h2 className="product-scale">Rating: {product.rating}</h2>
                            </div>
                            <div>

                            <div className="product-img">
                                <img src={product.image} alt=""  />
                            </div>
                            <div className="product-btns">
                                   <button type="button" className="btn-cart">add to cart</button> 
                                   <button type="button" className="btn-buy">Buy now</button> 
                            </div>
                            </div>

                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
