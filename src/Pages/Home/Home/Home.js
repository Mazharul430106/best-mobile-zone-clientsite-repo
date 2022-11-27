import React from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import ContactSection from '../../ContactSection/ContactSection';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <CarouselSlider></CarouselSlider>
            <Categories></Categories>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;