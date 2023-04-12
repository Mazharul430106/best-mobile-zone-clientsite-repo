import React from 'react';

const AboutUs = () => {
    return (
        <div className='px-[7%]'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold py-10'>About Us</h1>
            </div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className=''>
                    <img className='rounded xl:max-h-[500px] lg:max-h-[500px] w-full' src="//cdn.shopify.com/s/files/1/0104/6917/9492/files/abo-01.jpg?v=1621512177" alt="" />
                </div>
                <div className=''>
                    <div>
                        <h1 className='text-2xl font-bold uppercase'>What we do  ?</h1>
                        <p>Best Mobile Zone gives you a chance to quickly and easily find the device you want and have it delivered to your home in no time, regardless of your location, as long as it is in one of the countries of the EU.</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='text-2xl font-bold'>WHY DO CUSTOMERS LOVE US?</h1>
                        <p>We have been in the business for quite a while now, and in that time we have not only managed to make close relationships with numerous partners, but also to recognize what people need. At MobileShop you will find quality products from top brands at consistently low prices. We are offering a wide range of smartphones and tablets, notebooks and computer equipment, headsets and smartwatches, small household appliances and other electronics. Intelligent filter options and complete product information help customers to find exactly the products that suit them.</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>BEGINNING</h2>
                        <p>Best Mobile Zone website was launched in 2011, but its story actually began some 8 years before that when a group of college friends decided to go into business together. We started selling phones in shops, but our combined ambition, drive and abilities soon made us look for new challenges and new markets. Starting an online shop provided for both and allowed us to develop a strong international presence in a number of EU countries.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;