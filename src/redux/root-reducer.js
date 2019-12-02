import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from '../redux/cart/cart.reducer';
import { directoryReducer } from './Directory-Menu/directory.reducer'
import collections from './collection-items/collection.reducer'
export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collections,
    
})