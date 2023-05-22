import { IoIosPaperPlane } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

const Hero = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay:true
  };







  return (

    <section className="w-[96%] m-auto max-w-[100rem] max-sm:hidden">

       <Slider {...settings}>
      <div className='pt-[2%] pr-[2%] pl-[2%] relative'>
        <div>
        <img src='images/slider-1.png' alt='img1' className='rounded-3xl' />
        </div>
        <h1 className='absolute top-28 text-[70px] font-semibold pl-[5%] text-[#253D4E] max-lg:text-[34px] max-lg:top-14 max-md:text-[25px]'>
          Don't miss amazing
        </h1>
        <h1 className='absolute top-48 text-[70px] font-semibold pl-[5%] text-[#253D4E] max-lg:text-[34px] max-lg:top-[30%] max-md:text-[25px] max-md:top-[35%]'>
          grocery deals
        </h1>
        <p className='absolute top-80 text-[30px] font-medium pl-[5%] text-[#7E7E7E] max-lg:text-[20px] max-lg:top-[47%] max-md:text-[18px] max-md:top-[55%]'>
          Sign up for the daily newsletter{" "}
        </p>



        <div className='flex items-center bg-white absolute top-96 ml-[5%] rounded-full pl-4 mt-10 max-lg:top-[63%]  max-md:top-[58%]'>
          <IoIosPaperPlane className="text-2xl text-[#414040] max-lg:text-xl max-md:text-[20px]"/>
          <input
            type='email'
            className='p-2 focus:outline-none ml-3 text-[18px] max-lg:text-[14px] max-md:px-[1px]'
            placeholder='Your email address'
          />
          <h5 className='bg-[#2eb576] text-white py-5 rounded-full px-10 font-medium cursor-pointer max-lg:py-[2.7%] max-lg:text-[14px] max-md:text-[13px] max-md:px-[15px] max-md:py-[9px]'>Subscribe</h5>
        </div>
      </div>


      <div className='pt-[2%] pr-[2%] pl-[2%] relative'>
        <div>
        <img src='images/slider-2.png' alt='img1' className='rounded-3xl' />
        </div>
        <h1 className='absolute top-28 text-[70px] font-semibold pl-[5%] text-[#253D4E] max-lg:text-[34px] max-lg:top-14 max-md:text-[25px]'>
          Fresh Vegetables
        </h1>
        <h1 className='absolute top-48 text-[70px] font-semibold pl-[5%] text-[#253D4E] max-lg:text-[34px] max-lg:top-[30%] max-md:text-[25px] max-md:top-[35%]'>
          Big discount
        </h1>
        <p className='absolute top-80 text-[28px] font-medium pl-[5%] text-[#7E7E7E] max-lg:text-[20px] max-lg:top-[47%] max-md:text-[16px] max-md:top-[53%]'>
        Save up to 50% off on your first order{" "}
        </p>



        <div className='flex items-center bg-white absolute top-96 ml-[5%] rounded-full pl-4 mt-9 max-lg:top-[63%]  max-md:top-[58%]'>
          <IoIosPaperPlane className="text-2xl text-[#414040] max-lg:text-xl max-md:text-[20px]"/>
          <input
            type='email'
            className='p-2 focus:outline-none ml-3 text-[18px] max-lg:text-[15px] max-md:px-[1px]'
            placeholder='Your email address'
            />
          <h5 className='bg-[#2eb576] text-white py-5 rounded-full px-10 font-medium cursor-pointer max-lg:py-[2.7%] max-lg:text-[14px] max-md:text-[13px] max-md:px-[15px] max-md:py-[10px]'>Subscribe</h5>
        </div>
      </div>
    </Slider>
            </section>
  );
};

export default Hero;
