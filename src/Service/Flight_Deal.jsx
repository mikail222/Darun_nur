import React, { useEffect } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Flight_Deal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="w-[100%] flex flex-col  justify-center items-center lg:mb-[1px] h-auto lg:h-[20vh] "
    >
      <div className="flex-col-reverse lg:w-[80%] lg:h-[30%] flex lg:flex-row justify-between items-center gap-[3rem]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[1.6rem] lg:text-[2.4rem] font-extrabold">
            Trending Flight Deals
          </h3>
          <p className="text-[grey] text-center my-[1.5rem] lg:my-[5px]">
            Get the best flight deals, airline specials and promotions
          </p>
        </div>
        <a
          href="https://wa.me/8124330616"
          className="w-[90%] h-[13vh] flex flex-row justify-center items-center lg:w-[17%] lg:h-[9.5vh] rounded-[5px] bg-[#128c7e]  gap-[0.75rem]   pl-[7px]"
        >
          <div className=" w-[40px] h-[40px] rounded-[100%] bg-[#5fb042] border-[white] border-[2px] lg:ml-[1rem] flex  flex-row items-center justify-center ">
            <MdPhoneInTalk className=" w-[25px] h-[25px] fill-white" />
          </div>
          <div className=" lg:w-[75%] text-[white] flex flex-col text-left">
            <p className="text-[0.85rem] font-extrabold">Need Help?</p>
            <p className="text-[0.75rem]  lg:text-[0.85rem] font-semibold">
              Click to get in touch.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Flight_Deal;
