import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scholar from "../assets/graduation-logo-C3C62168C6-seeklogo.com-removebg-preview.png";
import protocol from "../assets/protocol.jpg";
import visa from "../assets/visa.jpg";
const Services = ({ navigate }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data = [
    {
      img: scholar,
      head: "International scholarship",
      discription:
        "We offer substantial Educational Support for Scholarsip aspirant soft landing",
      path: "",
    },
    {
      img: protocol,
      head: "Protocol service",
      discription: "Expedited and Smooth passage through Airport imigration",
      path: "",
    },
    ,
    {
      img: visa,
      head: "Visa Assistance",
      discription:
        "all inclusive visa assistance in a timely,and secure manner",
      path: "visa_assistance",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 1000,
    autoplaySpeed: 5000,
    // cssEase: "linear",
    className: "center",
    centerPadding: "610px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center md:my-[15%] lg:my-[5%]">
      <div
        data-aos="fade-up"
        className="w-[99%] lg:w-[55%] lg:my-[5%] bg-white"
      >
        {" "}
        <Slider {...settings}>
          {data.map(({ img, discription, head }, i) => (
            <button
              key={i}
              onClick={(e) => navigate("")}
              className=" w-[100%] h-[55vh] md:h-[65vh] lg:h-[55vh] lg:shadow-xl flex flex-col justify-center items-center my-[5%] pt-[5%] px-[5%]"
            >
              <img
                src={img}
                alt=""
                className="w-[160px]  h-[160px]  object-contain rounded-[100px] shadow-xl ml-[23%] my-[5%]"
              />
              <div className="flex flex-col text-center">
                <p className="text-[1.1rem] font-extrabold">{head}</p>
                <p className="lg:px-[2%] lg:mt-[1rem] text-[grey]">
                  {discription}
                </p>
              </div>
            </button>
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
