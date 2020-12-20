import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/CheckoutItem";
import "./styles.scss";

export const CheckoutPage = () => {
  const { items } = useSelector((state) => state.cart);
  const checkoutTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <div className="total">
        <span>TOTAL: ${checkoutTotal}</span>
      </div>
    </div>
  );
};
