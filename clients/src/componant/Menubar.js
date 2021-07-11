import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {NavLink} from "react-router-dom"
import {logout} from "../Action/userAction"
import { useDispatch,useSelector} from "react-redux"
const Menubar = () => {

     const {userInfo}=useSelector((x)=>x.userLogin)

 const dispatch=useDispatch()
    //  console.log(userInfo)

    const logoutHandler=()=>{
     dispatch(logout())
    }
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
<Container>
<NavLink to="/">
<Navbar.Brand >Amazon</Navbar.Brand>
</NavLink>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
    <LinkContainer to ="/cart">

    <Nav.Link ><i className="fas fa-shopping-cart"></i> &nbsp;
     Cart </Nav.Link>

    </LinkContainer>

    {userInfo?(<>
<NavDropdown title={userInfo.name}>
<LinkContainer to="/profile">
  <NavDropdown.Item>
    Profile
  </NavDropdown.Item>
</LinkContainer>
<NavDropdown.Item onClick={logoutHandler}>
    Log Out
  </NavDropdown.Item>
</NavDropdown>

    </>):(<><LinkContainer to="/login"> 
      <Nav.Link  > <i className="fas fa-user"></i> &nbsp;
      Sign In</Nav.Link>
      </LinkContainer>
      </>)}
      
      {/* <Nav.Link href="#link">Link 2</Nav.Link>
      <Nav.Link href="#link">Link 3</Nav.Link>
      <Nav.Link href="#link">Link 4</Nav.Link>
      <Nav.Link href="#link">Link 5</Nav.Link> */}
     
    </Nav>
    
  </Navbar.Collapse>
</Container>
  
</Navbar>
        </>
    )
}

export default Menubar
