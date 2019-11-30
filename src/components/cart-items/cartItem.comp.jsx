import React from 'react';

import './cartItem.style.scss';


const CartItem = ({item:{ id, name, imageUrl, price, quantity}}) =>(
    <div className="cart-item">        
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='price'>${price * quantity}</span>
            <span className='quantity'>{quantity}</span>
        </div>
    </div>
)

export default CartItem;