import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payment extends Component {
    render() {
        return (
            <StripeCheckout
              name="Brand Name"
              description='Purchase Item' 
              amount={500}
              token={token => this.props.handleCheckoutToken(token)}
              stripeKey={process.env.REACT_APP_PUB_STRIPE_KEY}
            >
                <button className='btn black'>Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payment);