import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import { BiPaperPlane } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <section className='w-[94%] max-w-[100rem] m-auto mt-[5%] mb-[2%]'>
      <div className='flex gap-10 justify-center flex-wrap'>
        {/* ******************* */}
        <div className="w-[300px] max-sm:w-[200px]">
          <ul className="">
            <li className='mt-[3%]'>
              <img src='images/logo.png' alt='' />
            </li>
            <li className='hover:-translate-y-1 duration-700 hover:text-green-700  mt-[3%] text-[17px] font-medium cursor-pointer max-lg:w-[90%] max-lg:mt-[2%] max-lg:text-[15px]'>
              Awesome grocery store website template
            </li>
            <li className='mt-[10%] text-[13px] cursor-pointer flex items-center gap-[2%] max-lg:mt-[8%]'>
              <HiOutlineLocationMarker className='text-green-500' />{" "}
              <strong>Address: </strong>Campbell, USA
            </li>
            <li className=' mt-[5%] w-[120%] text-[13px] cursor-pointer flex items-center gap-[2%]'>
              <FiHeadphones className='text-green-500' />
              <strong> Call Us:</strong>(+91) - 540-025-124553
            </li>
            <li className=' mt-[5%] text-[13px] cursor-pointer flex items-center gap-[2%]'>
              <BiPaperPlane className='text-green-500' />
              <strong>Email:</strong> sale@Nest.com
            </li>
            <li className=' mt-[5%] text-[13px] cursor-pointer flex items-center gap-[2%]'>
              <GiAlarmClock className='text-green-500' />
              <strong> Hours:</strong>10:00 - 18:00, Mon - Sat
            </li>
          </ul>
        </div>

        {/* ******************* */}

        <div className='w-[200px]'>
          <ul>
            <li className='text-[30px] font-bold text-green-900 cursor-pointer hover:text-green-700'>
              Company
            </li>
            <li className='mb-[5%] font-medium mt-[10%] text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              About Us
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Delivery Information
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Privacy Policy
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Terms & Conditions
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Contact Us
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Support Center
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Careers
            </li>
          </ul>
        </div>

        {/* ******************* */}

        <div className='w-[200px]'>
          <ul>
            <li className='text-[30px] font-bold text-green-900 cursor-pointer hover:text-green-700'>
              Account
            </li>
            <li className='mb-[5%] font-medium mt-[10%] text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Sign In
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              View Cart
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              My Wishlist
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Track My Order
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Help Ticket
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Shipping Details
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Compare products
            </li>
          </ul>
        </div>

        {/* ******************* */}

        <div className='w-[200px]'>
          <ul>
            <li className='text-[30px] font-bold text-green-900 cursor-pointer hover:text-green-700'>
              Corporate
            </li>
            <li className='mb-[5%] font-medium mt-[10%] text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Become a Vendor
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Affiliate Program
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Farm Business
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Farm Careers
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Our Suppliers
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Accessibility
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Promotions
            </li>
          </ul>
        </div>

        {/* ******************* */}

        <div className='w-[200px]'>
          <ul>
            <li className='text-[30px] font-bold text-green-900 cursor-pointer hover:text-green-700'>
              Popular
            </li>
            <li className='mb-[5%] font-medium mt-[10%] text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Milk & Flavoured Milk
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Butter and Margarine
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Eggs Substitutes
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Marmalades
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Sour Cream and Dips
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Tea & Kombucha
            </li>
            <li className='mb-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600'>
              Cheese
            </li>
          </ul>
        </div>

        {/* ******************* */}

        <div className="w-[300px] max-sm:w-[200px]"> 
          <ul>
            <li className='text-[30px] font-bold text-green-900 cursor-pointer hover:text-green-700'>
              Install App
            </li>
            <li className='mt-[5%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600 max-lg:mt-[2%]'>
              From App Store or Google Play
            </li>
            <li className=''>
              <div className='flex gap-[2%] mt-[5%] max-lg:mt-[2%]'>
                <img
                  className='w-[40%] max-lg:w-[25%]'
                  src='images/Footer/app-store.jpg'
                  alt=''
                />
                <img
                  className='w-[40%] max-lg:w-[25%]'
                  src='images/Footer/google-play.jpg'
                  alt=''
                />
              </div>
            </li>
            <li className='mt-[10%] font-medium  text-[15px] cursor-pointer hover:translate-x-3 duration-700 hover:text-green-600 max-lg:mt-[2%]'>
              Secured Payment Gateways
            </li>
            <li>
              <img
                className='mt-[3%]  max-lg:mb-[5%]'
                src='images/Footer/payment-method.png'
                alt=''
              />
            </li>
          </ul>
        </div>
      </div>




      <hr className='text-green-200 mt-[3%]' />

      <div className='flex justify-center gap-x-28 mt-[1%] flex-wrap max-lg:gap-x-14 max-sm:mt-[7%]'>
        <div>
          <h6 className='text-[14px] font-semibold text-gray-500'>
            © 2022, Nest - HTML Ecommerce Template
          </h6>
          <p className='text-[14px] font-semibold text-gray-500 max-lg:mb-[3%]'>All rights reserved</p>
        </div>

        <div className="flex items-center w-[13%] justify-center max-lg:w-[28%] max-sm:w-[90%] max-sm:mt-[7%] max-lg:mb-[3%]">
          <div>
            <FiPhoneCall className="text-[30px]"/>
          </div>
          <div className="pl-[5%]">
            <h1 className="text-[20px] font-bold text-green-600">1900 - 6666</h1> 
            <p className="text-[15px] font-medium text-gray-500">Working 8:00-22:00</p>
            </div>
        </div>

        <div className="flex items-center w-[13%] justify-center max-sm:w-[90%] max-sm:mt-[7%] max-lg:w-[28%] max-lg:mb-[3%]">
          <div>
            <FiPhoneCall className="text-[30px]"/>
          </div>
          <div className="pl-[5%]">
            <h1 className="text-[20px] font-bold text-green-600">1900 - 8888</h1> 
            <p className="text-[15px] font-medium text-gray-500">24/7 Support Center</p>
            </div>
        </div>

        <div>
          <div className='flex gap-[2%] items-center text-[17px] font-semibold max-sm:mt-[7%]'>
            Follow Us
            <div className='rounded-full bg-green-600 w-[11%] p-2 cursor-pointer hover:-translate-y-1 duration-500'>
              <GrFacebookOption className='text-white' />
            </div>
            <div className='rounded-full bg-green-600 w-[11%] p-2 cursor-pointer hover:-translate-y-1 duration-500'>
              <TiSocialTwitter className='text-white' />
            </div>
            <div className='rounded-full bg-green-600 w-[11%] p-2 cursor-pointer hover:-translate-y-1 duration-500'>
              <RiInstagramLine className='text-white' />
            </div>
            <div className='rounded-full bg-green-600 w-[11%] p-2 cursor-pointer hover:-translate-y-1 duration-500'>
              <FaPinterestP className='text-white' />
            </div>
            <div className='rounded-full bg-green-600 w-[11%] p-2 cursor-pointer hover:-translate-y-1 duration-500'>
              <AiFillYoutube className='text-white' />
            </div>
          </div>
          <div className='font-semibold text-[15px] text-gray-500'>
            Up to 15% discount on your first subscribe
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
