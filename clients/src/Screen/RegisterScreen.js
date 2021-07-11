import React,{useState,useEffect} from 'react'
import FormContainer from '../componant/share/FormContainer'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import {registerAction} from "../Action/userAction"
import Message from '../componant/share/Message';
import Loader from "../componant/share/Loader"

const RegisterScreen = ({location,history}) => {

    const {error,loading,userInfo}=useSelector((x)=>x.userRegister)
    const dispatch= useDispatch()
    
const [user, setUser] = useState({name:"",email:"",password:"",conformPassword:""})
    const redirect=location.search?location.search.split("=")[1]:"/";

    const onChangeHandl=(e)=>{
      const {name,value}=e.target
      setUser({...user,[name]:value})
    }
const FormSubmit=(e)=>{
    const {email,password,conformPassword,name}=user;
    e.preventDefault();
    dispatch(registerAction(email,password,conformPassword,name))
}
useEffect(() => {
  if (userInfo) {
    history.push(redirect);
  }
}, [history, userInfo, redirect]);

    return (
        <>
           <FormContainer>
        <h1>Register</h1>
        {error && <Message varient="primary">{error}</Message>}
        {loading && <Loader />}
        <Form  onSubmit={FormSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
             onChange={onChangeHandl} placeholder="enter Name"
             name="name"
              
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
             type="text"
             onChange={onChangeHandl} placeholder="enter email"
             name="email"
             
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
             onChange={onChangeHandl} placeholder="enter password"
      name="password"
            
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>COnfirm Password</Form.Label>
            <Form.Control
              type="password"
             onChange={onChangeHandl} placeholder="Re-enter password"
            name="conformPassword"
              
            ></Form.Control>
          </Form.Group>
          <Button type="submit" varient="primary">
            SING UP
          </Button>
        </Form>
        <Row>
          <Col>
            Have an account !
            <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
        </>
    )
}

export default RegisterScreen
