import React, { useState, useEffect } from 'react'
import Message from '../../UI/Message/Message'
import {Link,useParams,useHistory} from 'react-router-dom'
import {Row,Col,Image,Container,Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart} from '../../../actions/Cart'
import './Cart.css'

export default function Cart() {

    const dispatch = useDispatch()

    const {id} = useParams()
    const history = useHistory()
    const qty = window.location.search ? Number(window.location.search.split('=')[1]): 1

    useEffect(() =>{

        if(id){
            dispatch(addToCart(id,qty))
        }
    },[dispatch,id,qty])

    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const RemoveHandler = (id) =>{
           console.log('remove'); 
    }


    return (
        
        
        <div className="backround-Container">
        <Container>
        <Row >
                
                <div className="flex">

                <h1>Shopping Cart</h1>

                <div>
                <h2>Total Items {cartItems.reduce((acc,p) => {
                    //    console.log(p.qty);
                    return acc + p.qty
                },0)}</h2>
                <h4>
                   Total price: {cartItems.reduce((acc,p)=>{
                       return acc + p.qty * p.price
                    },0)}
                    $
                </h4>
                <button id="checkout-button" type="button" className="btn btn-info btn-lg">Check Out</button>
                </div>

                </div>

            <Col md={12}>
                {cartItems.length === 0 ? <h4><Message variant="info">No Products in the Cart</Message></h4> :(
                    <div >
                        {cartItems.map(p =>{
                         return  <Row className="py-3 flex-cart" key={p.product}>
                                    <Col   className="flex-cart"  lg={3}>
                                        <Image srcSet={p.image} alt={p.name} fluid rounded></Image>
                                    </Col>  
                                    <Col  className="flex-cart"  lg={3}>
                                        <h2><Link to={`/product/${p.product}`}>{p.name}</Link></h2>
                                    </Col>  
                                    <Col className="flex-cart"  lg={2}>
                                        <h2>{p.price}$</h2>
                                    </Col>  
                                    <Col className="flex-cart" lg={2}>
                                        <Form.Control 
                                        as='select' 
                                        value = {p.qty} 
                                        onChange = {(e) => dispatch(addToCart(p.product,Number(e.target.value)))}>

                                        {[...Array(p.InStock).keys()].map((p =>(
                                            <option key={p+1} value={p+1} >
                                                {p+1}
                                            </option>
                                        )))}

                                        </Form.Control>
                                    </Col>  
                                    <Col className="flex-cart" lg={2}>
                                       <button onClick={() => RemoveHandler(p.product)} className="garbage-button btn btn-lg"><img className="" src="/images/garbage.png" alt="" srcSet="" /></button>
                                    </Col>
                                </Row>
                           
                        })}
                    </div>
                )}
            </Col>
     
        </Row>
        </Container>
        
        </div>
    )
}
