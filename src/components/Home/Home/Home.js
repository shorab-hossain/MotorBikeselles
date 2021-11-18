import React from 'react';
import News from '../../News/News';
import Products from '../../Products/Products';
import Review from '../../Reviews/Review';
import Bannar from '../Bannar/Bannar ';

const Home = () => {
    return (
        <div>
           <Bannar/>
           <Products/>
           <Review/>
           <News/>
        </div>
    );
};

export default Home;