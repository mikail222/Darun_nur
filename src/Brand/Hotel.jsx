import React, { useState } from "react";
import { BiHotel } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { RiArrowDropRightLine } from "react-icons/ri";
import Hotel_Dropdown from "./Hotel_Dropdown";

const Hotel = () => {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(false);
  const date = new Date();
  const days = new Date();
  days.setDate(days.getDate() + 3);

  return (
    <div>
      <div className="w-[100%] mt-[3%] ml-[3.5%] gap-[1.5rem] lg:ml-0 lg:h-[30vh] flex  flex-col lg:flex-row lg:gap-[0.25rem]  lg:justify-center lg:mt-[1rem]">
        <div className="detail lg:details flex flex-row gap-[1rem] lg:justify-start  items-center">
          <BiHotel className="fill-[lightgray] w-[25px] h-[25px] ml-[1rem]" />
          <form className="flex flex-col justify-center items-center">
            <label htmlFor="" className="text-[grey] text-[0.75rem] mr-[9rem]">
              Going to?
            </label>
            <input
              type="text"
              placeholder="city or hotel name"
              className="placeholder outline-none cursor-pointer"
            />
          </form>
        </div>
        <div className=" detail lg:details flex flex-row lg:gap-[0.65rem] lg:justify-start items-center">
          <BsFillPersonFill className="fill-[lightgray] w-[20px] h-[25px] ml-[1rem]" />
          <form className="flex flex-col lg:justify-center items-center">
            <label htmlFor="" className="text-[grey] text-[0.75rem] mr-[6rem] ">
              Rooms and guests
            </label>
            <div className="hotel_dropdown">
              <button
                type="button"
                onClick={(e) => setRoom(true)}
                className="placeholder outline-none text-[black] mr-[6rem]"
              >
                <p className="text-[0.85rem] font-extrabold">
                  1 Room,{adult + children} Guest
                </p>
              </button>
              {room ? (
                <Hotel_Dropdown
                  children={children}
                  setChildren={setChildren}
                  adult={adult}
                  setAdult={setAdult}
                  room={room}
                  setRoom={setRoom}
                />
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
        <div className="w-[90%] h-[12vh] lg:w-[27%] lg:h-[40%] flex flex-row justify-center  items-center gap-[2rem] bg-white  rounded-[3px]">
          <div className="w-[50%] flex flex-row gap-[1rem] lg:justify-center items-center ml-[1rem] ">
            <FcCalendar className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-center items-center p-[10px]">
              <p className="text-[grey] text-[0.75rem]">Check-in</p>
              <p className="text-[0.85rem] font-bold">
                {date.toDateString().slice(0, 10)}
              </p>
            </div>
          </div>

          <div className="w-[50%] flex flex-row gap-[1rem] lg:justify-center items-center mr-[1rem]">
            <FcCalendar className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-center items-center p-[10px]">
              <p className="text-[grey] text-[0.75rem] mr-[0.5rem]">
                Check-out
              </p>
              <p className="text-[0.85rem] font-bold">
                {days.toDateString().slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://#"
          className="w-[90%] h-[12vh] lg:w-[15%] lg:h-[40%] rounded-[5px] bg-[orange] flex flex-row justify-center  items-center"
        >
          <p className="text-white">Search Hotel</p>
          <RiArrowDropRightLine className="fill-white ml-[1.2rem] w-[25px] h-[35px]" />
        </a>
      </div>
    </div>
  );
};

export default Hotel;
