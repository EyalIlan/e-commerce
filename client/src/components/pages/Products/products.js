import React, { useState, useEffect } from 'react'
import ProductCard from '../../UI/productCard'
import {Col, Container, Row} from 'react-bootstrap'
import Axios from 'axios'


export default function Products({match}) {
    
    
    const [products,SetProducts] = useState([])
    
    useEffect(() =>{

        const GetData = async () =>{
            const {data} = await Axios.get('/product/allproducts') 
            SetProducts(data)
            console.log(data);
        }

        GetData()
    },[match])


    return (
        <div>
            <Container>
        <h2>Popular Products</h2>
        <Row>
            {products.map((product,index) =>{
              return <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <ProductCard  product = {product}></ProductCard>
              </Col>
            })}
        </Row>
        <h2>Latest Products</h2>
        


        </Container> 
        </div>
    )
}
