import React from "react";
import styled from "styled-components";

const StyleButtonTransparent = styled.button`
  padding: 1rem 2rem;
  color: ${(props) => props.theme.blackColor};
  font-size: 1.3rem;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.grayColor};
  transition: all 0.2s linear;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
  }
  @media screen and (max-width: 767px) {
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 479px) {
            padding: 1rem 1rem;
            font-size: 1rem;
        }
`;

const ButtonTransparent = ({ children }) => {
  return <StyleButtonTransparent>{children}</StyleButtonTransparent>;
};

export default ButtonTransparent;
