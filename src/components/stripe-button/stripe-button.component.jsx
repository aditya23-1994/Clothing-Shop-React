import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HCgjBBFQs8YBJWl4aCnKahT4vbEEqRvBI1733hxqLUGXGq73Je0wtixHZanP8b3c40z3QPpagqdvY6gIY9VOuze00YqIwf8QV';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout 
          label= 'PAY NOW'
          name= 'CROWN CLOTHING Ltd.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount = {priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;