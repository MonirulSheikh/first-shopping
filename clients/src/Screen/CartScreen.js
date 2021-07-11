
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {AddToCartAction,RemoveItems} from "../Action/CartAction"
import {Row,Col,ListGroup,ListGroupItem,Image,Form,Button,Card, Container } from "react-bootstrap"
import {NavLink,Link} from "react-router-dom"
import Message from '../componant/share/Message'

const CartScreen = ({match,history,location}) => {
    const qty=location.search? Number(location.search.split("=")[1]):1
    
    const {id}=match.params
    
const {cartItems} = useSelector((cartValue)=> cartValue.carts)
// console.log("45",cartItems)
    const dispatch = useDispatch()
    useEffect(() => {
        if(id){
            dispatch(AddToCartAction(id,qty))
        }
       
    }, [dispatch,match])


const RemoveItem=(id)=>{
dispatch(RemoveItems(id))
}
const Checkout=()=>{
  history.push("/login?redirect=shipping")
}


    return (<>
    <Container >
    <Row>
{
  cartItems.length===0?(<Col md={12}>
    <Message>
              Your Cart is Empty !<Link to="/">Go Back</Link>
            </Message>
  </Col>):(<>
    <Col md={8}>
            <h1>Shopping Cart ({cartItems.length}) </h1>
            
                 <ListGroup  mb={3}>
                   {cartItems.map((item)=><ListGroupItem>

                     <Row>
                       <Col md={3}>
                       <Image src={item.image} alt={item.image} fluid rounded />
                       </Col>
                       <Col md={2}><Link to={`/products/${item.product}`}>{item.name}</Link></Col>
                       <Col md={2}>$ {item.price}</Col>
                       <Col md={2}>
                       <Form.Control
                        as="select"
                        value={item.qty}
                       onChange={(e)=>dispatch(AddToCartAction(item.product,Number(e.target.value)))} 
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                       </Col>
                      <Col>
                        <Button variant="light" onClick={()=>RemoveItem(item.product)}><i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"
                        ></i> Remove
                        
                        </Button>
                      </Col>

                  </Row>


                   </ListGroupItem>)
                  
                   }
              
                 </ListGroup>

            

            


        </Col>
{/* price claculation */}
<Col md={4}>
<h1>Price Details</h1>
<Card>
<ListGroup variant="flush">
 <Row>
   <Col md={6}>
     <ListGroupItem><h3>TOTAL ITEM:</h3></ListGroupItem>

   </Col>
   <Col md={6}>
     <ListGroupItem><h4>{cartItems.reduce((acc,items)=>acc+items.qty,0)}</h4> </ListGroupItem>
     
   </Col>
   <Col md={6}>
     <ListGroupItem><h4>TOTAL PRICE: </h4></ListGroupItem>

   </Col>
   <Col md={6}>
     <ListGroupItem><h4> $ {cartItems.reduce((acc,items)=>acc+items.qty*items.price,0)}</h4></ListGroupItem>
     
   </Col>

   <Col md={12}>
   <ListGroupItem>
   <Button className="btn btn-block" disabled={cartItems.length===0} onClick={Checkout}>Proceed to checkOut</Button>
   </ListGroupItem>
   
   </Col>
  
 </Row>


</ListGroup>

</Card>

</Col>
  </>)
}
   
        

      </Row>
    </Container>
     
      
    </>)
}

export default CartScreen


