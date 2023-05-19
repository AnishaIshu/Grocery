import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { useState, useEffect } from "react";
import axios from "axios";






const PopularProduct = () => {
  const [apiData, setApiData] = useState([]);
  const [cartData, setCartData] = useState([])

    

  useEffect(() => {
     axios.get("https://fakestoreapi.com/products?limit=10").then((res) => {
      
    setApiData(res.data)
    })
    .catch((item) => {
      console.log("not fullfil")
    })
  }, [])



  // *********
const addProductOnCart = (id) => {
  
  const cart = apiData.filter((element) => element.id === id);
  cartData.push(cart[0])
  setCartData(cartData)
  console.log(cartData)


}
const dltProductCart = (id) => {
  const productDatas = cartData.filter((element) => element.id !== id);
  setCartData(productDatas);
  console.log(productDatas)
}




  return(
    <section className="w-[96%] m-auto max-w-[100rem]">
      <div className='flex justify-between items-center mt-[3%] mb-[1.3%] max-lg:w-[98%] max-lg:gap-[4.9%] max-lg:mb-[1.5%]'>
        <div className="">
          <h1 className='text-[35px] font-bold text-[#113715] max-md:text-[30px] max-lg:text-[38px] max-lg:mt-5'>
            Popular Product
          </h1>
        </div>
        <div className="max-lg:w-[70%] max-lg:text-[15px] max-lg:hidden">
          <ul className='flex gap-x-8 font-medium max-lg:gap-x-8'>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              All
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              Milk & Dairies
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              Coffee & Teas
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              Pet Foods
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              Meats
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              Vegetables
            </li>
            <li className='hover:text-[#2eb576] cursor-pointer  hover:-translate-y-1 duration-300'>
              Fruits
            </li>
          </ul>
        </div>
      </div>

      {/* Product Box */}
      <div className='ml-[1%] mr-[1%] mb-[2%]'>
        <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[2.5%]">
        {apiData.map((data) => {
          return (
            <div  
              className='border-[2px] flex flex-col justify-between hover:border-[#2eb576] shadow-md hover:shadow-2xl rounded-2xl pl-[6%] pb-[4%]'>
             <div className="imageDiv">
         <img className="item-center pt-5 pb-5 pl-10" width={200} height={200} src={ data.image } alt="" />
         
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
              <div className="flex justify-between">
              <h5 className='line-through cursor-pointer font-bold text-[15px] text-[#676767]'>
                $55.8
              </h5>
              <div className="border-green-700 bg-green-200 text-green-900 hover:font-medium hover:bg-green-700 hover:-translate-y-2 duration-500 hover:text-white cursor-pointer w-[25%] mb-5 rounded-md text-center ml-8 font-semibold flex items-center gap-1" onClick={() => {addProductOnCart(data.id)}}><AiOutlineShoppingCart className="text-[23px] pl-1"/>Add</div>
              <div className="border-green-700 bg-red-200 text-green-900 hover:font-medium hover:bg-red-600 hover:-translate-y-2 duration-500 hover:text-white cursor-pointer w-[25%] mb-5 rounded-md text-center mr-5 font-semibold flex items-center gap-1" onClick={() => {dltProductCart(data.id)}}><RiDeleteBin6Line className="text-[28px] pl-3"/>Dlt</div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  )
}



export default PopularProduct;
