import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) =>{
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
        .then(response => alert('payment successfull'))
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


export default StripeCheckoutButton