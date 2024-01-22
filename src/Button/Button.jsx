import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Button = ({ progressTrack }) => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center text-[0.90rem]">
      {" "}
      <button
        type="submit"
        className="btnDisable w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem] "
      >
        {progressTrack !== null && progressTrack < 100 ? (
          <i>loading...</i>
        ) : (
          "Create Account"
        )}
        <RiArrowRightSLine className=" w-[20px] h-[25px] ]" />
      </button>
    </div>
  );
};

export default Button;
