import React, { useState, useEffect } from 'react'
import Spinner from '../../UI/Spinner/spinner'
import Message from '../../UI/Message/Message'
import { ProductDetails } from '../../../actions/productAction'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './product.css'



export default function Productpage({ match }) {

    const [qty, SetQty] = useState(0)

    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetail

    const { id } = useParams()

    useEffect(() => {

        dispatch(ProductDetails(id))

    }, [dispatch])


return (
    <div>
        {
        loading ? <Spinner></Spinner>
            : error ? <Message variant="danger">{error}</Message>
            : (
            <div className="products">
            <div className="container">
            <Link className="btn btn-info" to="/products">Go Back</Link>
            <h1 className="lg-title">{product.name}</h1>
            <p className="text-lighter">{product.descirption}</p>

            <div className="product-items">
                <div className="product">
                <div className="product-content">

                <div className="product-left-side">
                <h2 className="product-scale"> <span id="price-tag">Price: {product.price}$ </span></h2>

                    {product.quentity > 0 ?'':<h2 className="product-scale">'Out of Stock'</h2>}

                        <h2 className="product-scale">number in Stock:  {product.quentity}</h2>
                        <h2 className="product-scale">Rating: {product.rating}</h2>
                    
                        <button type="button" className="btn-buy">Buy now</button>
                    </div>
                <div>

                <div className="product-img">
                <img src={product.image} alt="" />
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
     </div>)}

        </div>

    )
}
