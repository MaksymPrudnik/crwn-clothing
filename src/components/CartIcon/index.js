import "./styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const totalQuantity = items.reduce(
    (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
    0
  );
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};
