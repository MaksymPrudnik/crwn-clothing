import { useSelector } from "react-redux";
import { CartItem } from "../CartItem";
import { CustomButton } from "../CustomButton";
import "./styles.scss";

export const CartDropdown = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
