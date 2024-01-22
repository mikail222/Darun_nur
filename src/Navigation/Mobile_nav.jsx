import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import SlideShow from "../Service/SlideShow";

const Mobile_nav = ({ show, setShow }) => {
  return (
    <div>
      <CgMenuGridR
        className="menuBar w-[4rem] h-[2rem] mr-[2rem]"
        title="Menu Bar"
        onClick={(e) => setShow(!show)}
      />
    </div>
  );
};

export default Mobile_nav;
