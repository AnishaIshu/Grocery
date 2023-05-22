import { IoIosArrowForward } from "react-icons/io";
import React from 'react';

const dealsData = [
  {
    img: "images/Deal/deal-1.png",
    h2: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    h6: " $32.85",
    span: "NestFood",
  },
  {
    img: "images/Deal/deal-2.png",
    h2: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    h6: " $25.85",
    span: "Old El Paso",
  },
  {
    img: "images/Deal/deal-3.png",
    h2: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    h6: " $12.85",
    span: "Progresso",
  },
  {
    img: "images/Deal/deal-4.png",
    h2: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    h6: " 15.85",
    span: "Yoplait",
  },
];

const Deals = () => {
  return (
    <section className='w-[94%] max-w-[100rem] m-auto mt-[5%]'>
      <div className='flex justify-between items-center max-lg:mt-[18%] max-lg:ml-[3%] max-lg:mr-[3%] max-md:mt-[37%]  max-sm:mt-[63rem]'>
        <div>
          <h1 className='text-[35px] font-bold text-[#113715] mb-[10%] max-lg:text-[38px]'>
            Deals of the Day
          </h1>
        </div>

        <div>
          <ul className='flex space-x-8 font-medium max-sm:hidden'>
            <li className=' text-[#113715] hover:text-[#2eb576] cursor-pointer font-semibold hover:-translate-y-1 duration-300 flex items-center'>
              All Deals <IoIosArrowForward className='text-[23px]' />
            </li>
          </ul>
        </div>
      </div>


      <div className='flex gap-x-[5%] max-lg:flex-wrap max-lg:gap-[5%] max-lg:ml-[3%] max-lg:mr-[3%]'>
        {dealsData.map((item) => {
          return (
            <div className='relative max-lg:w-[45%] max-sm:w-[96%] max-lg:mb-[18%] max-md:mb-[37%] max-sm:mb-[23%]'>
              <img className='rounded-2xl' src={item.img} alt='' />

              <div className=' absolute top-[55%] cursor-pointer hover:-translate-y-5 duration-500 '>
                <div className='flex gap-x-4 ml-[12%] mr-[10%] mb-[1%] max-sm:gap-x-1'>
                  <div className='w-[20%] text-center py-2 shadow-lg bg-white rounded-md max-sm:w-[50%]'>
                    <h1 className='font-bold text-[20px] text-green-600'>
                      675
                    </h1>
                    <p className='font-medium text-[15px] max-sm:text-[13px]'>Days</p>
                  </div>
                  <div className='w-[20%] text-[20px] text-center py-2 shadow-lg bg-white rounded-md max-sm:w-[50%]'>
                    <h1 className='font-bold text-green-600'>07</h1>
                    <p className='font-medium text-[15px] max-sm:text-[13px]'>Hours</p>
                  </div>
                  <div className='w-[20%] text-[20px] text-center py-2 shadow-lg bg-white rounded-md max-sm:w-[50%]'>
                    <h1 className='font-bold text-green-600'>06</h1>
                    <p className='font-medium text-[15px] max-sm:text-[13px]'>Mins</p>
                  </div>
                  <div className='w-[20%] text-[20px] text-center py-2 shadow-lg bg-white rounded-md max-sm:w-[50%]'>
                    <h1 className='font-bold text-green-600'>59</h1>
                    <p className='font-medium text-[15px] max-sm:text-[13px]'>Sec</p>
                  </div>
                </div>

                <div className='rounded-xl shadow-xl pl-[5%] bg-white pt-[3%] pr-[5%] pb-[10%] ml-[5%] mr-[5%] mb-[10%] mt-[3%]'>
                  <h2 className='text-[17px] font-semibold leading-[22px] pb-[2%]  max-sm:text-[15px]'>
                    {item.h2}
                  </h2>
                  <img
                    className='w-[25%] pb-[2%]'
                    src='https://www.pngarts.com/files/5/5-Star-Rating-Transparent-Background-PNG.png'
                    alt=''
                  />
                  <h5 className='font-semibold text-[14px] mb-[5%]'>
                    By{" "}
                    <span className='text-green-600 font-semibold'>
                      {item.span}
                    </span>{" "}
                  </h5>

                  <div className='flex justify-between'>
                    <span className='flex items-center font-bold text-[20px] text-green-600'>
                      {item.h6}{" "}
                      <h6 className='pl-[10%] text-[14px] text-gray-500 line-through'>
                        $36.0
                      </h6>
                    </span>
                    <div className='bg-green-100 cursor-pointer hover:bg-green-600 hover:text-white rounded-sm py-1 px-3 text-green-900 font-semibold'>
                      Add
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Deals;
