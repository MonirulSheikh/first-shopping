import React,{useEffect,useState} from 'react'
// import products from '../Products'
import {Row,Col,Container,Image,ListGroup,ListGroupItem, Button, Form} from "react-bootstrap"
import {Typography} from "@material-ui/core"
import Ratting from '../componant/Ratting'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {useDispatch,useSelector} from "react-redux"
import {SingleProductAction} from "../Action/productAction"
import Message from '../componant/share/Message'
import Loader from '../componant/share/Loader'

const ProductDetail = ({match,history}) => {
    
    const [qty, setQty] = useState(1)
    
    const{loading,product,error}= useSelector(state => state.SingleProduct)
    const dispatch = useDispatch()

  const addToCartHandler=()=>{
      history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
   


    useEffect(() => {
        dispatch(SingleProductAction(match.params.id))
    
     }, [match,dispatch])
    
    return (
        <>
        {
           loading?<Loader/> :error?<Message variant="danger">{error}</Message>:(<>
            <NavLink to="/" className="btn" variant="Playstation">
            <i className="fas fa-arrow-left"></i> GO Back
        </NavLink>
        <Row>
        <Col md={6} className="text-center">
        <Image src={product.image} alt={product.name} fluid/>

        </Col>
        <Col md={3} className="text-center">
       <ListGroup variant="flush">
         <ListGroupItem>
<Typography variant="h6">{product.name}</Typography>
         </ListGroupItem>
<ListGroupItem>
  <Ratting rating={product.rating} text={`${product.numReviews} Reviews`} />
</ListGroupItem>
<ListGroupItem>
    <Typography variant="h6">$ {product.price}</Typography>
</ListGroupItem>
<ListGroupItem>
    {product.description}
</ListGroupItem>
       </ListGroup>

        </Col>


{/* last col start */}
        <Col md={3} className="text-center">
        <ListGroup variant="flush">
        <ListGroupItem fluid>
        <Row>

<Col>
     <Typography variant="h6">Status: </Typography> 
</Col>
<Col>
     <Typography variant="h6"  className="text-center">{product.countInStock>0 ?"In Stock":"Out of Stock"}</Typography> 
</Col>
</Row>
{product.countInStock>0 &&(<ListGroupItem>
<Row>
    <Col>Qty</Col>
    <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)} className="text-center">
{[...Array(product.countInStock).keys()].map((x,index)=>(<option key={index} className="text-center">{x+1}</option>))

}

    </Form.Control>
</Row>

</ListGroupItem>)

}


        </ListGroupItem>

<ListGroupItem>
{product.countInStock>0 && ( <Button className="btn-block" onClick={addToCartHandler}>Add to Cart</Button>)}
   
</ListGroupItem>
        </ListGroup>
    
        </Col>
{/* last col End */}

        </Row>
           </>)
        }
        
            
        </>
    )
}

export default ProductDetail
