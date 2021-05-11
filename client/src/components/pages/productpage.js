import React, { useState, useEffect } from 'react'

import {Link,useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import products from '../../products'

export default function Productpage(props) {
    

    const history = useHistory()

    useEffect(() =>{
      if(!props.user){

         history.push('/')
      }
    })


    const product = products.find(p => p._id === props.match.params.id)
    // <Link  className="btn btn-warning my-3" to="/">Go Back</Link>
    
    // useEffect(() =>{



    // })

    return (
        <div className="product-container container">
            <div className ="product-image-container">
                <img src={product.image} alt="" />
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <h2><span className="bold-text">Price: ${product.price}.00</span></h2>
                <h5>
                    {product.description}
          
                </h5>
            <div className="flex product-details-footer">
                   <h4>InStock:{product.conutInStock}</h4> 
                  <Button  className="btn btn-md bg-info" variant="dark">Add to Cart</Button>
                </div>
            
            </div>
        </div>
    )
}
