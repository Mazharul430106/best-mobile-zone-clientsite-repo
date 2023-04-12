import React from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import ContactSection from '../../ContactSection/ContactSection';
import AdvertisementSection from '../AdvertisementSection/AdvertisementSection';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Categories from '../Categories/Categories';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <CarouselSlider></CarouselSlider>
            <AboutUs></AboutUs>
            <Categories></Categories>
            <AdvertisementSection></AdvertisementSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;