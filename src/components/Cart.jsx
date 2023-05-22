import React, { useContext } from "react";
import NavTxt from './NavTxt';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from "react";
// import axios from "axios";
import { CartContext } from "./Context";


const Cart = () => {
  

const useCart = useContext(CartContext);
const {cartData} = useCart;


    return (
      <>
      <NavTxt />
       <div className="w-[96%] max-w-[100rem] m-auto"> 
           <h1 className="text-[38px] font-bold text-green-900 mt-[4%] mb-[2%]">
            Check Your Product!!!
           </h1>
           
           <div>
         <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[2.5%]">
          {cartData.map((product) => {
            return(
              <div  
              className='border-[2px] flex flex-col justify-between hover:border-[#2eb576] shadow-md hover:shadow-2xl rounded-2xl pl-[6%] pb-[4%]'>
             <div className="imageDiv">
         <img className="item-center pt-5 pb-5 pl-10" width={200} height={200} src={ product.image } alt="" />
         
        </div>
        <div>

              <h6 className='text-[12px] text-[#676767] cursor-pointer font-semibold'>
                {product.category}
              </h6>
              <h1 className='cursor-pointer w-[90%] text-[16px] font-bold hover:text-[#2eb576]'>
                {product.title}
              </h1>
              <h4 className='text-[14px] cursor-pointer text-[#2eb576] font-semibold pt-[5px] pb-[8px]'>
                By Brand
              </h4>
              <span className='text-[#2eb576] font-bold cursor-pointer text-[20px]'>
                {product.price}
              </span>
              <div className="flex justify-between">
              <h5 className='line-through cursor-pointer font-bold text-[15px] text-[#676767]'>
                $55.8
              </h5>
              <div className="border-green-700 bg-green-200 text-green-900 hover:font-medium hover:bg-green-700 hover:-translate-y-2 duration-500 hover:text-white cursor-pointer w-[25%] mb-5 rounded-md text-center ml-8 font-semibold flex items-center gap-1" ><AiOutlineShoppingCart className="text-[23px] pl-1"/>Add</div>
              <div className="border-green-700 bg-red-200 text-green-900 hover:font-medium hover:bg-red-600 hover:-translate-y-2 duration-500 hover:text-white cursor-pointer w-[25%] mb-5 rounded-md text-center mr-5 font-semibold flex items-center gap-1" ><RiDeleteBin6Line className="text-[28px] pl-3"/>Dlt</div>
              </div>
              </div>
            </div> 
            )
          })}
         </div>
         </div>
           </div>
      </>
    )
  }
  
  export default Cart;