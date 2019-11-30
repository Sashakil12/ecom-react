import React from 'react';

import {ReactComponent as CartLogo} from '../../assets/cart.svg'

import './cart-icon.scss'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { toggleCartHidden }  from '../../redux/cart/cart.actions'
import { cartItemsCount } from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartHidden, cartItemCount}) =>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
        <CartLogo className='shopping-icon'>
        </CartLogo>
        <span className="item-count">{cartItemCount}</span>
    </div>
)}
const mapStateToProp = createStructuredSelector({
 cartItemCount: cartItemsCount
})
const mapDispatchToProps = dispatch=>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProp,mapDispatchToProps)(CartIcon);