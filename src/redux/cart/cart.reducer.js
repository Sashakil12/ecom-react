import { cartAction } from './cart.action.types';
import { addItemToCart } from './groupItems'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
const cartReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case cartAction.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartAction.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            }
        default:
            return state;
    }
}

export default cartReducer