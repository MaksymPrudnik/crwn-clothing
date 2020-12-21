import styled, { css } from "styled-components";

const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const google = css`
  background-color: #4265ac;
  border: none;
  color: white;

  &:hover {
    background-color: #35459a;
  }
`;

const defaultStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getCustomStyles = ({ customStyles }) => {
  switch (customStyles) {
    case "google":
      return google;
    case "inverted":
      return inverted;
    default:
      return defaultStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getCustomStyles}
`;
