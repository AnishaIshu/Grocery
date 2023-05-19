const serviceData = [
    {
        h1:'Best Prices & Offers',
        p: 'Order $50 or more',
    },
    {
        h1:'Free delivery',
        p: '24/7 amazing services',
    },
    {
        h1:'Great daily deal',
        p: 'When you sign up',
    },
    {
        h1:'Wide assortment',
        p: 'Mega Discounts',
    },
    {
        h1:'Easy returns',
        p: 'Within 30 days',
    },
]



const Service = () => {
    return (
<section className='w-[94%] max-w-[100rem] m-auto mt-[3%] mb-[2%]'>


<div className="flex flex-wrap justify-center gap-[3%] max-lg:gap-[2%] max-md:gap-[2.3%]">
    {serviceData.map((data) => {
        return (
            <div className="bg-slate-100 w-[280px] py-5 rounded-xl text-center hover:-translate-y-3 duration-500 cursor-pointer shadow-md max-lg:py-4 max-lg:px-2 max-lg:mb-[3%]">
        <h1 className="text-[18px] font-semibold max-lg:text-[16px] max-md:text-[14px] max-lg:text-center">{data.h1}</h1>
        <p className="text-[14px] text-gray-500 font-semibold max-lg:text-[13px] max-md:text-[12px]">{data.p}</p>
      </div>
       )
    })}
    </div>
</section>
    )
}

export default Service;