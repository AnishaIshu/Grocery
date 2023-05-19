import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GiRecycle } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
        {/* logo */}
<div className='m-auto w-[94%] max-w-[100rem] py-8 text-sm flex gap-6'>
      <img src='/images/logo.png' width={190} alt='logo' className='mr-10 cursor-pointer max-lg:w-[18%] max-lg:ml-[3%] max-sm:w-[20%]'/>

      {/* Search Box */}
      <div className='w-[44%] flex bg-white p-3 h-12 border-2 border-[#3BB77E] gap-2 rounded-md mt-1 max-lg:w-[50%] max-lg:ml-[18%] max-md:w-[60%] max-md:hidden'>
        <div className='flex border-r border-[#ececec] pr-2 font-bold w-[20%] cursor-pointer max-lg:w-[35%] max-md:w-[60%] max-sm:hidden'>All Categories <IoIosArrowDown className='ml-2 m-1'/></div>
        <input className='w-[76%] focus:outline-none'placeholder='Search for items...'/><HiOutlineSearch className=' text-2xl text-[#5e5e5e] cursor-pointer'/>
      </div>


{/* Location */}
      <div className='flex bg-white border-1 boder-[#ececec] py-2 h-9 px-2 rounded-md mt-2 ml-4 drop-shadow-lg cursor-pointer text-[#3BB77E] max-lg:hidden'><CiLocationOn className='text-[17.7px] mr-2 text-[#5e5e5e]'/>Your Location<IoIosArrowDown className='m-1 ml-2 text-[#5e5e5e]'/></div>


{/* Menu */}


      <div className='flex py-3 text-base mt-1 cursor-pointer max-lg:hidden'><GiRecycle className='text-2xl mr-1 -mt-1 ml-2'/>Compare</div>
      <div className='flex py-3 text-base mt-1 cursor-pointer max-lg:hidden'><BsHeart className='text-2xl mr-1 -mt-1'/>Wishlist</div>
      <div className='flex py-3 text-base mt-1 cursor-pointer max-lg:hidden'><RiShoppingCart2Line className='text-2xl mr-1 -mt-1'/>Cart</div>
      <div className='flex py-3 text-base mt-1 cursor-pointer max-lg:hidden'><MdOutlinePersonOutline className='text-3xl mr-1 -mt-2'/>Account</div>
    </div><hr />
    </nav>
  );
};

export default Navbar;
