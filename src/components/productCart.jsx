import { useState } from "react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCart = ({data, addProductOnCart, dltProductCart}) => {
  const [cartId, setCartId] = useState(0);



  return (
    <div className='border-[2px] flex flex-col justify-between hover:border-[#2eb576] shadow-md hover:shadow-2xl rounded-2xl pl-[6%] pb-[4%]'>
      <div className='imageDiv'>
        <img
          className='item-center pt-5 pb-5 pl-10'
          width={200}
          height={200}
          src={data.image}
          alt=''
        />
      </div>
      <div>
        <h6 className='text-[12px] text-[#676767] cursor-pointer font-semibold'>
          {data.category}
        </h6>
        <h1 className='cursor-pointer w-[90%] text-[16px] font-bold hover:text-[#2eb576]'>
          {data.title}
        </h1>
        <h4 className='text-[14px] cursor-pointer text-[#2eb576] font-semibold pt-[5px] pb-[8px]'>
          By Brand
        </h4>
        <span className='text-[#2eb576] font-bold cursor-pointer text-[20px]'>
          {data.price}
        </span>
        <div className='flex justify-between'>
          <h5 className='line-through cursor-pointer font-bold text-[15px] text-[#676767]'>
            $55.8
          </h5>

          {
            <div  onClick={() => {
              setCartId(cartId === 0 ? data.id : 0);
            }}>
              {data.id !== cartId ? (
                <div
                  className='cursor-pointer hover:bg-yellow-500  mr-5 px-3 mb-3 bg-green-700 rounded-md text-white text-[15px] flex gap-x-2 py-1'
                 onClick={() => {addProductOnCart(data.id)}}
                >
                  <AiOutlineShoppingCart className='text-xl' />
                  Add
                </div>
              ) : (
                <div className='cursor-pointer hover:bg-yellow-500  mr-5 px-3 mb-3 bg-red-700 rounded-md text-white text-[15px] flex gap-x-2 py-1' onClick={() => {dltProductCart(data.id)}}>
                  <RiDeleteBin6Line className='text-xl' />
                  Remove
                </div>
              )}  
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default (ProductCart);
