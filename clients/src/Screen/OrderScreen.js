import React,{useState,useEffect} from 'react'
import Message from '../componant/share/Message'
import axios from "axios";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOrderDetails} from "../Action/orderAction"
import Loader from '../componant/share/Loader';
const OrderScreen = ({ match }) => {
    const { id } = match.params
    // console.log(id)
    const { loading, orders, error,user,orderItems ,shippingAddress} = useSelector((x) => x.orderDetails)
    const dispatch = useDispatch()

    // const {name,email}=orders.User
    // console.log(name)
    // console.log(orders.User.name)
    if (!loading) {
        //   Calculate prices
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2);
        };

        orders.itemsPrice = addDecimals(
            orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
    }
    useEffect(() => {
      dispatch(getOrderDetails(id))
    }, [match,dispatch,id])
    return (
        <>
            {loading?<Loader/>:error?<Message>{error}</Message>:(<>
          </>)}  

            <h2>Order Id</h2>
            <Row>
                <Col md={8}>
                    <ListGroup.Item variant="flush">
                        <h2>Shipping</h2>

                        <p>
                            <strong>Name : </strong>
                            {user.name}
                        </p>
                        <p>
                            <strong>Email : </strong>
                            {user.email}
                        </p>
                        <p>
                            <strong>Address :</strong>
                            {shippingAddress.address}&nbsp;
                            {shippingAddress.city}&nbsp;
                            {shippingAddress.postalCode}&nbsp;
                            {shippingAddress.country}&nbsp;
                        </p>
                   {/* <p>{orders.shippingPrice}</p> */}
                        {orders.isDeliverd ? (
              <Message variant="success">Paid On {orders.isDeliverd}</Message>
            ) : (
              <Message variant="danger">Not Deliverd</Message>
            )}



                    </ListGroup.Item>
        {/* Payment Details */}

<ListGroup.Item variant="flush">
<ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              <strong>{orders.paymentMethod}</strong>
            </p>
            {orders.isPaid ? (
              <Message variant="success">Paid On {orders.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {orderItems.length === 0 ? (
              <Message>Your Cart is Empty</Message>
            ) : (
              <ListGroup variant="flush">
                {orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to={`/products/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X ${item.price} = ${item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
</ListGroup.Item>
                </Col>


                {/* left Section */}
                <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${orders.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${orders.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>${orders.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>${orders.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                  <Message variant="danger">{"error"}</Message>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/* {!order.isPaid && (
            <ListGroup.Item>
              {loadingPay && <Loader />}
              {!sdkReady ? (
                <Loader />
              ) : (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler}
                />
              )}
            </ListGroup.Item>
          )} */}
        </Col>
            </Row>

        </>
    )
}

export default OrderScreen
