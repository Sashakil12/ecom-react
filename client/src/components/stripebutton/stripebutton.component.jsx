import React from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, clearCart }) =>{
    const priceInCents = price *100;
    const pubKey = 'pk_test_4fZh0xkdyJfxPvogQmnHcRq4';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount: priceInCents,
                token
            }
        })
        .then(response => {
                    alert('payment successfull')
                    clearCart()
                })
        .catch(err=> {alert('payment unsuccessfull')
                        console.log(err);
    })
    }
    return(
        <StripeCheckout 
        label="Pay Now"
        name="My app"
        billingAddress
        shippingAddress
        image=''
        description={`Your total payable is ${price}`}
        amount={priceInCents}
        panelLabel='Pay now'
        token={onToken}
        stripeKey = {pubKey}
        ></StripeCheckout>
    )
}

const mapDispatchToProp = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(null,mapDispatchToProp)(StripeCheckoutButton)