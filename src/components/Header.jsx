import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React from 'react';

const Header = () => {
  return (
    <header className="m-auto text-[13px]">
      <div className='flex justify-between pl-[8%] max-md:hidden'>
        <div>
          <ul className='flex space-x-3 text-[#5e5e5e] py-2  max-md:hidden font-medium'>
            <li className=' border-r-2 pr-3 cursor-pointer hover:text-black'>About Us</li>
            <li className=' border-r-2 pr-3 cursor-pointer hover:text-black'>My Account</li>
            <li className=' border-r-2 pr-3 cursor-pointer hover:text-black'>Wishlist</li>
            <li className=' border-r-2 pr-3 cursor-pointer hover:text-black'>Order Tracking</li>
          </ul>
        </div>

        <div className="flex py-2 max-lg:hidden">
          <h3 className='text-[#5e5e5e] cursor-pointer hover:text-black font-medium'>
            Supper Value Deals - Save more with coupons
          </h3>
        </div>

        <div className="flex pr-[8%] py-2  max-md:hidden font-medium">
          <ul className="flex space-x-2 text-[#5e5e5e]">
            <li className=" border-r-2 pr-3 cursor-pointer hover:text-black">Need help? Call Us: <strong className="text-[#3BB77E]">+ 1800 900</strong></li>
            <li className="flex border-r-2 pr-3 cursor-pointer hover:text-black items-center">
              English <MdOutlineKeyboardArrowDown className=" text-base" />
            </li>
            <li className="flex pr-3 cursor-pointer hover:text-black items-center">
              USD <MdOutlineKeyboardArrowDown className=" text-base" />
            </li>
          </ul>
        </div>
      </div><hr />
        <div className="bg-[#3BB77E] py-2 text-[13px] text-center space-x-5 hidden max-md:block">
             <h1 className="text-[#fff]">Grand opening, <strong> up to 15% </strong> off all items. Only <strong> 3 Days </strong> left</h1>
        </div>
    </header>
  );
};

export default Header;
