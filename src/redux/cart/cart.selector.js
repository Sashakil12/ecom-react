import { createSelector } from 'reselect';

const selectCart = state => state.cart

export const cartItemsSelector = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const cartItemsCount = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumalatedValue, cartItem)=> accumalatedValue+ cartItem.quantity, 0)
)
export const selectCartVisibility  = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const getTotalPrice = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumalatedValue, cartItem)=> accumalatedValue + (cartItem.price * cartItem.quantity),0)
)