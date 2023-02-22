import React, { useState } from "react";
import styled from "styled-components";
const StyleHeader = styled.div`
  .header {
    /* banner */
    &-banner {
      width: 100%;
      height: 3.2rem;
      background-color: ${(props) => props.theme.primaryColor};
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__left-text {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${(props) => props.theme.whiteColor};
        margin-left: 1rem;
      }
      &__left-icon {
        margin-right: 1rem;
      }
      &__right {
        .menu-banner__right {
          display: flex;
          gap: 0 2rem;
          align-items: center;
          font-size: 1.4rem;
          list-style: none;
          text-decoration: none;
          margin-right: 2rem;
        }
        .menu-banner__link {
          color: ${(props) => props.theme.whiteColor};
          text-decoration: none;
        }
      }
    }
    /* content */
    &-content {
      margin-top: 1.5rem;
      &__logo {
        width: 20rem;
        height: 4rem;
      }
      &__main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 1rem;
      }
      &__center {
        width: 100%;
        max-width: 677px;
        position: relative;
      }
      &__input {
        width: 100%;
        padding: 1.5rem 12rem 1.5rem 3rem;
        border-radius: 2rem;
        border: none;
        border: 1px solid ${(props) => props.theme.grayColor};
        outline: none;
        font-size: 1.5rem;
      }
      &__button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1.7rem 4rem;
        background-color: ${(props) => props.theme.primaryColor};
        border-radius: 4rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme.whiteColor};
      }
      &__tag {
        display: inline-block;
        margin-top: 1rem;
        font-size: 1.3rem;
        font-weight: 700;
        color: ${(props) => props.theme.textPrimary};
        cursor: pointer;
      }
      &__list {
        display: flex;
        align-items: center;
        gap: 0 0.5rem;
      }
      .header-items__img {
        width: 5rem;
        height: 4rem;
        cursor: pointer;
      }
      .header-content__items {
        display: flex;
        align-items: center;
      }
      .header-items__content {
        margin-right: 3rem;
      }
      .header-items__text {
        font-size: 1.2rem;
        font-weight: 700;
      }
      .header-items__number {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme.redColor};
      }
    }
  }
  .header-content.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 0;
    padding: 1rem 0;
    z-index: 999;
    background-color: #eee;
  }
  .menu-toggle {
    display: none !important;
    font-size: 30px;
    cursor: pointer;
    margin-left: auto;
  }
  /* .menu-close {
    display: none !important;
    position: fixed;
    right: 20px;
    top: 20px;
    color: white;
    font-size: 30px;
    z-index: 10;
    &.is-active {
      display: inline-block !important;
      z-index: 1000;
    }
  } */
  .menu-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.491);
    display: none;
  }
  /* responsive */
  @media screen and (max-width: 1599px) {
    .header-banner__left-text {
      display: none;
    }
  }
  @media screen and (max-width: 1268px) {
    .header-content__list {
      display: none;
    }
    .main-bar__title {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 1023px) {
    .menu-toggle {
      display: block !important;
    }
  }
  @media screen and (max-width: 767px) {
    .header-banner__right {
      display: none;
    }
    .header-content__tag {
      display: none;
    }
    .header-content__center {
      max-width: 300px;
    }
    .header-content__input {
      padding: 1rem 6rem 1rem 3rem;
    }
    .header-content__button {
      padding: 1.2rem 2rem;
    }
  }
  @media screen and (max-width: 479px) {
    .header-content__center {
      display: none;
    }
  }
`;
const StyleMainBar = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.grayColor};
  .main-bar {
    &__list {
      display: flex;
      justify-content: center;
    }
    &__items {
      padding: 1.4rem 2rem;
      display: flex;
      align-items: center;
      gap: 0 1rem;
    }
    &__title {
      font-size: 2rem;
      font-weight: 700;
    }
    &__text {
      font-size: 1.1rem;
      font-weight: 400;
    }
    &__img {
      width: 4rem;
      height: 4rem;
      background-color: #00aefd;
      border-radius: 100rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__icon {
      font-size: 1.6rem;
      color: ${(props) => props.theme.whiteColor};
    }
  }
  /* responsive */
  @media screen and (max-width: 1140px) {
    .main-bar__title {
      font-size: 1.6rem;
    }
    .main-bar__items {
      padding: 1rem;
    }
  }
  @media screen and (max-width: 1023px) {
    .main-bar__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 70px 70px;
    }
  }
  @media screen and (max-width: 767px) {
    .main-bar__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 70px 70px 70px;
    }

    .main-bar__items {
      padding: 0;
    }
  }
`;

// scroll menu
// window.addEventListener("scroll", function (e) {
//   const header = document.querySelector(".header-content");
//   const scrollY = window.pageYOffset;
//   if (scrollY >= 100) {
//     header && header.classList.add("is-fixed");
//   } else {
//     header && header.classList.remove("is-fixed");
//   }
// });

const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 500) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const handleShow = () => {
    setShow(true);
    console.log("dáhdkasghd");
    
  };
  return (
    <>
      <StyleHeader className="header">
        <div className="header-banner">
          <div className="header-banner__left">
            <p className="header-banner__left-text">
              <i class="fa-solid fa-circle header-banner__left-icon"></i>
              Kệ đựng đũa, dao kéo Hobby Home Decor KDMT3 có khay hứng...: Cao
              Thị Hằng bình luận "Sản phẩm chắc đẹp, mà mấy cái hộp đựng đũa
              hơi..."
            </p>
          </div>
          <div className="header-banner__right">
            <ul className="menu-banner__right">
              <li className="menu-banner__items">
                <a href="/#" className="menu-banner__link">
                  Tải ứng dụng Chiaki
                </a>
              </li>
              <li className="menu-banner__items">
                <a
                  href="/#"
                  className="menu-banner__link"
                  style={{ color: "#FFF5B6" }}
                >
                  Khiếu nại, báo lỗi: 0964.898.762
                </a>
              </li>
              <li className="menu-banner__items">
                <a href="/#" className="menu-banner__link">
                  Tin tức
                </a>
              </li>
              <li className="menu-banner__items">
                <a href="/#" className="menu-banner__link">
                  Tra cứu đơn hàng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={fix ? "header-content is-fixed" : "header-content"}>
          <div className="container">
            <div className="header-content__main">
              <img
                src="logo-menu.png"
                alt=""
                className="header-content__logo"
              />
              <div className="header-content__center">
                <div className="header-content__form">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="header-content__input"
                    placeholder="Tìm kiếm hàng nghìn Sản Phẩm, Thương hiệu..."
                  />
                </div>
                <a href="/#">
                  <i class="fa-solid fa-magnifying-glass header-content__button"></i>
                </a>
                <p className="header-content__tag">
                  Son Môi, Healthy Care, Blackmores, Obagi, Collagen
                </p>
              </div>
              <div className="header-content__actions">
                <div className={show ? "menu-toggle is-active" : "menu-toggle"} onClick={handleShow}   >
                  <i
                    class="fa-solid fa-bars menu-toggle"              
                  ></i>
                </div>
                <i class="fa-solid fa-x menu-close"></i>
                <div class="menu-bg"></div>
                <div className="header-content__list">
                  <div className="header-content__items">
                    <img
                      src="account.svg"
                      className="header-items__img"
                      alt=""
                    />
                  </div>
                  <div className="header-content__items">
                    <img src="faq.svg" alt="" className="header-items__img" />
                  </div>
                  <div className="header-content__items">
                    <img
                      src="phone.svg"
                      alt=""
                      className="header-items__img"
                    />
                    <div className="header-items__content">
                      <p className="header-items__text">
                        Hotline:
                        <span className="header-items__number">
                          0982.770.265
                        </span>
                      </p>
                      <p className="header-items__text">
                        Tổng đài:
                        <span className="header-items__number">1900 2054</span>
                      </p>
                    </div>
                  </div>
                  <div className="header-content__items">
                    <img src="cart.svg" alt="" className="header-items__img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleHeader>
      <StyleMainBar className="main-bar">
        <div className="container main-bar__main">
          <div className="main-bar__list">
            <div className="main-bar__items">
              <div className="main-bar__img">
                <i class="fa-solid fa-check main-bar__icon"></i>
              </div>
              <div className="main-bar__content">
                <p className="main-bar__title">Chất lượng</p>
                <p className="main-bar__text">Cam kết chính hãng</p>
              </div>
            </div>
            <div className="main-bar__items">
              <div
                className="main-bar__img"
                style={{ backgroundColor: "#F94E96" }}
              >
                <i class="fa-solid fa-wallet main-bar__icon"></i>
              </div>
              <div className="main-bar__content">
                <p className="main-bar__title">Tiện lợi</p>
                <p className="main-bar__text">Thanh toán & giao hàng nhanh</p>
              </div>
            </div>
            <div className="main-bar__items">
              <div
                className="main-bar__img "
                style={{ backgroundColor: "#8DC94C" }}
              >
                <i class="fa-light fa-percent main-bar__icon"></i>
              </div>
              <div className="main-bar__content">
                <p className="main-bar__title">Tích lũy</p>
                <p className="main-bar__text">Tích điểm mỗi đơn hàng</p>
              </div>
            </div>
            <div className="main-bar__items">
              <div
                className="main-bar__img"
                style={{ backgroundColor: "#4AADEB" }}
              >
                <i class="fa-solid fa-arrow-right-arrow-left main-bar__icon"></i>
              </div>
              <div className="main-bar__content">
                <p className="main-bar__title">Đổi trả</p>
                <p className="main-bar__text">Trong vòng 5 ngày</p>
              </div>
            </div>
            <div className="main-bar__items">
              <div
                className="main-bar__img"
                style={{ backgroundColor: "#FFAF27" }}
              >
                <i class="fa-solid fa-store main-bar__icon"></i>
              </div>
              <div className="main-bar__content">
                <p className="main-bar__title">Cửa hàng</p>
                <p className="main-bar__text">Giờ mở cửa</p>
              </div>
            </div>
          </div>
        </div>
      </StyleMainBar>
    </>
  );
};

export default Header;
