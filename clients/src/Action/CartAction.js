import React from 'react'
import axios from "axios"
export const  AddToCartAction = (id,qty) =>async(dispatch,getState)=>{
    const {data}=await  axios.get(`/products/${id}`)

    dispatch({type:"CARD_ADD_ITEM",payload:{
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
    }})

    localStorage.setItem("cartItems",JSON.stringify(getState().carts.cartItems))
}


export const RemoveItems=(id)=>async(dispatch,getState)=>{
    
    dispatch({type:"CARD_REMOVE_ITEM",payload:id})
    // const {carts:{cartItems}}=getState()
    localStorage.setItem("cartItems",JSON.stringify(getState().carts.cartItems))


}
export const saveShippingAdress=(data)=>async(dispatch)=>{

    dispatch({ type: "CART_SAVE_SHIPPING_ADDRESS",payload:data });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
}

export const PaymentMethods=(data)=>(dispatch)=>{
    dispatch({type: "CART_SAVE_PAYMENT_METHOD",payload:data})
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}

