import { cartAction } from './cart.action.types';

export const toggleCartHidden = ()=>({
    type: cartAction.TOGGLE_CART_HIDDEN
    })
export const addItem = (state)=>({
    type: cartAction.ADD_ITEM,
    payload: state
})