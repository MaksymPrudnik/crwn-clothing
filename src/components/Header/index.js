import { auth } from "../../firebase";
import { useSelector } from "react-redux";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styled";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { CartIcon } from "../CartIcon";
import { CartDropdown } from "../CartDropdown";

export const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { isHidden } = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contacts</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
