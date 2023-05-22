import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { GiRecycle } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "./Context";
import React, { useContext } from "react";






const Navbar = () => {
  
  const useCart = useContext(CartContext);
  const {cartData} = useCart;
  // console.log(a.state.length, 'isha')

  return (
    <nav>
        {/* logo */}
<div className='m-auto w-[94%] max-w-[100rem] py-8 text-sm flex gap-6'>
      <img src='/images/logo.png' width={190} alt='logo' className='mr-10 cursor-pointer max-lg:w-[18%] max-lg:ml-[3%] max-sm:w-[20%]'/>

      {/* Search Box */}
      <div className='w-[44%] flex bg-white p-3 h-12 border-2 border-[#3BB77E] gap-2 rounded-md mt-1 max-lg:w-[30%] max-lg:ml-[18%] max-md:w-[60%] max-md:hidden'>
        <div className='flex border-r border-[#ececec] font-bold w-[20%] cursor-pointer max-lg:w-[35%] max-md:w-[60%] max-lg:hidden'>All Categories <IoIosArrowDown className='ml-2 m-1'/></div>
        <input className='w-[76%] focus:outline-none'placeholder='Search for items...'/><HiOutlineSearch className=' text-2xl text-[#5e5e5e] cursor-pointer'/>
      </div>


{/* Location */}
      <div className='flex bg-white border-1 boder-[#ececec] py-2 h-9 px-2 rounded-md mt-2 ml-4 drop-shadow-lg cursor-pointer text-[#3BB77E] max-lg:hidden'><CiLocationOn className='text-[17.7px] mr-2 text-[#5e5e5e]'/>Your Location<IoIosArrowDown className='m-1 ml-2 text-[#5e5e5e]'/></div>


{/* Menu */}


      <div className='flex py-3 text-base mt-1 font-medium cursor-pointer max-lg:hidden hover:text-green-700'><GiRecycle className='text-2xl mr-1 -mt-1 ml-2'/>Compare</div>
      <div className='flex py-3 text-base mt-1 font-medium cursor-pointer max-lg:hidden hover:text-green-700'><BsHeart className='text-2xl mr-1 -mt-1'/>Wishlist</div>




      <Link to="/cart"> <div className="absolute right-[14.1%] max-lg:right-[16.9%] text-white bg-green-700 rounded-full w-5 text-center">{cartData.length}</div><RiShoppingCart2Line className='text-2xl mr-1 -mt-1 hidden max-md:block absolute max-md:right-[13%] max-md:top-[9.5%] max-md:text-3xl' /><div className='flex py-3 font-medium text-base mt-1 cursor-pointer hover:text-green-700 max-md:hidden'><RiShoppingCart2Line className='flex text-2xl mr-1 -mt-1'/>Cart</div></Link>




      
      <div className='flex py-3 text-base mt-1 font-medium cursor-pointer max-lg:hidden hover:text-green-700'><MdOutlinePersonOutline className='text-3xl mr-1 -mt-2'/>Account</div>
    </div><hr />
    <Outlet />
    </nav>
  );
};

export default Navbar;

// const [isContentAdded, setIsContentAdded] = useState(false);
  
// const AddClick = () => {
//  setIsContentAdded(true);
// };

// const DeleteClick = () => {
//  setIsContentAdded(!isContentAdded);
// };
  


// {!isContentAdded ?  <div onClick={AddClick} className="cursor-pointer hover:bg-yellow-500  mr-5 px-3 mb-3 bg-green-700 rounded-md text-white text-[15px] flex gap-x-2 py-1"><AiOutlineShoppingCart className="text-xl"/>Add</div> :  <div onClick={DeleteClick} className="cursor-pointer hover:bg-yellow-500  mr-5 px-3 mb-3 bg-red-700 rounded-md text-white text-[15px] flex gap-x-2 py-1"><RiDeleteBin6Line className="text-xl"/>Remove</div>}
