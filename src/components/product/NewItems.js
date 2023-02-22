import React from 'react';
import styled from 'styled-components';

const StyleNewItems = styled.div`
.news-items {
    &__list {
        display: flex;
        gap: 0 1rem;
        cursor: pointer;
    }
    &__img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
    &__title {
        font-size: 1.4rem;
        font-weight: 500;
    }
    &__text {
        margin-top: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #ccc;
    }
    &__actions {
        display: flex;
        align-items: center;
        gap: 0 1rem;
    }
    &__icons {
            font-size: 1.4rem;
    }
    &__times {
        font-size: 1.4rem;
    }
}
@media screen and (max-width: 767px) {
    .news-items__list {
        display: flex;
        flex-direction: column;
    }
    .news-items__img {
        width: 100%;
    }
}
`;

const NewItems = () => {
    return (
        <StyleNewItems>
            <div className="news-items__list">
                <img src="/news.png" alt="" className='news-items__img'/>
                <div className="news-items__content">
                    <p className="news-items__title">
                    Top 20 kiểu tóc mái bay nữ Hàn Quốc xinh nhất được ưa chuộng 2023
                    </p>
                    <p className="news-items__text"> Tóc dày nên để kiểu gì đẹp? Cùng Chiaki điểm danh ngay 3...</p>
                    <div className="news-items__actions">
                    <i class="fa-solid fa-clock news-items__icons"></i>
                    <span className="news-items__times">21/02/2023</span>
                    </div>
                </div>
            </div>
        </StyleNewItems>
    );
};

export default NewItems;