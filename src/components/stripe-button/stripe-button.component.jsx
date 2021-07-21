import React from "react";
import StripCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //stripe wants the price value in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JFYaSAcMxH2GWy95l0M4fBg41TYtiGqcnarxTlP4JJ13OET44EJ4vfR1SWfcSbueD6vWkpGzDFjPX0ii8KCLVP1008wI4iftT";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
