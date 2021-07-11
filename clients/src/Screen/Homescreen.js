import React,{useState,useEffect} from 'react'
import{ Container,Row,Col }from  "react-bootstrap"
import { useSelector,useDispatch } from 'react-redux'
import Productscreen from './Productscreen'
import axios from 'axios'
import {Allproduct} from "../Action/productAction"
import Loader  from "../componant/share/Loader"
import Message from '../componant/share/Message'
const Homescreen = () => {
  

const product_of_redux=useSelector((state)=>state.ProductList)
   

const {products,Loading,error}=product_of_redux

    const dispatch=useDispatch()
    // const [products1, setProducts] = useState(products)


useEffect(() => {
  dispatch(Allproduct())
  
},[dispatch])


    return (
        <>
        {Loading? <Loader/> :error?<Message variant="danger">{error}</Message>:(<Container>
              <Row>
                {
                    products.map((x,index)=>(
                        <Col key={index} md={3} m={3} >
                            <Productscreen key={x.id} product={x} />
                        </Col>
                    ))
                }
              </Row>
           </Container> )

        }
           
        </>
    )
}

export default Homescreen
