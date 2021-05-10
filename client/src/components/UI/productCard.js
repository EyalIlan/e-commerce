import React from 'react'
import { Card,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function productCard({product}) {


    // <FaApple size={30} style={{"color":"#ccc"}}} 
    //                 onMouseOut={({target})=>target.style.color='#ccc'}/>




    return  (
        <div className="CardProduct">
        <Card className='text-center'>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
          <Card.Text>
                {product.description}
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
          <Link to = {`product/${product._id}`}>
            <Button variant="danger">Show product</Button>
          </Link>
     
        </Card.Body>
      </Card>
      </div>
    )
            
      
    
}
