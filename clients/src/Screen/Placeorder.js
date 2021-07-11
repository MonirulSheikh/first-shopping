import React,{useEffect} from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import Message from '../componant/share/Message';
import BreadCrum from '../componant/share/BreadCrum';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {CreateOrder} from "../Action/orderAction"
const Placeorder = ({history}) => {
  const orderCreates = useSelector((state) => state.orderCreate);
const dispatch = useDispatch()
const { shippingAddress,paymentMethod,cartItems}=useSelector((x)=>x.carts)
const cart=useSelector((x)=>x.carts)
// console.table(cartItems)
// const orderCreates = useSelector((state) => state.orderCreate);
const {loading,success,error,orders}=orderCreates
// console.log(orderCreates)
const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

cart.itemsPrice = addDecimal(
  cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
);
cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));
cart.totalPrice = (
  Number(cart.itemsPrice) +
  Number(cart.shippingPrice) +
  Number(cart.taxPrice)
).toFixed(2);


const placeOrderHandler=()=>{
dispatch(CreateOrder({orderItems: cart.cartItems,
  shippingAddress: cart.shippingAddress,
  paymentMethod: cart.paymentMethod,
  itemsPrice: cart.itemsPrice,
  shippingPrice: cart.shippingPrice,
  taxPrice: cart.taxPrice,
  totalPrice: cart.totalPrice,}))
}


useEffect(() => {
  if (success) {
    history.push(`/orders/${orders._id}`);
  }
  //eslint-disable-next-line
}, [history, success]);
    return (
        <>
            <BreadCrum step1 step2 step3 step4/>
         <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address :</strong>
                {shippingAddress.address}&nbsp;
                {shippingAddress.city}&nbsp;
                {shippingAddress.postalCode}&nbsp;
                {shippingAddress.country}&nbsp;
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>{paymentMethod} </strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length===0?(<><Message>Your Cart is Empty</Message></>):(<>

          {cartItems.map((x)=>(<>
            <ListGroup variant="flush">
                
                <ListGroup.Item>
                  <Row>
                    <Col md={1}>
                      <Image />
                    </Col>
                    <Col>
                      <Link to={`/products/${x._id}`}>
                        {x.name}
                      </Link>
                     
                    </Col>
                    <Col md={4}>
                    {x.qty} X $ {x.price}=$ {x.qty*x.price}
                    
                    </Col>
                  </Row>
                </ListGroup.Item>
             
            </ListGroup>

          </>))}

              </>)}
                
             
               
              
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                 
                  <Col>${cart.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>$ {cart.shippingPrice }</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>{cart.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>$ {cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
               onClick={placeOrderHandler}
              >
                Place Order
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>   
        </>)
    
}

export default Placeorder
