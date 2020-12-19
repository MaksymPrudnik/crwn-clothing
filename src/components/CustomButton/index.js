import "./styles.scss";

export const CustomButton = ({ children, customClasses, ...otherProps }) => (
  <button className={`custom-button ${customClasses}`} {...otherProps}>
    {" "}
    {children}{" "}
  </button>
);
