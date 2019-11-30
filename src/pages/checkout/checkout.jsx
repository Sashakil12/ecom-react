import React from 'react';
import './checkout.scss';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { cartItemsSelector } from '../../redux/cart/cart.selector'
import { getTotalPrice } from '../../redux/cart/cart.selector'
const Checkout = ({ cartItems, total }) =>{
    console.log(cartItems, "total", total);
    return(
    <div className="checkout-page">
        <div className= "checkout-header">

            <div className="header-block">
                <span>Product</span>
            </div>
             <div className="header-block">
                <span>Description</span>
            </div>
             <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(ci=><div>{ci.name}</div>)}
    <div>{total}</div>
    </div>
)}


const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    total: getTotalPrice
})

export default connect(mapStateToProps)(Checkout);