import React, { useEffect, useState } from 'react';
import DisplayShowReview from './DisplayShowReview';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ShowReview = () => {

    const [reviews, setReviews] = useState([]);
    // console.log(reviews)
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='px-[7%] pb-[80px]'>
            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold'>What Our Coustomar Says</h1>
            </div>

            <Slider {...settings}>
                {
                    reviews.map(singleReview => <DisplayShowReview key={singleReview._id} singleReview={singleReview}></DisplayShowReview>)
                }
            </Slider>

        </div>
    );
};

export default ShowReview;