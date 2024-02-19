import React, { useState } from "react";
import { RiPlaneFill } from "react-icons/ri";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Flight = () => {
  const day = new Date();
  const departure = new Date();
  day.setDate(day.getDate() + 3);
  const [round, setRound] = useState(false);
  const [city, setCity] = useState(" ");

  const handleClick = (e) => {
    e.preventDefault();

    const add = {
      content: e.target.name.value,
    };
    setCity(city.concat(add));
    e.target.reset();
  };

  return (
    <div>
      {" "}
      <div className="mt-[1rem] lg:m-0 w-[100%] flex flex-col justify-center items-center gap-y-[1rem] lg:h-[30%] lg:flex lg:flex-row lg:gap-[0.25rem] frontPage">
        <div className="trip lg:hidden w-[100%] bg-[#01004d] flex flex-row justify-around items-center text-white text-[0.85rem] font-bold">
          <button className="active:bg-blue-400" type="button">
            ROUND TRIP
          </button>
          <button className="active:bg-blue-400" type="button">
            ONE WAY
          </button>
          <button type="button">MULTI-CITY</button>
        </div>
        <div className="detail flex flex-row gap-[0.75rem] lg:justify-center items-center">
          <RiPlaneFill className="fill-[lightgray] " />
          <form
            onSubmit={handleClick}
            className="flex flex-col justify-center items-center"
          >
            <label htmlFor="" className="text-[gray] text-[0.85rem] mr-[10rem]">
              From
            </label>
            <input
              type="text"
              name="from"
              placeholder="Enter city"
              className="placeholder outline-none"
            />
          </form>
        </div>
        <RiArrowLeftRightFill className="lg:mt-[0.35rem] fill-white w-[35px] h-[20px] rounded-[4px] z-[1]" />
        <div className="detail flex flex-row gap-[0.65rem] lg:justify-center items-center">
          <FaMapMarkerAlt className="fill-[lightgray] " />
          <form
            onSubmit={handleClick}
            className="flex flex-col justify-center items-center"
          >
            <label htmlFor="" className="text-[gray] text-[0.85rem] mr-[12rem]">
              To
            </label>
            <input
              type="text"
              name="to"
              placeholder="Enter city"
              className="placeholder outline-none"
            />
          </form>
        </div>
        <div className=" w-[90%] my-[1.2rem] lg:w-[28%] h-[12vh] flex flex-row lg:justify-center px-[10px] items-center bg-white lg:m-0 rounded-[3px]">
          <div className="flex flex-col justify-center items-center py-[10px]">
            <p className="text-[gray] text-[0.85rem]">Departure</p>
            <p className="text-[0.85rem]  font-extrabold">
              <input
                type="date"
                id="date1"
                className="outline-0  border-b-[1px]"
              />
            </p>
          </div>

          <div className="w-[50%] flex flex-row gap-[1rem] lg:justify-center items-center mr-[1rem]">
            <label htmlFor="date2">
              {/* <FcCalendar className="w-[20px] h-[20px]" /> */}
            </label>
            <div className="flex flex-col justify-center items-center py-[10px]">
              <p className="text-[gray] text-[0.85rem] mr-[0.5rem]">Return </p>
              <p className="text-[0.85rem]  font-extrabold">
                <input
                  type="date"
                  id="date2"
                  className="outline-0  w-[] border-b-[1px]"
                />
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://#"
          className="w-[90%] my-[1.2rem] lg:w-[15%] h-[12vh] rounded-[3px] bg-[orange] flex flex-row justify-center px-[1.6rem] items-center"
        >
          <p className="text-white  text-[0.95rem] font-extrabold">
            Search Flight
          </p>
          <RiArrowDropRightLine className="fill-white ml-[0.5rem] w-[25px] h-[35px]" />
        </a>{" "}
      </div>
    </div>
  );
};

export default Flight;
