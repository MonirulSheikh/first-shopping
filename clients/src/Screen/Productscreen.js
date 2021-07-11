import React from 'react'
import { Card, } from "react-bootstrap"
import Ratting from '../componant/Ratting'

import {NavLink} from "react-router-dom"
const Productscreen = ({product}) => {
    return (
        <>
            <Card className="my-3 py-3 rounded">
                <NavLink to={`products/${product._id} `}>
                    <Card.Img src={product.image}  variant="top"/>
                </NavLink>
              <Card.Body>
            <NavLink to={`products/${product._id}`}>
                <Card.Title as="div">
                <strong>{product.name}</strong>
               

                </Card.Title>
            </NavLink>
<Card.Text as="div">
<Ratting rating={product.rating} text={product.numReviews}/>
</Card.Text>
<Card.Text as="div">

$ {product.price}

</Card.Text>
              </Card.Body>

            </Card>
        </>
    )
}

export default Productscreen
