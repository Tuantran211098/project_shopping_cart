import { combineReducers } from 'redux';
import Product from './Product';
import Cart from './Cart';
import Message from './Message';
const myReducer = combineReducers( {
    Product
    , Cart
    , Message
} )
export default myReducer;
