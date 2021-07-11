import logo from './logo.svg';
import './App.css';
import Footer from './componant/Footer';
import Navbar from './componant/Menubar';
import Productscreen from './Screen/Productscreen';
import Homescreen from './Screen/Homescreen';
import ProductDetail from './Screen/ProductDetail';
import CartScreen from './Screen/CartScreen';
import {Route,Switch} from "react-router-dom"
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ProfileScreen from "./Screen/ProfileScreen"
import ShippingAdress from './Screen/ShippingAdress';
import PaymentScreen from './Screen/PaymentScreen';
import Placeorder from './Screen/Placeorder';
import OrderScreen from './Screen/OrderScreen';
function App() {

  return (<>
    <Navbar/>
    <Switch>
      <Route path="/"  exact component={Homescreen}/>
      <Route path="/products/:id" exact component={ProductDetail} />
      <Route  path="/profile" component={ProfileScreen}/>
      <Route  path="/cart/:id?" exact component={CartScreen}/>
      <Route path="/login" exact component={LoginScreen} />
<Route path ="/register" component={RegisterScreen}/>
<Route path="/shipping" component={ShippingAdress} exact />
<Route path="/payment" exact component={PaymentScreen} />
<Route path="/orders/:id" exact component={OrderScreen} />
<Route path="/placeorder" component={Placeorder}/>
    </Switch>
  
    
    </> );
}

export default App;
