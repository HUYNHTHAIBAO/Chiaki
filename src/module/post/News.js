import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import NewItems from "../../components/product/NewItems";

const StyleNews = styled.div`
  margin-top: 5rem;
  .new-main {
    display: flex;
    gap: 0 2rem;
  }
  .new-left__items {
    width: 60%;
  }
  .new-left {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px 12px;
    border-radius: 5px;
    background-color: #fff;
    padding: 12px;
    box-shadow: 0 1px 3px -1px rgb(200 200 200 / 10%),
      0 1px 4px 1px rgb(200 200 200 / 5%), 0 1px 6px 2px rgb(200 200 200 / 5%);
  }
  .new-right {
    width: 40%;
    &__list {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem 0;
    }
    &__items {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      gap: 0 2rem;
      box-shadow: 0 1px 3px -1px rgb(200 200 200 / 10%),
        0 1px 4px 1px rgb(200 200 200 / 5%), 0 1px 6px 2px rgb(200 200 200 / 5%);
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.primaryColor};
        }
    }
    &__text {
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 1079px) {
    .new-main {
      display: flex;
      flex-direction: column;
    }
    .new-left__items {
      width: 100%;
    }
    .new-right {
      margin-top: 2rem;
      width: 100%;
    }
    .new-right__list {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 1rem;
    }
  }
  @media screen and (max-width: 479px) {
    .new-right__list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;

const News = () => {
  return (
    <StyleNews>
      <div className="container">
        <div className="new-main">
          <div className="new-left__items">
            <Button>Tin tức</Button>
            <div className="new-left">
              <NewItems></NewItems>
              <NewItems></NewItems>
              <NewItems></NewItems>
              <NewItems></NewItems>
              <NewItems></NewItems>
              <NewItems></NewItems>
              <NewItems></NewItems>
              <NewItems></NewItems>
            </div>
          </div>
          <div className="new-right">
            <Button>Câu hỏi thường gặp</Button>
            <div className="new-right__list">
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
              <div className="new-right__items">
                <img src="oto.png" alt="" />
                <p className="new-right__text">Khi nào tôi nhận được hàng ?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleNews>
  );
};

export default News;
