import React from 'react'
import { Card,Button } from 'react-bootstrap'

export default function productCard({product}) {
    return  (
        
        <div className="CardProduct">
        <Card className='my-3 p-3 rounded text-center'>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
          <Card.Text>
                {product.description}
          </Card.Text>

          <Card.Text as='h3'>${product.price}</Card.Text>

          <Button variant="danger">Show product</Button>
        </Card.Body>
      </Card>
      </div>
    )
            
      
    
}
