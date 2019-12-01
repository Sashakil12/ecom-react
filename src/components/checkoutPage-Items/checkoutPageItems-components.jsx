import React from 'react';
import './checkoutPageItem.styles.scss';
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItemsfromCart } from '../../redux/cart/cart.actions'
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) =>{
    const { name, price, imageUrl, quantity } = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={ imageUrl } alt={ name } />
        </div>
        <span className="name">{ name }</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value"> { quantity } </span>
                <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
        </span>
        <span className="price">{ price * quantity }</span>
        <div className="remove-button" onClick={()=> clearItem(cartItem)}>&#10005;</div>

    </div>
)}

const mapDispatchToProp = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItemsfromCart(item))
})
export default connect(null,mapDispatchToProp)(CheckoutItem)