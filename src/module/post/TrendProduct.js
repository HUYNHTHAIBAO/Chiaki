import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import ButtonTransparent from "../../components/button/ButtonTransparent";
import Product from "../../components/product/Product";
import ProductHeading from "../../components/product/ProductHeading";
import SellingProduct from "./SellingProduct";
const StyleTrendProduct = styled.div`
  margin-top: 5rem;
  .trend-header {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__left {
        font-size: 1.5rem;
        font-family: 700;
        color: ${props => props.theme.primaryColor};;
    }
    &__right {
        font-size: 1.3rem;
        font-weight: 400;
        border: 1px solid ${props => props.theme.primaryColor};
        border-radius: 20px;
        padding: 0.5rem 2rem;
        cursor: pointer;
        color: ${props => props.theme.primaryColor};;
    }
    &__list {
      display: flex;
      justify-content: space-between;
      gap: 0 1rem;
    }
    &__items {
        width: 100%;
      display: flex;
      align-items: center;
      padding: 1rem;
      gap: 0 1rem;
      border-radius: 1rem;
      box-shadow: 0 0 20px 6px ${(props) => props.theme.grayColor};
    }
    &__title {
      font-size: 1.6rem;
      font-weight: 400;
    }
    &__text {
      font-size: 1.2rem;
      font-weight: 400;
    }
    &__img {
      max-width: 70px;
      height: 70px;
    }
  }
  @media screen and (max-width: 1249px) {
    .trend-header__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    .trend-header__items {
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 767px) {
    .trend-header__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
`;

const TrendProduct = () => {
  return (
    <StyleTrendProduct>
      <div className="container">
        <div className="trend-header">
          <p className="trend-header__left">Xu hướng mua sắm</p>
          <p className="trend-header__right">Xem thêm</p>
        </div>
        <div className="trend-header__list">
          <div className="trend-header__items">
            <div className="trend-header__content">
              <p className="trend-header__title">Obagi</p>
              <p className="trend-header__text">1k+ sản phẩm</p>
            </div>
            <img
              src="/trendProduct-1.png"
              alt=""
              className="trend-header__img"
            />
          </div>
          <div className="trend-header__items">
            <div className="trend-header__content">
              <p className="trend-header__title">Toner</p>
              <p className="trend-header__text">150+ sản phẩm</p>
            </div>
            <img
              src="/trendProduct-2.png"
              alt=""
              className="trend-header__img"
            />
          </div>
          <div className="trend-header__items">
            <div className="trend-header__content">
              <p className="trend-header__title">Kem chống nắng</p>
              <p className="trend-header__text">250+ sản phẩm</p>
            </div>
            <img
              src="/trendProduct-3.png"
              alt=""
              className="trend-header__img"
            />
          </div>
          <div className="trend-header__items">
            <div className="trend-header__content">
              <p className="trend-header__title">Nước hoa</p>
              <p className="trend-header__text">1k+ sản phẩm</p>
            </div>
            <img
              src="/trendProduct-4.png"
              alt=""
              className="trend-header__img"
            />
          </div>
          <div className="trend-header__items">
            <div className="trend-header__content">
              <p className="trend-header__title">Sữa Non Cho Bé</p>
              <p className="trend-header__text">9+ sản phẩm</p>
            </div>
            <img
              src="/trendProduct-5.png"
              alt=""
              className="trend-header__img"
            />
          </div>
          <div className="trend-header__items">
            <div className="trend-header__content">
              <p className="trend-header__title">Thực Phẩm Chức Năng</p>
              <p className="trend-header__text">Chính Hãng Mỹ</p>
            </div>
            <img
              src="/trendProduct-6.png"
              alt=""
              className="trend-header__img"
            />
          </div>
        </div>
      </div>
      <SellingProduct></SellingProduct>
    </StyleTrendProduct>
  );
};

export default TrendProduct;
