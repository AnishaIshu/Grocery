import { IoIosPaperPlane } from "react-icons/io";


const Needs = () => {
    return (
       <section className='w-[94%] max-w-[100rem] m-auto mt-[5%] mb-[2%] max-sm:hidden'> 
          <div className="relative">
            <img className="rounded-2xl" src="images/banner-10.png" alt="" />
             <div className="">
                  <img className="absolute w-[42%] top-[5%] right-[3%]" src="images/banner-9.png" alt="" />


                  <h1 className='absolute top-10 text-[40px] font-bold pl-[5%] text-[#253D4E] max-lg:text-[27px] max-lg:top-[12%] max-md:text-[19px]'>
                  Stay home & get your daily
        </h1>
        <h1 className='absolute top-[23%] text-[40px] font-bold pl-[5%] text-[#253D4E] max-lg:text-[27px] max-lg:top-[28%] max-md:text-[19px]'>
        needs from our shop
        </h1>
        <p className='absolute top-[40%] text-[20px] font-medium pl-[5%] text-[#7E7E7E] max-lg:text-[16px] max-lg:top-[48%]  max-md:text-[14px]'>
        Start You'r Daily Shopping with <span className="text-green-500">Nest Mart</span> 
        </p>
        <div className='flex items-center bg-white absolute top-[50%] ml-[4%] rounded-full pl-4 mt-10 max-lg:top-[55%]  max-md:top-[48%]'>
          <IoIosPaperPlane className="text-2xl text-[#414040] max-lg:text-xl max-md:text-[20px]"/>
          <input
            type='email'
            className='p-2 focus:outline-none ml-3 text-[18px] max-lg:text-[14px] '
            placeholder='Your email address'
          />
          <h5 className='bg-[#2eb576] hover:bg-green-700 text-white py-5 rounded-full px-10 font-medium cursor-pointer max-lg:py-[2.7%] max-lg:text-[14px] max-md:text-[13px] max-md:px-[15px] max-md:py-[9px]'>Subscribe</h5>
        </div>
                  
             </div>
          </div>
       </section>
    )
}
 export default Needs;

