import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import iata from "../assets/kisspng-international-air-transport-association-airline-tr-travel-agency-5ac2ffad33e078.2916961215227288772125.png";

const Collaboration_Company = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="w-[100%] h-[30vh] hidden lg:flex">
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-[2px] lg:flex flex-row lg:gap-[1rem] mt-[1%] justify-center items-center">
        <img
          src={iata}
          alt=""
          className="w-[3rem] h-10 lg:w-[5%] lg:h-[6vh] lg:mr-[3%] "
        />
        <img
          src="https://pbs.twimg.com/profile_images/1324492926542598146/tQCrV1h0_400x400.jpg"
          alt=""
          className="w-[3rem] h-10 lg:w-[5%] lg:h-[8vh] rounded-[20%]"
        />
        <img
          src="https://roi4cio.com/uploads/roi/company/Amadeus_Russia.jpg"
          alt=""
          className="w-[7rem] h-28 lg:w-[15%] lg:h-[17vh]"
        />
        <img
          src="https://tukuz.com/wp-content/uploads/2020/10/flutterwave-logo-vector.png"
          alt=""
          className="w-[7rem] h-20 lg:w-[13%] lg:h-[15vh]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Interswitch_logo.svg/2560px-Interswitch_logo.svg.png"
          alt=""
          className="w-[5rem] h-8 ml-6 lg:w-[10%] lg:h-[5vh]"
        />
      </div>
    </div>
  );
};

export default Collaboration_Company;
