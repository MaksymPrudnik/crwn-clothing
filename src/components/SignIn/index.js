import { Component } from "react";
import { CustomButton } from "../CustomButton";
import { FormInput } from "../FormInput/FormInput.component";

import { auth, signInWithGoogle } from "../../firebase";

import "./styles.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />

          <div className="sign-in-buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              customClasses="google"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
