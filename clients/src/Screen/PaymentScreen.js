import React,{useState} from 'react'
import BreadCrum from '../componant/share/BreadCrum'
import {useSelector,useDispatch} from "react-redux"
import {Form,Button,Col} from "react-bootstrap"

import {PaymentMethods} from "../Action/CartAction"
const PaymentScreen = ({history}) => {
const dispatch=useDispatch()
  const cart = useSelector((state) => state.carts);
  // console.log(cart)
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(PaymentMethods(paymentMethod))
    history.push("/placeorder");
  }
    return (
        <>
             <BreadCrum step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              required
          onChange={(e)=>setPaymentMethod(e.target.value)}
            ></Form.Check>
             <Form.Check
              type="radio"
              label="Net Banking"
              id="paypal"
              name="paymentMethod"
              value="Netbanking"
              required
          onChange={(e)=>setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
        </>
    )
}

export default PaymentScreen
