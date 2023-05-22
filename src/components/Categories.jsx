import React from 'react';

const categoryData = [
  {
    img: 'images/Categories/cat-1.png',
    heading: "Vegetables",
    items: "72 items", 
    color: "#6e42c151"
  },
  {
    img: 'images/Categories/cat-2.png',
    heading: "Strawberry",
    items: "36 items", 
    color: "#1987544a"
  },
  {
    img: 'images/Categories/cat-3.png',
    heading: "Snack",
    items: "56 items", 
    color: "#ffc1075c"
  },
  {
    img: 'images/Categories/cat-4.png',
    heading: "Black plum",
    items: "123 items", 
    color:"#fd7d1443"
  },
  {
    img: 'images/Categories/cat-5.png',
    heading: "Custard apple",
    items: "34 items", 
    color:"#ffc1075b"
  },
  {
    img: 'images/Categories/cat-6.png',
    heading: "red apple",
    items: "54 items", 
    color: "#dc35465c"
  },
  {
    img: 'images/Categories/cat-7.png',
    heading: "Peach",
    items: "14 items", 
    color: "#1987543e"
  },
  {
    img: 'images/Categories/cat-8.png',
    heading: "Organic Kiwi",
    items: "28 items", 
    color:"#ffc1075b"
  },
  {
    img: 'images/Categories/cat-9.png',
    heading: "Cake & Milk",
    items: "26 items", 
    color: "#20c99643"
  },
  {
    img: 'images/Categories/cat-10.png',
    heading: "Coffee & Tea",
    items: "89 items", 
    color: "#fd7d142f"
  },
 
]


const Categories = () => {





  return (
    <section>

    <div className="mt-[3%] ml-[8%] mb-[2.2%] max-lg:ml-[1%] max-lg:mr-[1%] max-md:ml-[1%] max-md:mr-[1%]">
      <div className="flex gap-[8%] items-center mb-[1.5%] max-md:mt-[8%] max-lg:gap-[10%] max-lg:pl-[5%]">
        <h2 className="text-[35px] font-bold text-[#113715] max-md:text-[30px] max-lg:text-[38px] ">Featured Categories</h2>


        <ul className="flex gap-[5%] w-[60%] font-semibold max-md:text-[15px] max-md:w-[55%] max-md:gap-x-4 max-lg:w-[50%] max-lg:hidden">
          <li className="cursor-pointer text-[#113715] hover:text-[#2eb576] hover:-translate-y-1 duration-300">Cake & Milk</li>
          <li className="cursor-pointer text-[#113715] hover:text-[#2eb576] hover:-translate-y-1 duration-300">Coffes & Teas</li>
          <li className="cursor-pointer text-[#2eb576] hover:-translate-y-1 duration-300">Pet Foods</li>
          <li className="cursor-pointer text-[#113715] hover:text-[#2eb576] hover:-translate-y-1 duration-300">Vegetables</li>
        </ul>
      </div>



      
      <div className="flex gap-x-7 max-lg:justify-center text-center flex-wrap max-lg:w-[95%] max-md:mt-[3%] max-lg:gap-x-10 max-lg:pl-[5%]">
          {categoryData.map((Data) => {
            return(
              <div style={{background:Data.color}} className="rounded-xl py-5 px-2 cursor-pointer items-center place-self-center max-lg:mb-[3%] hover:shadow-xl">
                  <img className="w-20 mx-5 my-3 transition ease-in-out hover:scale-125 duration-700" src={Data.img} alt="" />
                  <h1 className="text-[16.5px] font-bold text-[#113715]  hover:text-[#299865]">{Data.heading}</h1>
                  <p className="text-[14px] font-semibold">{Data.items}</p>
               </div>
            )
          })}
      </div>
    </div>
  </section>
  );
};

export default Categories;
