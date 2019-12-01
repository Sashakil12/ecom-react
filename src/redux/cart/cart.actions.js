import { cartAction } from './cart.action.types';

export const toggleCartHidden = ()=>({
    type: cartAction.TOGGLE_CART_HIDDEN
    })
export const addItem = (item)=>({
    type: cartAction.ADD_ITEM,
    payload: item
})
export const clearItemFromCart = item => ({
    type: cartAction.CLEAR_ITEMS_FROM_CART,
    payload: item
})
export const removeItemsfromCart = item =>({
    type: cartAction.REMOVE_ITEM,
    payload: item
})