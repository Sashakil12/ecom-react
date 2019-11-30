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