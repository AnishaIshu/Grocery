
import { TiArrowRight } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
// import Slider from "react-slick";
import React from "react";
import { styled } from "styled-components";

const bestSellData = [
  {
    img1: "images/Product/product-1-2.jpg",
    img2: "images/Product/product-1-1.jpg",
    h6: "Snack",
    h1: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    h4: "By NestFood",
    span: "$28.85",
    h5: "$32.8",
    color: '#0c7c48',
  },
  {
    img1: "images/Product/product-2-2.jpg",
    img2: "images/Product/product-2-1.jpg",
    h6: "Hodo Foods ",
    h1: "All Natural Italian-Style Chicken Meatballs",
    h4: "By Stouffer",
    span: "$52.85",
    h5: "$55.8",
    color: '#ffc107',
  },
  {
    img1: "images/Product/product-3-2.jpg",
    img2: "images/Product/product-3-1.jpg",
    h6: "Snack",
    h1: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    h4: "By StarKist",
    span: "$48.85",
    h5: "$52.8",
    color: '#f74b81',
  },
  {
    img1: "images/Product/product-4-2.jpg",
    img2: "images/Product/product-4-1.jpg",
    h6: "Vegetables",
    h1: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    h4: "By NestFood",
    span: "$17.85",
    h5: "$19.8",
    color: '#67bcee',
  },

]

const ImageDiv = styled.div`

&:hover .imageDiv {
  transform: rotateY(180deg);
}

.imageDiv{
  position: relative;
height: 250px;
transform-style: preserve-3d;
transition: all 0.1s ease;
margin-top: 8px;

.frontimage{
  position: absolute;
  top: 0;
  backface-visibility: hidden;
}

.backimage{
  position: absolute;
  top: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}
}

`;

const BestSell = () => {

 
  return (
    <section className="hidden">
      <div className='flex justify-between items-center ml-[8.3%] mr-[8.5%] mb-[1%]'>
        <div>
          <h1 className='text-[35px] font-bold text-[#113715]'>
          Daily Best Sells
          </h1>
        </div>

        <div>
          <ul className='flex space-x-8 font-medium'>
            <li className='text-[#2eb576] cursor-pointer font-semibold hover:-translate-y-1 duration-300'>
              Featured
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer font-semibold hover:-translate-y-1 duration-300'>
              Popular
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer font-semibold hover:-translate-y-1 duration-300'>
              New added
            </li>
          </ul>
        </div>
      </div>

      <div className='ml-[8%] mb-[5%] relative flex'>
        <img className='w-[22%] rounded-2xl' src='images/banner-4.png' alt='' />
        <h1 className='absolute top-14 left-14 text-[43px] font-bold w-[15%] text-[#113715] leading-[48px]'>
          Bring nature into your home
        </h1>
        <div className='bg-[#2eb576] w-[6%] text-center text-white text-[13px] pl-[13px] py-[6.3px] font-semibold rounded-md absolute top-[58%] left-[3%] flex items-center gap-1'>
          Shop Now <TiArrowRight className='text-[20px]' />
        </div>




        
        {bestSellData.map((Item) => {
  return (

      <ImageDiv className="border-[2px] w-[16%] hover:shadow-2xl ml-5 max-lg:ml-2 rounded-2xl hover:border-[#2eb576]" 
      >

        <div className="bg-green-800 text-white text-[12px] w-[28%] text-center py-2 rounded-tl-xl rounded-br-xl" style={{background:Item.color}}>Save 35% </div>
        <div className="imageDiv">
         <img className="frontimage w-[92%] pt-[5%]" src={ Item.img2 } alt="" />
         <img className="backimage w-[92%] pt-[5%]" src={ Item.img1 } alt="" />
        </div>
         <h6 className='text-[12px] text-[#c2c2c2 ] cursor-pointer font-bold pl-[8%] pt-[10%]'>{Item.h6}
              </h6>
              <h1 className='cursor-pointer w-[95%] text-[16px] font-bold pl-[8%] hover:text-[#2eb576]'>
                {Item.h1}
              </h1>
              <h4 className='text-[14px] cursor-pointer text-[#2eb576] pl-[8%] font-semibold pt-[5px] pb-[6px]'>
                {Item.h4}
              </h4>
              <h5 className='text-[#2eb576] font-bold cursor-pointer text-[20px] pl-[8%]'>
                 {Item.h5}<span className="line-through text-[14px] text-[#999999]"> $245.8</span>
              </h5>

              <div className="h-[5px] mt-[2%] bg-[#246440] relative ml-[10%] mr-[10%] rounded-xl">
                <div className="absolute top-0 right-0 w-[38%] bg-slate-300 h-[5px] rounded-xl"></div>
                <h6 className="text-[12px] py-2 font-medium"> Sold: 90/120</h6>
              </div>

              <div className="flex items-center text-[17px] rounded-md gap-[3%] pl-[16%] font-medium bg-[#0c7c48] text-white m-6 mt-[10%] hover:bg-[#e9b721] cursor-pointer py-[5px]"> <MdOutlineShoppingCart className="text-[25px]"/>Add to Cart</div>
            
      </ImageDiv>
  );   
    })}
      </div>
    </section>
  );
};

export default BestSell;
