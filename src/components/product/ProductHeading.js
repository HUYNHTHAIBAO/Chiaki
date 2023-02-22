import React from "react";
import styled from "styled-components";

const StyleProductHeading = styled.div`
margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductHeading = ({ children }) => {
  return (
    <div className="container"> 
    <StyleProductHeading>
  {children}
    </StyleProductHeading>
    </div>
  );
};

export default ProductHeading;
