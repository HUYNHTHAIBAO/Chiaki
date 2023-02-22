import React from "react";
import styled from "styled-components";
import Product from "../../components/product/Product";

const StyleSuggestProduct = styled.div`
  margin-top: 5rem;
  .suggest-product {
    &__main {
      display: flex;
    }
    &__text {
      margin-bottom: 1rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: ${(props) => props.theme.redColor};
    }
  }
  @media screen and (max-width: 1079px) {
    .suggest-product__main {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 767px) {
    .suggest-product__main {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 479px) {
    .suggest-product__main {
      grid-template-columns: 1fr;
    }
  }
`;

const SuggestProduct = () => {
  return (
    <StyleSuggestProduct>
      <div className="container">
        <div className="suggest-product__heading">
          <p className="suggest-product__text">Gợi ý dành cho bạn</p>
        </div>
        <div className="suggest-product__main">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    </StyleSuggestProduct>
  );
};

export default SuggestProduct;
