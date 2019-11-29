import React from 'react';

import CustomButton from '../custom-btn/custom-button.components';

import './styles.scss';



const CartDropdown = () =>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>CHECKOUT</CustomButton>
    </div>  
)

export default CartDropdown;