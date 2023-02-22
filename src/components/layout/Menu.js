import styled from "styled-components";
const StyleMenu = styled.div`
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
  .menu-dropdown {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, 0);
    background-color: #eee;
    width: 200px;
    height: auto;
    display: none;
    &__text {
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  /* @media screen and (max-width: 1023px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      z-index: 999;
      width: 40%;
      height: 100vh;
      box-shadow: none;
      display: none;
      display: none;
      &.is-active {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    }
    .menu-bg.is-active {
      display: block;
    } */
  
`;

const Menu = () => {
  return (
    <StyleMenu>
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
    </StyleMenu>
  );
};

export default Menu;
