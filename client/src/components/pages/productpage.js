import React from 'react'

import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,Container} from 'react-bootstrap'
import products from '../../products'

export default function productpage(props) {
    
    const product = products.find(p => p._id === props.match.params.id)
    
    return (
        <div>
            <Container>
            <Link  className="btn btn-warning my-3" to="/">Go Back</Link>
        
                <Row>
                    <Col md={6}>
                        
                    </Col>
                    
                    <Col md={6}>
                    
                    
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
