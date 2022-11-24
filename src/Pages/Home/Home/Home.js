import React from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <CarouselSlider></CarouselSlider>
            <Categories></Categories>
        </div>
    );
};

export default Home;