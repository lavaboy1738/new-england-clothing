import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripkeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HyN9gLJeoL9ZVMfRmlnKMHgRGRsocM4GoLrBqdiWEL1K1VtxnVVCar06b29pbuBiH9GqY7UzTccvzqFWvgMdLOA00L4CsERzA";
    
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay the boi"
            name="New England Clothing"
            billingAddress
            shippingAddress
            alipay
            bitcoin
            image="https://img.pokemondb.net/artwork/large/charizard.jpg"
            description={`Your Total is $${price}`}
            amout={priceForStripe}
            panelLabel = "Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export {StripkeCheckoutButton};