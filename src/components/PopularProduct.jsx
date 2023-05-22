import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./Context";
import ProductCart from "./productCart";

const PopularProduct = () => {
  const [apiData, setApiData] = useState([]);
  const useCart = useContext(CartContext);
  const { cartData, updateCart, deleteCartItem } = useCart;

  // FUNCTIONS
  const addProductOnCart = (id) => {
    const productDatas = apiData.filter((element) => element.id === id)[0];
    updateCart(productDatas);
  };

  const dltProductCart = (id) => {
    const productDatas = cartData.filter((element) => element.id === id);
    deleteCartItem(productDatas);
  };

  // SIDE EFFECTS
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((item) => {
        console.log("not fullfil");
      });
  }, []);

  return (
    <section className='w-[96%] m-auto max-w-[100rem]'>
      <div className='flex justify-between items-center mt-[3%] mb-[1.3%] max-lg:w-[98%] max-lg:gap-[4.9%] max-lg:mb-[1.5%]'>
        <div className=''>
          <h1 className='text-[35px] font-bold text-[#113715] max-md:text-[30px] max-lg:text-[38px] max-lg:mt-5'>
            Popular Product
          </h1>
        </div>
        <div className='max-lg:w-[70%] max-lg:text-[15px] max-lg:hidden'>
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
        <div className='grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[2.5%]'>
          {apiData.map((data) => {
            return (
              <ProductCart
                data={data}
                addProductOnCart={addProductOnCart}
                dltProductCart={dltProductCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
