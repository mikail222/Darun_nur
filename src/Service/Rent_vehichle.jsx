import React, { useEffect } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Rent_vehichle = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      className="flex-col w-[100%] h-[90%] lg:h-[130vh] flex lg:flex-row justify-center items-center lg:mt-[3%]"
    >
      <div className="w-[%] h-[100%] lg:h-[90vh] my-[10%] lg:mt-0 lg:w-[65%] flex flex-row justify-center items-center">
        <img
          src="https://www.abettervaluecarhire.com.au/wp-content/uploads/2022/05/2014-2015-8-Seat-Hyundai-Imax-Auto.jpg"
          alt=""
          className="w-[90%] lg:w-[85%] lg:h-[90%]"
        />
      </div>
      <div className=" lg:mb-[10rem] w-[90%] lg:text-center lg:ml-[1rem] lg:w-[30%] flex flex-col justify-left items-left text-left">
        <div className="text-[1.7rem] mt-[15%] lg:w-[80%] lg:mt-[35%] mx-[2rem] lg:ml-0 text-left lg:text-[2.3rem] font-extrabold">
          <p className="w-[85%] lg:w-[20vw] lg:leading-[2.5rem] text-[1.5rem] lg:text-[2.3rem]">
            Rent a vehicle with ease
          </p>
        </div>
        <p className=" w-[70vw] text-left mt-[0.5rem]  text-[grey] lg:mt-[8%] mx-[2rem] lg:ml-0 lg:w-[75%]">
          Enhance your driving experience with the right rental to suit your
          transportation needs. With a wide range of vehicle models and sizes,
          our vehicles are reliable and in good condition.
        </p>
        <div className="ml-[8%]  lg:ml-[0px] lg:p-[0.5rem]  w-[65%] lg:w-[44%] h-[8vh] bg-[orange] flex flex-row justify-center items-center rounded-[3px] gap-[1rem] text-[white] my-[10%] lg:my-[5px]">
          <a href="https://www.rentalcars.com">Rent a vehichle</a>
          <RiArrowDropRightLine className="fill-white w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Rent_vehichle;
