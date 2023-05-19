import { AiOutlineAppstore } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
// import { BsFire } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const HoverDiv = styled.div`
  ul {
    display: none;
  }

  &:hover ul {
    display: block;
  }
`;

const NavTxt = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <section>
      <div className='pl-[8%] pt-[0.7%] realtive flex justify-between items-center pr-[8%] border-b-[1px] pb-[0.7%]'>
        <div className='font-bold justify-center space-x-2 rounded-md cursor-pointer hover:bg-[#36a772] bg-[#2eb576] flex items-center w-[16%] text-white py-2 max-lg:h-8 text-[15px] max-lg:w-[23%] max-lg:px-1 max-lg:text-[15px] max-lg:font-semibold max-md:hidden'>
          <AiOutlineAppstore className='text-3xl pr-[3%] max-lg:text-2xl' />{" "}
          <span className='pr-1 max-lg:hidden'> Browse All </span> Categories{" "}
          <IoIosArrowDown className='max-lg:text-[16px]' />
        </div>

        {/* Menu */}

        <div
          className='block md:hidden hover:bg-slate-100 bg-white w-16 rounded-2xl'
          onClick={handleClick}
        >
          <HiMenuAlt2 className='text-[30px] absolute right-10 top-[13.5%] m-auto max-md:top-[9%] max-sm:top-[8%] max-sm:text-[25px]' />
        </div>

        <div
          className={`max-lg:absolute max-lg:right-24 max-lg:top-[22.5%] max-md:top-[18%] max-md:right-[2%] max-md:z-10 max-md:transition-all max-md:duration-300 max-md:ease-in max-md:w-0 max-md:bg-slate-200 max-md:overflow-hidden max-md:h-[50%] ${
            showNav && "max-md:w-[32%] max-sm:w-[40%] max-lg:z-10"
          }`}
        >
          <ul className='flex text-[15px] space-x-10 pt-5 font-[700] max-lg:ml-[5%] max-lg:space-x-6 max-md:flex-col max-md:space-x-0 max-md:space-y-4 max-md:text-center'>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-1 hover:border-b-green-700'>
              Deals
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-2 hover:border-b-green-700'>
              Home
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-2 hover:border-b-green-700'>
              About
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 marker:hover:border-b-2 hover:border-b-green-700'>
              Shop
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-2 hover:border-b-green-700'>
              Vendors
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-2 hover:border-b-green-700'>
              Blog
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-2 hover:border-b-green-700'>
              Pages
            </li>
            <li className='pb-2 border-[#FFF9F3] border-b-2 cursor-pointer hover:text-green-700 hover:border-b-2 hover:border-b-green-700'>
              Contact
            </li>
          </ul>
        </div>

        {/* Call */}

        <div className='flex gap-[0.5%] items-center max-lg:hidden'>
          <div>
            <MdHeadsetMic className='text-5xl' />
          </div>
          <div>
            <h1 className='text-[35px] font-bold text-[#2eb576] leading-7 w-40'>
              1900-888
            </h1>
            <h6 className='text-[13px] font-medium pl-2'>
              24/7 Support Center
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavTxt;
