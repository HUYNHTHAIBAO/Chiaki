import React from 'react';
import News from '../../module/post/News';
import SuggestProduct from '../../module/post/SuggestProduct';
import TrendProduct from '../../module/post/TrendProduct';

const Main = () => {
    return (
        <div>
            <TrendProduct></TrendProduct>
            <SuggestProduct></SuggestProduct>
            <News></News>
        </div>
    );
};

export default Main;