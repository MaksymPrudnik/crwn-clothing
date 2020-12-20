import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";

import "./styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contacts
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};
