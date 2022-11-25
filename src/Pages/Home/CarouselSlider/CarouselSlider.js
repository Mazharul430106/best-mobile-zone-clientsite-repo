import React from 'react';

const CarouselSlider = () => {
    return (
            <div className="carousel w-full" style={{maxHeight:'650px'}}>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.kaspersky.com/content/en-global/images/repository/isc/2022/how-to-stop-phone-hacking-1.jpg" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/What-Are-the-Newest-Android-Phones-Out-Right-Now1.jpg?fit=1920%2C1080&ssl=1" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://cdn.mos.cms.futurecdn.net/q5UfaGNrEwWgTWH2iUdKMU.jpg" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.mcafee.com/blogs/wp-content/uploads/2022/07/614x300_Blog_170722.png" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        
    )
};

export default CarouselSlider;

