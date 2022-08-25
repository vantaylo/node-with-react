import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
    render() {
        return (
            <StripeCheckout
              name="Brand Name"
              description='Purchase Item' 
              amount={500}
              token={token => console.log(token)}
              stripeKey={process.env.REACT_APP_PUB_STRIPE_KEY}
            >
                <button className='btn black'>Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default Payment;