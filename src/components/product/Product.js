import React from "react";
import styled from "styled-components";
const StyleProduct = styled.div`
  .product {
    &-items {
      box-shadow: 0 0 20px 2px ${(props) => props.theme.grayColor};
      padding: 1rem;
      position: relative;
      cursor: pointer;
    }
    &-name {
      font-weight: 700;
      font-size: 1.6rem;
      color: ${(props) => props.theme.textPrimary};
    }
    &-text {
      font-size: 1.4rem;
      font-weight: 500;
    }
    &-footer {
      margin-top: 1rem;
    }
    &-price {
      font-size: 1.8rem;
      color: ${(props) => props.theme.redColor};
      &__old {
        margin-left: 1rem;
        font-size: 1.2rem;
        color: #ccc;
      }
    }
    &-rating {
      display: flex;
      align-items: center;
      &__icon {
        color: #ffa400;
        font-size: 1.4rem;
      }
      &__text {
        font-size: 1.4rem;
      }
    }
    &-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 1rem;
      cursor: pointer;
      &__icon {
        color: ${(props) => props.theme.whiteColor};
        font-size: 1.2rem;
      }
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-sale {
        position: absolute;
        top: 30px;
        right: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
      background-color: ${(props) => props.theme.redColor};
      border-radius: 100rem;
      &__text {
        color: ${props => props.theme.whiteColor};
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
`;
const Product = () => {
  return (
    <StyleProduct>
      <div className="product-list">
        <div className="product-items">
          <img src="/product.jpg" alt="" />
          <div className="product-sale">
            <span className="product-sale__text">-12%</span>
          </div>
          <div className="product-content">
            <p className="product-name">Uvedose</p>
            <p className="product-text">
              Vitamin D3 Uvedose - 1 Liều cho 3 tháng 100000 UI{" "}
            </p>
          </div>
          <div className="product-footer">
            <div className="product-actions">
              <p className="product-price">
                {" "}
                99.000 <sup>đ</sup>
                <del className="product-price__old">
                  150.000 <sup>đ</sup>
                </del>
              </p>
              <div className="product-rating">
                <i class="fa-solid fa-star product-rating__icon"></i>
                <i class="fa-solid fa-star product-rating__icon"></i>
                <i class="fa-solid fa-star product-rating__icon"></i>
                <i class="fa-solid fa-star product-rating__icon"></i>
                <i class="fa-solid fa-star product-rating__icon"></i>
                <span className="product-rating__text">(7)</span>
              </div>
            </div>
            <div className="product-cart">
              <i class="fa-solid fa-cart-shopping product-cart__icon"></i>
            </div>
          </div>
        </div>
      </div>
    </StyleProduct>
  );
};

export default Product;
