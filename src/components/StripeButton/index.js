import StripeCheckout from "react-stripe-checkout";
import config from "../../config";

export const StripeCheckoutButton = (price) => {
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Crown Closing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={config.stripe.publishableKey}
    />
  );
};
