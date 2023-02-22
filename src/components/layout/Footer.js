import React from "react";
import styled from "styled-components";
const StyleFooter = styled.div`
  background-color: ${(props) => props.theme.grayColor};
  margin-top: 5rem;
  padding: 2rem;
  .footer {
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    &-heading {
      font-size: 1.6rem;
      color: ${(props) => props.theme.textPrimary};
    }
    &-text {
      margin-top: 2rem;
      font-size: 1.4rem;
    }
    &-pay {
      margin-top: 1rem;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      &__img {
        width: 67px;
        height: 40px;
      }
    }
    &-social {
      margin-top: 1rem;
      display: flex;
      gap: 0 1rem;
      &__img {
        width: 3rem;
        height: 3rem;
      }
    }
    &-number {
      color: #000000;
    }
    &-download {
      margin-top: 1rem;
      display: flex;
      gap: 0 1rem;
      &__img {
        width: 105px;
        height: 31px;
        object-fit: cover;
      }
    }
    &-form {
      margin-top: 1rem;
      &__input {
        padding: 1rem 1rem;
        border: none;
        outline: none;
        border-radius: 1rem 0 0 1rem;
        border: 1px solid #ccc;
      }
    }
    &-button {
      padding: 1rem 1rem;
      border-radius: 0 1rem 1rem 0;
      border: none;
      border: 1px solid #ccc;
      background-color: ${(props) => props.theme.textPrimary};
      color: ${(props) => props.theme.whiteColor};
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1023px ) {
    .footer-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem 0;
    }
    .footer-pay {
      display: flex;
    }
  }
  @media screen and (max-width: 767px ) {
    .footer-list {
      grid-template-columns: 1fr;
      gap: 5rem 0;
    }
    .footer-pay {
      /* display: flex; */
      flex-wrap: wrap;
    }
  }
`;

const Footer = () => {
  return (
    <StyleFooter>
      <div className="container">
        <div className="footer-list">
          <div className="footer-items">
            <p className="footer-heading">Showroom tại TP. Hồ Chí Minh</p>
            <p className="footer-text">
              Số 62, Yên Đỗ, Phường 1, Bình Thạnh, TP. Hồ Chí Minh
            </p>
            <img
              src="footer-1.svg"
              alt=""
              style={{ width: "180px", height: "69px" }}
            />
            <img src="footer-2.png" alt="" />
          </div>
          <div className="footer-items">
            <p className="footer-heading">Phương thức thanh toán </p>
            <div className="footer-pay">
              <img src="visa.svg" alt="" className="footer-pay__img" />
              <img src="mastercard.svg" alt="" className="footer-pay__img" />
              <img src="jcb.svg" alt="" className="footer-pay__img" />
              <img src="cash.svg" alt="" className="footer-pay__img" />
              <img
                src="internet-banking.svg"
                alt=""
                className="footer-pay__img"
              />
            </div>
            <p className="footer-heading"> Tải ứng dụng điện thoại </p>
            <div className="footer-download">
              <img src="ch-play.png" alt="" className="footer-download__img" />
              <img
                src="apple-store.png"
                alt=""
                className="footer-download__img"
              />
            </div>
            <p className="footer-heading" style={{ marginTop: "1rem" }}>
              Kết nối với chúng tôi
            </p>
            <div className="footer-social">
              <img src="facebook.png" alt="" className="footer-social__img" />
              <img src="twitter.png" alt="" className="footer-social__img" />
              <img src="pinterest.png" alt="" className="footer-social__img" />
              <img src="youtube.png" alt="" className="footer-social__img" />
            </div>
          </div>
          <div className="footer-items">
            <p className="footer-heading">Hỗ trợ khách hàng</p>
            <p className="footer-text">Giới thiệu</p>
            <p className="footer-text">Chính sách đổi trả</p>
            <p className="footer-text">Hướng dẫn đặt hàng</p>
            <p className="footer-text">Vận chuyển & Giao nhận</p>
            <p className="footer-text">Đăng ký bán hàng trên chiaki</p>
            <p className="footer-text">Cam kết bảo mật thông tin</p>
            <p className="footer-text">Cơ chế giải quyết tranh chấp</p>
            <p className="footer-text">Quy chế hoạt động</p>
            <p className="footer-text">Liên hệ</p>
            <p className="footer-text">Đăng ký cộng tác viên</p>
            <p className="footer-text">Sơ đồ Website</p>
          </div>
          <div className="footer-items">
            <div className="footer-items__content">
              <p className="footer-heading">
                CSKH : <span className="footer-number">0932.888.300</span>
              </p>
              <p className="footer-heading">
                Cộng tác viên :{" "}
                <span className="footer-number">0964.406.660</span>
              </p>
              <p className="footer-heading">
                Khiếu nại : <span className="footer-number">0985.409.885</span>
              </p>
              <p className="footer-heading">
                Khiếu nại : <span className="footer-number">0964.898.762</span>
              </p>
            </div>
            <p className="footer-heading" style={{ marginTop: "2rem" }}>
              Đăng ký nhận khuyến mãi từ Chiaki.vn
            </p>
            <p className="footer-text" style={{ marginTop: "0" }}>
              Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
            </p>
            <div className="footer-form">
              <input
                type="text"
                placeholder="Nhập địa chỉ email của bạn"
                className="footer-form__input"
              />
              <button className="footer-button">ĐĂNG KÝ</button>
            </div>
          </div>
        </div>
      </div>
    </StyleFooter>
  );
};

export default Footer;
