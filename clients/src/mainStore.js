import {createStore,combineReducers,applyMiddleware} from "redux"
import { composeWithDevTools}from "redux-devtools-extension"
import thunk from "redux-thunk"
import {productListReducer,prodoductDetailReducer} from "./Reducers/productReducer"
import {CardReducer} from "./Reducers/CardReducers"
import {userLoginReducer,userRegisterReducer,userDetailsReducer} from "./Reducers/userReducers"
import {orderCreateReducer,orderDetailsReducer} from  "./Reducers/orderReducer"
const combineReducer=combineReducers({ProductList:productListReducer,SingleProduct:prodoductDetailReducer,
    
    carts:CardReducer,userLogin:userLoginReducer,userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,orderCreate:orderCreateReducer,orderDetails:orderDetailsReducer
})

const cartItemsFromLocalStorage=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
  const paymentMethod=localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem("paymentMethod")):""
  // ?JSON.parse(localStorage.getItem("paymentMethod")):""

  const ordersDetailsBylocal=localStorage.getItem("orders")?JSON.parse(localStorage.getItem("orders")):{}
const initial={
     userLogin:{ userInfo: userInfoFromStorage },
     carts:{cartItems:cartItemsFromLocalStorage,
      shippingAddress:shippingAddressFromStorage,
      paymentMethod,
      
    }
}
// {cart:{cartItems:cartItemsFromLocalStorage}}
const middleware=[thunk]
const store=createStore(combineReducer,initial, composeWithDevTools(applyMiddleware(...middleware)))

// store.subscribe(()=>console.log(store.getState().carts.cartItems))
// const moni= store.getState().userLogin
// const {userLogin:{userInfo}}=store.getState()
// console.log(userInfo)
export default store