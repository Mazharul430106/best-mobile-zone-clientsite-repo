import React from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import CarouselSlider from '../CarouselSlider/CarouselSlider';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <CarouselSlider></CarouselSlider>
        </div>
    );
};

export default Home;