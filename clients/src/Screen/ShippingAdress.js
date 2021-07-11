import React,{useState,useEffect} from 'react'
import { Form, Button } from "react-bootstrap";
import FormContainer from "../componant/share/FormContainer"
import { useDispatch, useSelector } from "react-redux";
import {saveShippingAdress} from "../Action/CartAction"
import BreadCrum from '../componant/share/BreadCrum';
const ShippingAdress = ({history}) => {
    // console.log(history)
 const dispatch= useDispatch()
 const Delevery = useSelector((x)=>x.carts)
const  {shippingAddress}=Delevery
//  console.log(shippingAddress.city)
const [users, setUsers] = useState(shippingAddress)

const {address,city,postalCode,country}=users
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingAdress({address,city,postalCode,country}))
        history.push("/payment");
    }
 const   OnChangeHandle=(e)=>{
const {value,name}=e.target
setUsers({...users,[name]:value})

    }

    
    return (
        <>
    
        <FormContainer>
        <BreadCrum step1 step2/>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
           onChange={OnChangeHandle} name="address" placeholder="Enter Address"
          value={users.address}
          
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
           onChange={OnChangeHandle} name="city" placeholder="Enter City"
           value={users.city}
         
         
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalcode">
          <Form.Label>PostalCode</Form.Label>
          <Form.Control
            type="text"
           onChange={OnChangeHandle} name="postalCode" placeholder="Enter postalcode"
           value={users.postalCode}
         
           
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
           onChange={OnChangeHandle} name="country" placeholder="Enter Country"
          value={users.country}
            
           
            required
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          continue
        </Button>
      </Form>
        </FormContainer>
            
        </>
    )
}

export default ShippingAdress
