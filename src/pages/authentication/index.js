import "./styles.scss";

import SignIn from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";

export const Authentication = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);
