import React,{useState} from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
const ProfileScreen = () => {

    const [users, setUsers] = useState({})
    const submitHandler=()=>{
        alert("ok")
    }
    return (
        <>
            <Row>
        <Col md={3}>
          <h1>Update Information</h1>
          {/* {error && <Message varient="danger">{error}</Message>}
          {loading && <Loader />}
          {message && <Message variant="danger">{message}</Message>} */}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
               
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>COnfirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" varient="primary">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h1>My Orders</h1>
        </Col>
      </Row> 
        </>
    )
}

export default ProfileScreen
