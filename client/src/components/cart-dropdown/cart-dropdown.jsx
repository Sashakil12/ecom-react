import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-btn/custom-button.components';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './styles.scss';

import { createStructuredSelector } from 'reselect'
import CartItem from '../cart-items/cartItem.comp'
import { connect } from 'react-redux'
import { cartItemsSelector } from '../../redux/cart/cart.selector'
const CartDropdown = ({items, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {items.length?
                items.map(item=>(
                <CartItem key={item.id} item={item}></CartItem>
            )): 
            <span className="empty-message"> Your Cart Is Empty </span>
            }
            </div>
        <CustomButton onClick={()=> {history.push("/checkout");
                                    dispatch(toggleCartHidden())    }}> CHECKOUT </CustomButton>
    </div>   
)

const mapStateToProp = createStructuredSelector({
    items: cartItemsSelector
})

export default withRouter(connect(mapStateToProp)(CartDropdown));