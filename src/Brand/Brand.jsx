import React, { useEffect, useState } from "react";
import { RiPlaneFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import videoBg from "../assets/g8g3mq.mp4";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Flight_Dropdown from "./Flight_Dropdown";

const Brand = ({
  setHotelDetails,
  setFlightDetails,
  flightDetails,
  hotelDetails,
}) => {
  const [allCountries, setAllCountries] = useState([]);
  const [booking, setBooking] = useState(false);
  const [totalPassanger, setTotalpassanger] = useState(1);
  const [selecDisplay, setSelectDisplay] = useState(null);
  // const [display, setDisplay] = useState([
  //   {
  //     title: "Economy",
  //     content: "Economy1",
  //     id: 1,
  //   },
  //   {
  //     title: "Premium Economy",
  //     content: "Premium  Economy2",
  //     id: 2,
  //   },
  //   {
  //     title: "Business Class",
  //     content: "Business Class3",
  //     id: 3,
  //   },
  //   {
  //     title: "First Class",
  //     content: " First Class4",
  //     id: 4,
  //   },
  // ]);
  const [isActive, setIsactive] = useState();

  // const menu = display.map((title) => title.title);
  // console.log(menu)

  // const handleClick = (e) => {
  //   switch (display) {
  //     case economy:
  //       console.log("Economy");
  //       e.target.className = "text-[blue]";
  //       break;
  //     case firstClass:
  //       console.log("First Class");
  //       e.target.className = "text-[blue]";
  //       break;
  //     case business:
  //       console.log("Business Class");
  //       e.target.className = "text-[blue]";
  //       break;
  //     case premium:
  //       console.log("Premium Economy");
  //       e.target.className = "text-[blue]";
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const filteredCountry = allCountries.filter(({ capital, flags }) => {
    capital, flags;
  });
  const day = new Date();

  const changeImg = () => {
    for (var i = 0; i < img.length; i++) {
      i = 0;
    }
    brandImg.src += picture[i];
    setTimeout("changeImg()", 1000);
  };

  return (
    <div className="  border-[.5rem] border-[white] w-[100%] h-auto lg:w-[100%] lg:h-[100vh] z-[-1] lg:mt-[0%]  lg:mb-[10rem]">
      <div className=" flex flex-col lg:h-[50vh] md:h-[50vh]  lg:w-[100%] lg:flex">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="object-cover"
        ></video>
        <div className="lg:flex flex-col lg:justify-center lg:items-center w-[100%] lg:h-[100%] z-[1] relative   lg:top-[-505px]">
          <div className=" lg:w-[90%] lg:h-[25%] ">
            <h1 className="hidden text-[5rem] text-[white] lg:flex flex-row justify-left items-left mb-[1.7rem] tracking-[2px] font-extrabold ">
              Going to Hajj or Umrah?
            </h1>
            <div className="w-[100%] h-[100%] lg:w-[100%] lg:h-[45vh] bg-[#01004d]">
              <div className="flex flex-col lg:h-[30%] lg:flex lg:flex-row items-center justify-between bg-white ">
                <div className=" w-[100%] lg:bg-white  h-[10vh] lg:w-[25%] flex flex-row justify-center items-center lg:mr-[2.5rem]">
                  <button
                    className="flex flex-row justify-center items-center gap-[0.5rem] lg:focus:outline-1 border-[#01004d] rounded-[3px] w-[8rem] p-[6px]"
                    onClick={(e) =>
                      setHotelDetails(false) || setFlightDetails(true)
                    }
                  >
                    <RiPlaneFill className="fill-[#0f0326] w-[15px] h-[20px]" />{" "}
                    <p className="text-[#0f0326]  text-[0.90rem] font-bold">
                      FLIGHTS
                    </p>
                  </button>
                  <button
                    className="w-[8rem] flex flex-row gap-[0.5rem] justify-center items-center ml-[1rem]  focus:outline-1  outline-[#0f0326] p-[6px]"
                    onClick={(e) =>
                      setFlightDetails(false) || setHotelDetails(true)
                    }
                  >
                    <MdHome className="fill-[rgb(0,0,0)] w-[15px] h-[20px]" />
                    <p className="text-[black] text-[0.90rem] font-bold">
                      HOTELS
                    </p>
                  </button>
                </div>
                <div className="hidden md:hidden w-[22%] lg:flex flex-row lg:w-[21%] items-center gap-[.5rem]">
                  <HiBadgeCheck className="fill-[orange] w-[25px] h-[25px] " />
                  <p className="  text-[#0f0326] text-[0.90rem] font-semibold">
                    We offer the best deals in the industry!
                  </p>
                </div>
              </div>
              {flightDetails ? (
                <div className=" hidden lg:w-[100%] lg:h-[20%] lg:flex flex-row gap-[2rem] items-center">
                  <div className="flex flex-row gap-[0.5rem] items-center ml-[3rem] cursor-pointer">
                    <RiArrowLeftRightFill className="fill-white" />
                    <p className="text-[0.75rem] text-white">Round Trip</p>
                    <IoMdArrowDropdown className="fill-white" />
                  </div>

                  <button
                    onClick={(e) => setBooking(true)}
                    type="button"
                    className="flex flex-row gap-[0.45rem] outline-none items-center"
                  >
                    <BsFillPersonFill className="fill-white" />
                    <p className="text-[0.75rem]  text-white">
                      {totalPassanger}
                    </p>
                    <IoMdArrowDropdown className="fill-white" />{" "}
                  </button>
                  {booking ? (
                    <Flight_Dropdown
                      setTotalpassanger={setTotalpassanger}
                      setBooking={setBooking}
                    />
                  ) : (
                    ""
                  )}

                  <div className="flex flex-row gap-[0.45rem] items-center">
                    {/* {display.map((title, id) => (
                    <div
                      key={title.title}
                      className="flight_container  mt-[20%]"
                    >
                      <button onClick={() => setSelectDisplay(display)}>
                        {title.title}
                      </button>
                    </div>
                  ))} */}
                    <p className="text-white text-[0.85rem]">Economy</p>
                    <IoMdArrowDropdown className="fill-white" />
                  </div>
                </div>
              ) : (
                <p className="w-[100%] h-[6vh]"></p>
              )}
              {flightDetails ? <Flight /> : hotelDetails ? <Hotel /> : ""}
              <div className="details w-[90%] h-[12vh] bg-[transparent] lg:hidden lg:w-[22%] flex flex-row  justify-center items-center gap-[1rem] ">
                <HiBadgeCheck className="fill-[orange] w-[25px] h-[25px] " />
                <p className="text-white  lg:text-[#0f0326] text-[0.75rem] ">
                  We offer the best deals in the industry!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
