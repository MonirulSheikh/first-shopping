
import axios from "axios"
export const Allproduct=()=>async(dispatch)=>{
try {
    dispatch({type:"PRODUCT_LIST-REQUEST"})
 const {data}=await axios.get("/products")
dispatch({type:"PRODUCT_LIST_SUCCESS",payload:data})

} catch (error) {
    dispatch({type:"PRODUCT_LIST_FAILS",payload:error.response && error.response.data.message
    ? error.response.data.message
    : error.message}) 
}
}
 

export const SingleProductAction=(id)=>async(dispatch)=>{
    try {
        dispatch({type:"PRODUCT_DETAILS_REQUEST"})
        const {data}=await axios.get(`/products/${id}`)
        dispatch({type:"PRODUCT_DETAILS_SUCCESS",payload:data})
    } catch (error) {
        dispatch({type:"PRODUCT_DETAILS_FAILS",payload:error.response && error.response.data.message
    ? error.response.data.message
    : error.message}) 
}
    }
  

