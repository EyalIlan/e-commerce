import React, { useState, useEffect } from 'react'
import Spinner from '../../UI/Spinner/spinner'
import Message from '../../UI/Message/Message'
import { ProductDetails } from '../../../actions/productAction'
import { useParams,useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './product.css'



export default function Productpage() {

    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetail


    const [qty, SetQty] = useState(0)
    const [totalPrice,SetTotalPrice] = useState(0)
    const [totalStock,SetTotalStock] = useState(0)
    


    const { id } = useParams()
    const history = useHistory()


    useEffect(() => {
        const Request = async () =>{
            await dispatch(ProductDetails(id))
            SetTotalStock(product.quentity)
        } 
        Request()

    }, [dispatch,product])
    
    
    const AddToCart = () =>{

        history.push(`/cart/${id}?qty=${qty}`)

    }

  const addProductHandler = () =>{
        if(qty+1 <= totalStock){
            SetQty(qty + 1)
            SetTotalPrice(product.price * (qty+1))
        }
    }

    const removeProductHandler = () =>{

        if(qty > 0){
            SetQty(qty - 1)
            SetTotalPrice(product.price * (qty-1))
        }

    }


return (
    <div>
        {
        loading ? <Spinner></Spinner>
            : error ? <Message variant="danger">{error}</Message>
            : (
            <div className="products">
            <div className="container">
            <Link id="goBackLink" className="btn btn-info" to="/products">Go Back</Link>
            <h1 className="lg-title">{product.name}</h1>
            <p className="text-lighter">{product.descirption}</p>

            <div className="product-items">
                <div className="product">
                <div className="product-content">

                <div className="product-left-side">
                <h2 className="product-scale"> <span id="price-tag">Price: {product.price}$ </span></h2>

                    {product.quentity > 0 ? <h2 className="product-scale">number in Stock:  {totalStock}</h2>:<h2 className="product-scale">'Out of Stock'</h2>}

                       
                        <h2 className="product-scale">Rating:{product.rating}</h2>
                        <div className="product-stock">
                            <button className="btn btn" onClick={addProductHandler} disabled={product.quentity === 0}>  <img src="/images/add.png" alt="" /></button>
                            <button className="btn btn" onClick={removeProductHandler} disabled={product.quentity === 0}>  <img src="/images/minus.png" alt="" /></button>
                            <h4>TotalPrice: {totalPrice}$</h4>
                            <h4>Stock: {qty}</h4>
                        </div>
                    </div>
                <div>

                <div className="product-img">
                <img src={product.image} alt="" />
                </div>
                    <div className="product-btns">
                        <button type="button" className="btn-cart" disabled={product.quentity === 0} onClick={AddToCart}>add to cart</button>
                        <button type="button" className="btn-buy" disabled={product.quentity === 0}>Buy now</button>
                       
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
