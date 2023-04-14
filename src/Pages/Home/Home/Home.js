import React from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import ContactSection from '../../ContactSection/ContactSection';
import AdvertisementSection from '../AdvertisementSection/AdvertisementSection';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Categories from '../Categories/Categories';
import AboutUs from '../../AboutUs/AboutUs';
import OurTeam from '../OurTeam/OurTeam';
import Newsletter from '../Newsletter/Newsletter';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <CarouselSlider></CarouselSlider>
            <AboutUs></AboutUs>
            <Categories></Categories>
            <AdvertisementSection></AdvertisementSection>
            <OurTeam></OurTeam>
            <ShowReview></ShowReview>
            <Newsletter></Newsletter>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;