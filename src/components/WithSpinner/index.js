import { SpinnerOverlay, SpinnerContainer } from "./styled";

export const WithSpinner = (WrappedComponent) => ({
  isLoading,
  ...otherProps
}) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
