const trandingDataOne = [
  {
    img: "images/Tranding/tranding-1.jpg",
    h1: "Nestle Original Coffee-Mate Coffee Creamer",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-2.jpg",
    h1: "Nestle Original Coffee-Mate Coffee Creamer",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-3.jpg",
    h1: "Nestle Original Coffee-Mate Coffee Creamer",
    h2: "$32.85 ",
    span: "$33.0",
  },
];

const trandingDataTwo = [
  {
    img: "images/Tranding/tranding-4.jpg",
    h1: "Organic Cage-Free Grade A Large Eggs",     
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-5.jpg",
    h1: "Seeds of Change Organic Brown, & Red Rice",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-6.jpg",
    h1: "Naturally Flavored Cinnamon Vanilla Coffee",
    h2: "$32.85 ",
    span: "$33.0",
  },
];

const trandingDataThree = [
  {
    img: "images/Tranding/tranding-7.jpg",
    h1: "Pepperidge Farm Farmhouse Hearty Bread",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-8.jpg",
    h1: "Organic Frozen Triple Berry Blend",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-9.jpg",
    h1: "Oroweat Country Buttermilk Bread",
    h2: "$32.85 ",
    span: "$33.0",
  },
];

const trandingDataFour = [
  {
    img: "images/Tranding/tranding-10.jpg",
    h1: "Foster Farms Takeout Crispy Buffalo Wings",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-11.jpg",
    h1: "Angie’s Boomchickapop Sweet & Salty Corn",
    h2: "$32.85 ",
    span: "$33.0",
  },
  {
    img: "images/Tranding/tranding-12.jpg",
    h1: "All Natural Italian-Style Chicken Meatballs",
    h2: "$32.85 ",
    span: "$33.0",
  },
];

const Tranding = () => {
  return (
    <section className='w-[94%] max-w-[100rem] m-auto mt-[10%] mb-[2%] max-sm:mt-[15%]'>
      <div className='flex max-lg:flex-wrap gap-[3%] justify-center max-lg:gap-[10%] max-lg:ml-[4%] max-lg:mr-[4%] max-lg:mb-[10%]'>

        {/* **************** */}
        <div className='w-[90%] max-lg:mb-[5%] max-lg:w-[45%]  max-sm:w-[80%]'>
          <h1 className='text-[30px] font-bold text-[#246440] cursor-pointer  max-sm:text-[25px]'>
            Top Selling
          </h1>
          <div className='h-[2px] mt-[2%] bg-[#246440] relative rounded-xl max-lg:mb-[10%]'>
            <div className='absolute top-0 right-0 w-[78%] bg-slate-300 h-[2px] rounded-xl'></div>
          </div>



          {trandingDataOne.map((dataOne) => {
          return (
          <div className='mt-[5%] flex mr-[4%]  hover:-translate-y-2 duration-500 max-lg:pb-[4%]'>
            <div>
              {" "}
              <img
                className='w-[80%] rounded-md cursor-pointer'
                src={dataOne.img}
                alt=''
              />
            </div>
            <div>
              <h1 className='text-[16px] font-bold text-gray-600 hover:text-green-700 cursor-pointer max-sm:text-[13px]'>
                {dataOne.h1}
              </h1>
              <img
                className='w-[25%] pb-[2%]'
                src='https://www.pngarts.com/files/5/5-Star-Rating-Transparent-Background-PNG.png'
                alt=''
              />

              <h2 className='font-bold text-[20px] text-green-700 max-sm:text-[18px]'>
                {dataOne.h2}{" "}
                <span className='text-[14px] pr-[30%] text-gray-400 line-through'>
                 {dataOne.span}
                </span>
              </h2>
            </div>
          </div>
               );
            })}
        </div>

{/* ************* */}
            <div className='w-[90%] max-lg:w-[45%] max-sm:w-[80%]'>
              <h1 className='text-[30px] font-bold text-[#246440] cursor-pointer max-sm:text-[25px]'>
                Treading Products
              </h1>
              <div className='h-[2px] mt-[2%] bg-[#246440] relative rounded-xl max-lg:mb-[10%]'>
                <div className='absolute top-0 right-0 w-[78%] bg-slate-300 h-[2px] rounded-xl'></div>
              </div>

        {trandingDataTwo.map((dataTwo) => {
          return (
              <div className='mt-[5%] flex mr-[4%]  hover:-translate-y-2 duration-500 max-lg:pb-[4%]'>
                <div>
                  {" "}
                  <img
                    className='w-[80%] rounded-md cursor-pointer'
                    src={dataTwo.img}
                    alt=''
                  />
                </div>
                <div>
                  <h1 className='text-[16px] font-bold text-gray-600 hover:text-green-700 cursor-pointer max-sm:text-[13px]'>
                   {dataTwo.h1}
                  </h1>
                  <img
                    className='w-[25%] pb-[2%]'
                    src='https://www.pngarts.com/files/5/5-Star-Rating-Transparent-Background-PNG.png'
                    alt=''
                  />

                  <h2 className='font-bold text-[20px] text-green-700 max-sm:text-[18px]'>
                    {dataTwo.h2}{" "}
                    <span className='text-[14px] pr-[30%] text-gray-400 line-through'>
                     {dataTwo.span}
                    </span>
                  </h2>
                </div>
              </div>
          );
        })}
            </div>

{/* ***************** */}
        <div className='w-[90%] max-lg:w-[45%] max-sm:w-[80%]'>
          <h1 className='text-[30px] font-bold text-[#246440] cursor-pointer max-sm:text-[25px]'>
            Recently Added
          </h1>
          <div className='h-[2px] mt-[2%] bg-[#246440] relative rounded-xl max-lg:mb-[10%]'>
            <div className='absolute top-0 right-0 w-[78%] bg-slate-300 h-[2px] rounded-xl'></div>
          </div>




          {trandingDataThree.map((dataThree) => {
          return (
          <div className='mt-[5%] flex mr-[4%]   hover:-translate-y-2 duration-500 max-lg:pb-[4%]'>
            <div>
              {" "}
              <img
                className='w-[80%] rounded-md cursor-pointer'
                src={dataThree.img}
                alt=''
              />
            </div>
            <div>
              <h1 className='text-[16px] font-bold text-gray-600  hover:text-green-700 cursor-pointer max-sm:text-[13px]'>
                {dataThree.h1}
              </h1>
              <img
                className='w-[25%] pb-[2%]'
                src='https://www.pngarts.com/files/5/5-Star-Rating-Transparent-Background-PNG.png'
                alt=''
              />

              <h2 className='font-bold text-[20px] text-green-700 max-sm:text-[18px]'>
                {dataThree.h2}{" "}
                <span className='text-[14px] pr-[30%] text-gray-400 line-through'>
                  {dataThree.span}
                </span>
              </h2>
            </div>
          </div>
   );
})}
        </div>

{/* ************************* */}
        <div className='w-[90%] max-lg:w-[45%] max-sm:w-[80%]'>
          <h1 className='text-[30px] font-bold text-[#246440] cursor-pointer max-sm:text-[25px]'>
            Top Rated
          </h1>
          <div className='h-[2px] mt-[2%] bg-[#246440] relative rounded-xl max-lg:mb-[10%]'>
            <div className='absolute top-0 right-0 w-[78%] bg-slate-300 h-[2px] rounded-xl'></div>
          </div>




          {trandingDataFour.map((dataFour) => {
          return (
          <div className='mt-[5%] flex mr-[4%]   hover:-translate-y-2 duration-500 max-lg:pb-[4%]'>
            <div>
              {" "}
              <img
                className='w-[80%] rounded-md cursor-pointer'
                src={dataFour.img}
                alt=''
              />
            </div>
            <div>
              <h1 className='text-[16px] font-bold text-gray-600 hover:text-green-700 cursor-pointer max-sm:text-[13px]'>
                {dataFour.h1}
              </h1>
              <img
                className='w-[25%] pb-[2%]'
                src='https://www.pngarts.com/files/5/5-Star-Rating-Transparent-Background-PNG.png'
                alt=''
              />

              <h2 className='font-bold text-[20px] text-green-700 max-sm:text-[18px]'>
                {dataFour.h2}{" "}
                <span className='text-[14px] pr-[30%] text-gray-400 line-through'>
                  {dataFour.span}
                </span>
              </h2>
            </div>
          </div>
   );
})}






        </div>
      </div>
    </section>
  );
};

export default Tranding;
