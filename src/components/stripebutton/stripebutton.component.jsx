import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) =>{
    const priceInCents = price *100;
    const pubKey = 'pk_test_4fZh0xkdyJfxPvogQmnHcRq4';
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')}
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