import React from 'react';

import {ReactComponent as CartLogo} from '../../assets/cart.svg'

import './cart-icon.scss'

import { connect } from 'react-redux';
import { toggleCartHidden }  from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden}) =>(
    <div className="cart-icon">
        <CartLogo className='shopping-icon' onClick={toggleCartHidden}></CartLogo>
        <span className="item-count"></span>
    </div>
)

const mapDispatchToProps = dispatch=>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);