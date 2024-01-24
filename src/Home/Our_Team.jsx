import React, { useEffect, useState } from "react";
import img from "../assets/kaahaba.jpg";
import imge from "../assets/Frame 1000001695.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import welFare from "../assets/186118689_290787399131058_2896759269810965752_n.jpg";
import { SiLinkedin } from "react-icons/si";
import An_nur from "../assets/12801228_1014040375351303_8463380366859156510_n.jpg";
import Mikail from "../assets/mikail.png";
import { MdEmail } from "react-icons/md";

const Our_Team = () => {
  const Team = [
    {
      images: An_nur,
      tittle: "Alh",
      name: "Ibraheem",
      lastName: "Jimoh",
      role: "Chief  Executive Officer ",
      experence: "Former Chairman Muslim Welfare  Board,Ondo State  Nigeria ",
    },

    {
      images: welFare,
      tittle: "Alh",
      name: "Idayat",
      lastName: "Jimoh",
      role: "Welfare Officer",
      experence: "Excellent Humanitarian service delivery skill and deligency",
    },
    {
      images: img,
      tittle: "Ustaz",
      name: "Ismail",
      lastName: "Jimoh",
      role: "Secretary",
      experence: "Outstanding Managerial Record",
    },
    {
      images: Mikail,
      name: "Mikail",
      lastName: "Abdulraheem",
      role: "Web Developer",
      experence:
        "4 years of Professional User experience technological development",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    className: "center",
    centerPadding: "610px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
      <p className="text-[orange]">THE PILLARS</p>
      <h2 className="text-[#133063] mb-[5%]">OUR TEAM </h2>
      <div className="w-[96%] lg:w-[55%] bg-white">
        <Slider {...settings}>
          {Team.map(({ images, lastName, role, experence, name }) => (
            <div className="flex flex-col py-[5%]">
              <div className="bg-[white] shade flex flex-col justify-center items-center w-[100%] h-[35vh]">
                <img
                  src={images}
                  alt=""
                  className="w-[180px] h-[180px]  rounded-[100px] bg-[orange] object-cover  "
                />
              </div>
              <div className="shade w-[100%] h-[25vh]  text-center bg-white rounded-[2px] my-[2%] py-[5%] px-[5px]">
                <h5 className="leading-10">
                  {name} {lastName}
                </h5>
                <p className="text-[1rem]">{experence} </p>
                <p className="text-[1.5rem]">{role} </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Our_Team;
