import React, { useEffect, useState } from 'react'
import axios from 'axios';
import products from '../../products'
import ProductCard from '../UI/productCard'
import {Col, Container, Row} from 'react-bootstrap'


function User() {
  // const [user, setUser] = useState(null)

  // const getUser = async () => {
  //   const data = await axios.get('api/getUser')
  //   setUser(data.data)
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])


  return (
    <div>
        <div className="homepage">
          <div className ="main-title">
            <h1>
                Welcome to Extreme Sport
            </h1>
            <h3>the shop where you can find the Best Sport products</h3>

            </div>
        </div>

        
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
            <Row>
            {products.map((product,index) =>{
              return <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <ProductCard  product = {product}></ProductCard>
              </Col>
            })}
        </Row>


        </Container> 
    
            </div>
  );
}

export default User;


// import { useHistory } from 'react-router-dom'
// const history = useHistory();
// history.push(`path to route`)
