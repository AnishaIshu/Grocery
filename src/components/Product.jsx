import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import React from 'react';


const Product = () => {
  return (

    <section className='w-[96%] m-auto max-w-[100rem] my-9 flex gap-7 flex-wrap justify-center'>


      <div className="relative w-[510px]">
        <img
          className=' rounded-xl'
          src='images/banner/banner-1.png'
          alt=''
        />
        <h1 className="absolute top-0 text-[25px] w-[60%] pt-[13%] pl-[10%] font-bold text-[#1c4e21] cursor-pointer hover:-translate-y-2 duration-500 max-lg:text-[18px] max-lg:pl-[5%] max-lg:pt-[10%]">Everyday Fresh & Clean with Our Products</h1>
        <button className='absolute bottom-14 left-[10%] flex items-center bg-[#2eb576] text-white text-[13px] hover:bg-[#127c4a] font-semibold px-2 rounded-md py-1 max-lg:bottom-4  max-lg:py-[0.5%] max-lg:px-[0.5%] max-lg:pl-[10px] max-lg:left-4'>Shop now <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
      </div>

      
      <div className="relative w-[510px]">
        <img
          className=' rounded-xl'
          src='images/banner/banner-2.png'
          alt=''
          />
        <h1 className="absolute top-0 text-[25px] w-[60%] pt-[13%] pl-[10%] font-bold text-[#1c4e21] cursor-pointer hover:-translate-y-2 duration-500 max-lg:text-[18px] max-lg:pl-[5%] max-lg:pt-[10%]">Make your Breakfast Healthy and Easy</h1>
        <button className='absolute bottom-14 left-[10%] flex items-center bg-[#2eb576] text-white text-[13px] hover:bg-[#127c4a] font-semibold px-2 rounded-md py-1 max-lg:bottom-4  max-lg:py-[0.5%] max-lg:px-[0.5%] max-lg:pl-[10px] max-lg:left-4'>Shop now <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
      </div>


      <div className="relative w-[510px]">
        <img
          className=' rounded-xl'
          src='images/banner/banner-3.png'
          alt=''
          />
        <h1 className="absolute top-0 text-[25px] w-[60%] pt-[13%] pl-[10%] font-bold text-[#1c4e21] cursor-pointer hover:-translate-y-2 duration-500 max-lg:text-[18px] max-lg:pl-[5%] max-lg:pt-[10%]">The best Organic Products Online</h1>
        <button className='absolute bottom-14 left-[10%] flex items-center bg-[#2eb576] text-white text-[13px] hover:bg-[#127c4a] font-semibold px-2 rounded-md py-1 max-lg:bottom-4  max-lg:py-[0.5%] max-lg:px-[0.5%] max-lg:pl-[10px] max-lg:left-4'>Shop now <MdOutlineKeyboardArrowRight className='text-2xl'/></button>
      </div>
          </section>
  );
};

export default Product;
