import React from "react";
import banner from "./image/car.png";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 mt-8 gap-4" >
      <div className='flex items-center justify-center md:order-2  md:h-screen'>
        <img className="w-full" src={banner} alt=""></img>
      </div>
      <div className="flex flex-col justify-center ml-8">
       <div className='mb-4'>
       <h1 className='text-3xl font-bold mb-2 uppercase md:text-5xl'>Improve <span className="text-primarycolor">Your</span>  <br />
       <span className='text-primarycolor'> Business</span> With us</h1>
        <p>We offer best price option.we are provided latest feature  vehicle and also offer 24 hours <br />
         customer service.We have everything your car needs!</p>
       </div>
        <div >
        <button className=" border-2 rounded-3xl bg-primarycolor text-white px-8 py-2">See More</button>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
