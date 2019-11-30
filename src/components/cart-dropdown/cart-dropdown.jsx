import React from 'react';

import CustomButton from '../custom-btn/custom-button.components';

import './styles.scss';

import CartItem from '../cart-items/cartItem.comp'
import {connect} from 'react-redux'
import { cartItemsSelector } from '../../redux/cart/cart.selector'
const CartDropdown = ({items}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {items.map(item=>(
                <CartItem key={item.id} item={item}></CartItem>
            ))}
            </div>
        <CustomButton> CHECKOUT </CustomButton>
    </div>   
)

const mapStateToProp = state=>({
    items: cartItemsSelector(state) 
})

export default connect(mapStateToProp)(CartDropdown);