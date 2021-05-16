import React, { useEffect } from 'react'
import ProductCard from '../../UI/productCard'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import Spinner from '../../UI/Spinner/spinner'
import { listProducts } from '../../../actions/productAction'
import Message from '../../UI/Message/Message'

export default function Products() {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {

        dispatch(listProducts())

    }, [dispatch])


    return (
        <div>
            <Container>
                <h1>Popular Products</h1>
                {
                loading ? (<Spinner></Spinner>) 
                : error ? (<Message variant="danger">{error}</Message>) 
                : (
                    <Row>
                        {products.map((product, index) => {
                            return <Col key={index} sm={12} md={6} lg={4} xl={3}>
                                <ProductCard product={product}></ProductCard>
                            </Col>
                        })}
                    </Row>
                )}


                {/* <h2>Latest Products</h2> */}



            </Container>
        </div>
    )
}
