import React, { useEffect } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TbArrowNarrowDown } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const Trending_deal = () => {
  const day = new Date();
  const departure = new Date();
  const returnDate = day.setDate(day.getDate() + 8);
  const deal = [
    {
      state1: "Lagos",
      state2: "London",
      amount: "400,540",
    },
    {
      state1: "Lagos",
      state2: "Dubai",
      amount: "400,540",
    },
    {
      state1: "Lagos",
      state2: "Jiddah",
      amount: "535,490",
    },
    {
      state1: "Lagos",
      state2: "Istanbul",
      amount: "450,540",
    },
    {
      state1: "Lagos",
      state2: "Medina",
      amount: "550,540",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="w-[100%] my-[20px] flex flex-col justify-center items-center">
      <div className=" flex flex-col w-[100vw] justify-center items-center h-auto lg:w-[80%] lg:h-[50vh] lg:flex lg:flex-row gap-[1.5rem] lg:gap-[1rem] ">
        {deal
          .slice(0, 3)
          .map(({ state1, state2, depature, amount, returnDate }) => (
            <div className="border-[1px] border-[orange] w-[80%] lg:w-[95%] rounded-[5px] flex flex-col  justify-center items-center">
              <div className="deal">
                <div className="text-[0.75rem] w-[8rem] bg-[white] m-[0.5rem] rounded-[3px] lg:text-[0.87rem] text-[blue] text-center">
                  <p>Top flight deal</p>
                </div>
                <div className=" ml-[3rem] lg:ml-[1.5rem] text-[1.2rem] font-extrabold text-[white] w-[10%]">
                  <p>{state1}</p>
                  <TbArrowNarrowDown className="w-[25px] h-[25px]" />
                  <p>{state2}</p>
                </div>
                <div className="text-[white] text-left ml-[1rem] mt-[5rem]">
                  <p className="text-[2rem]  font-extrabold">{amount}</p>
                  <p className="text-[0.85rem] lg:mt-[0.5rem]">
                    {departure.toDateString()} - {day.toDateString()}
                  </p>
                </div>
              </div>
              <div className=" w-[93%] lg:w-[90%] h-[8vh] text-[white] flex flex-row justify-between  items-center">
                <img
                  src="https://seeklogo.com/images/Q/Qatar_Airways-logo-EE07072405-seeklogo.com.png"
                  alt=""
                  className="w-[5rem] lg:w-[33%] h-[25px]"
                />
                <div className=" w-[7rem] lg:w-[40%] h-[5vh] flex flex-row gap-[0.25rem]  justify-center rounded-[3px] items-center bg-[orange]">
                  <a href="#" className="text-[0.85rem] font-extrabold">
                    Book now
                  </a>
                  <RiArrowDropRightLine className="fill-white w-[25px] h-[35px]" />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className=" w-[100%] mt-[4%] lg:h-[10vh] text-right text-[#0827b1] flex flex-row gap-[0.5rem] lg:mt-[2rem] justify-center items-center ">
        <a href="http://#" className="ml-[50%] lg:ml-[60%]">
          <p className="text-[0.85rem] font-extrabold">View More details</p>
        </a>
        <RiArrowDropRightLine className="fill-green w-[25px] h-[35px]" />
      </div>
    </div>
  );
};

export default Trending_deal;
