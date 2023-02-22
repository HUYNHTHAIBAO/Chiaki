import React from "react";
import styled from "styled-components";
import Menu from "../layout/Menu";
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
    .banner {
      width: 100%;
    }
    .menu {
      display: none;
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
          <Menu></Menu>
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
