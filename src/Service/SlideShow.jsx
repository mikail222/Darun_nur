import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SlideShow = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="slider">
        <div className="slide-container text-white flex flex-col items-center text-right">
          <p className="text-[2.90rem]  lg:text-[1rem] "></p>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
