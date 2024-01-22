import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import speaker from "../assets/—Pngtree—vector speaker icon_3779063.png";

const Mail = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
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
    <div
      // data-aos="fade-up"
      className="bg-[#d7e7ff] mail border-[#d1a9db] w-[100%] lg:h-[40vh] lg:flex lg:flex-row py-[3%] z-[-1]"
    >
      <div className=" flex-col justify-center  items-center  lg:flex lg:flex-row lg:w-[40%] lg:ml-[13%]">
        <div className="hidden lg:flex flex-col justify-center items-center lg:w-[20%]">
          <img
            src={speaker}
            alt=""
            className=" object-contain w-[9rem] lg:w-[30rem] mt-[2%] lg:origin-bottom rotate-[-28deg] lg:h-[17vh]"
          />
        </div>
        <div className=" w-[100%] text-center lg:text-[1.3rem] font-bold lg:text-left mt-[6%] ">
          <p className="lg:w-[60%]  w-[90%] text-[1.5rem]">
            Want to get the latest travel news and deals?
          </p>

          <p className="lg:w-[90%] text-[0.95rem] mt-[0.5rem] text-[grey] leading-[14px] font-light mb-[1rem]">
            Enter your email and we'll send them your way.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleClick}
        className="flex flex-col ml-[1rem] lg:w-[45%] lg:flex lg:flex-row gap-[0.5rem] lg:items-center"
      >
        <input
          type="text"
          name="mail"
          placeholder="Your email..."
          className="w-[95%] lg:w-[60%] h-[10vh] pl-[30px] bg-white outline-none rounded-[3px]"
        />
        <button
          type="submit"
          className="w-[60%] lg:w-[24%] rounded-[3px] h-[10vh] bg-[orange] outline-none text-[white]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Mail;
