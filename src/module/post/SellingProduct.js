import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import ButtonTransparent from "../../components/button/ButtonTransparent";
import Product from "../../components/product/Product";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
const StyleSellingProduct = styled.div`
  margin-top: 5rem;
  .selling-product__main {
    display: flex;
    gap: 0 1rem;
  }
  .selling-product__heading {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .heading-left {
    display: flex;
    gap: 0 1rem;
  }
`;


const SellingProduct = () => {
  return (
    <StyleSellingProduct>
      <div className="container">
        <div className="selling-product__heading">
          <div className="heading-left">
            <Button>Sản phẩm bán chạy</Button>
            <ButtonTransparent>Mới nhất</ButtonTransparent>
            <ButtonTransparent>Giá tốt</ButtonTransparent>
          </div>
          <div className="heading-right"></div>
          <Button>Xem tất cả bán chạy</Button>
        </div>
        <div className="selling-product__main">
          <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={"auto"}
            navigation
          >
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
              <Product></Product>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </StyleSellingProduct>
  );
};

export default SellingProduct;
