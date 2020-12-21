import { CustomButtonContainer } from "./styled";

export const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}> {children} </CustomButtonContainer>
);
