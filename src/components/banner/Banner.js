import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const StyleWrapperMenu = styled.div`
  .wrapper-menu {
    margin-top: 1rem;
    display: flex;
    gap: 0 1rem;
  }
  .menu {
    width: 20%;
    box-shadow: 0 0 20px 10px ${(props) => props.theme.grayColor};
  }
  .menu-list {
    position: relative;
    &:hover .menu-dropdown {
      display: block;
    }
  }
  .menu-items {
    display: flex;
    align-items: center;
    gap: 0 1rem;
    padding: 1rem;
    &__text {
      font-size: 1.4rem;
      font-weight: 500;
    }
    &__icon {
      font-size: 1.6rem;
    }
    &__dropdown {
      transform: rotate(270deg);
      font-size: 1.6rem;
      margin-left: auto;
    }
    &:hover {
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.whiteColor};
      cursor: pointer;
    }
  }
  .banner {
    width: 80%;
  }
  .banner-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 220px 220px 100px;
    gap: 1rem;
  }
  .banner-large {
    grid-column: 1/4;
    grid-row: 1/3;
  }
  .banner-small {
    grid-column: 4/5;
  }
  .banner-small:last-child {
    grid-column: 4/-3;
  }
  .banner-long {
    grid-row: 3/4;
    grid-column: -5/-1;
  }
  .menu-dropdown {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, 0);
    background-color: #eee;
    width: 200px;
    height: auto;
    display: none;

    &__items {
    }
    &__text {
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  /*  */

  @media screen and (max-width: 1365px) {
    .banner-list {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 200px 200px 100px;
    }
    .banner-small {
      display: none;
    }
    .banner-large {
      grid-column: 1/5;
      grid-row: 1/3;
      overflow: hidden;
    }
    .banner-long {
      grid-column: 1/5;
    }
    .menu {
      width: 30%;
    }
    .banner {
      width: 70%;
    }
  }
  @media screen and (max-width: 1023px) {
    .menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      z-index: 999;
      width: 40%;
      height: 100vh;
      box-shadow: none;
      opacity: 0;
      visibility: hidden;
    }
    .menu-bg.is-active {
      display: block;
    }
    .menu.is-active {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
    .banner {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    .banner-long {
      display: none;
    }
    .banner-list {
      grid-template-columns: 1fr;
      grid-template-rows: 0;
    }
    .banner-large {
      width: 100%;
      height: 500px;
    }
  }
  @media screen and (max-width: 479px) {
    .banner-large {
      height: 300px;
    }
  }
`;
// const menu = document.querySelector(".menu");
// const menuToggle = document.querySelector(".menu-toggle");
// const menuClose = document.querySelector(".menu-close");
// const menuBg = document.querySelector(".menu-bg");
// menuToggle.addEventListener("click", function (e) {
//   menu.classList.add("is-active");
//   menuBg.classList.add("is-active");
// });

// document.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//     menu.classList.remove("is-active");
//     menuBg.classList.remove("is-active");
//   }
// });
const Banner = () => {
  return (
    <StyleWrapperMenu>
      <div className="container">
        <div className="wrapper-menu">
          <div className="menu">
            <div className="menu-list">
              <div className="menu-bg"></div>
              <div className="menu-items">
                <i class="fa-solid fa-notes-medical menu-items__icon"></i>
                <p className="menu-items__text">Thực phẩm chức năng</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-dropdown">
                <div className="menu-dropdown__items">
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                  <p className="menu-dropdown__text">Dropdown Demo</p>
                </div>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-wand-magic-sparkles menu-items__icon"></i>
                <p className="menu-items__text">Mỹ phẩm</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-person-breastfeeding menu-items__icon"></i>
                <p className="menu-items__text">Mẹ và Bé</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-shirt menu-items__icon"></i>
                <p className="menu-items__text">Thời trang</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-house menu-items__icon"></i>
                <p className="menu-items__text">Nhà Cửa & Đời Sống</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-laptop menu-items__icon"></i>
                <p className="menu-items__text">Thiết bị - Phụ kiện số</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-kitchen-set menu-items__icon"></i>
                <p className="menu-items__text">Đồ gia dụng</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-clock menu-items__icon"></i>
                <p className="menu-items__text">Đồng hồ</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-sharp fa-solid fa-futbol menu-items__icon"></i>
                <p className="menu-items__text">Đồ thể thao - Du lịch</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-book menu-items__icon"></i>
                <p className="menu-items__text">Sách truyện</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-copy menu-items__icon"></i>
                <p className="menu-items__text">Văn phòng phẩm</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-dog menu-items__icon"></i>
                <p className="menu-items__text">Chăm sóc thú cưng</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
              <div className="menu-items">
                <i class="fa-solid fa-toolbox menu-items__icon"></i>
                <p className="menu-items__text">Điện máy - điện lạnh</p>
                <i class="fa-solid fa-circle-chevron-down menu-items__dropdown"></i>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="banner-list">
              <div className="banner-large">
                <img
                  src="banner-large-3.jpg"
                  alt=""
                  style={{ minHeight: "450px" }}
                />
              </div>
              <div className="banner-small">
                <img src="banner-small-3.jpg" alt="" />
              </div>
              <div className="banner-small">
                <img
                  src="banner-small-2.jpg"
                  alt=""
                  style={{ minHeight: "220px" }}
                />
              </div>
              <div className="banner-long">
                <img src="banner-small-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleWrapperMenu>
  );
};

export default Banner;
