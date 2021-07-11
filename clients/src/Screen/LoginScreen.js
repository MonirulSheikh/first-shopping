import React, { useState ,useEffect} from 'react'
import { Link } from "react-router-dom"
import { Form, Row, Col, Button } from "react-bootstrap"
import Message from "../componant/share/Message"
import {loginAction} from  "../Action/userAction"
import { useSelector,useDispatch} from "react-redux"
import FormContainer from '../componant/share/FormContainer'
const LoginScreen = ({location,history}) => {


    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
const dispatch = useDispatch()

const {loading,error,userInfo} = useSelector((state) => state.userLogin)

// console.log(userInfo)


    const redirect=location.search?location.search.split("=")[1]:"/";
    // const redirect=null
    // console.log("kkkk,",redirect)
    useEffect(() => {
        
        if(userInfo){
            history.push(redirect)
        }
     }, [history,userInfo,useSelector])
    const submitHandler = (event) => {
        event.preventDefault()
    dispatch(loginAction(email,password))
    }
    return (
        <>
            <FormContainer>
                <h1 className="text-center">SIGN IN</h1>
                {error && <Message variant="secondary"><h4>{error}</h4></Message>}

                <Form onSubmit={submitHandler}>
                    <Form.Group >
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="input" placeholder="Inter Email ID" onChange={(e, v) => setEmail(e.target.value)} 

                        value={email}  ></Form.Control>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="input" placeholder="Inter Password" onChange={(e) => setPassword(e.target.value)}
                            value={password} >


                        </Form.Control>

                    </Form.Group>
                    <Button varient="primary" type="submit">
                        SING IN
                    </Button>
                    </Form>
                    <Row>
          <Col>
            New Customer ?
            <Link to={redirect? `register?redirect=${redirect}`:"/register"}>
              Register
            </Link>
          </Col>
        </Row>
               
            </FormContainer>


        </>
    )
}

export default LoginScreen
