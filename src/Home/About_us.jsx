import React from "react";
import Footer from "../Footer/Footer";
import Nav_bar from "../Navigation/Nav_bar";
import An_nur from "../assets/12801228_1014040375351303_8463380366859156510_n.jpg";
import welfare from "../assets/186118689_290787399131058_2896759269810965752_n.jpg";
import mikail from "../assets/mikail.png";
import kaaba from "../assets/kaahaba.jpg";

import Mail from "../Service/Mail";
import { BsInstagram, BsStars, BsTwitter, BsWhatsapp } from "react-icons/bs";

import kaaba2 from "../assets/hujjaj.jpg";
import sample from "../assets/fabian-joy-YZrgAkpbXJQ-unsplash.jpg";
import satisfy from "../assets/satisfaction.svg";
import { BiCheck, BiPhoneIncoming } from "react-icons/bi";
import Rent_vehichle from "../Service/Rent_vehichle";
import Our_Team from "./Our_Team";
import Form from "../Button/Forms/Form";

const About_us = () => {
  const Team = [
    {
      images: An_nur,
      tittle: "Alhaji",
      name: "Ibraheem",
      lastName: "Jimoh",
      role: "Chief  Executive Officer ",
      experence: "Former Chairman Muslim Welfare  Board,Ondo State  Nigeria ",
    },

    {
      images: welfare,
      tittle: "Alhaja",
      name: "Idayat",
      lastName: "Jimoh",
      role: "Welfare Officer",
      experence: "Excellent Humanitarian service delivery skill and deligency",
    },
    {
      images: kaaba,
      tittle: "Ustaz",
      name: "Ismail",
      lastName: "Jimoh",
      role: "Secretary",
      experence: "Outstanding Managerial Record",
    },
    {
      images: mikail,
      name: "Mikail",
      lastName: "Abdulraheem",
      role: "Web Developer",
      experence:
        "4 years of Professional User experience technological development",
    },
  ];

  return (
    <div>
      <Nav_bar />
      <div className="brand2">
        <div className="brandoverlay  flex  flex-col justify-center items-center">
          <div className="alignStars text-center py-[2%]">
            <p className="lg:tracking-[5px] text-[.8rem] lg:text-[1.2rem] md:text-[1.2rem]">
              ABOUT YOUR FAVOURITE TRAVELS AND TOUR COMPANY
            </p>
            <h1>A REGISTERED & ACCREDITED </h1>
            <h1>HAJJ & UMRAH TRAVELS AND TOUR COMPANY</h1>
            <h3>CERTIFIED BY: CORPERATE AFFAIRS COMMISSION </h3>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col lg:flex-row justify-center  gap-[1rem] px-[5%] my-[5%]">
        <div className="productDesign">
          <div className="product1">
            <img src={sample} alt="" className="productImg" />
            <BsStars className="BsStar" />
          </div>
          <div className="faqProduct2">
            <BsStars className="BsStar2" style={{ marginTop: "15rem" }} />
            <img src={kaaba2} alt="" className="cleanImg " />
          </div>

          <img
            src={satisfy}
            alt=""
            className="w-[10rem] h-[10rem]  relative  top-[-260px] right-[-400px] z-[1]"
          />
        </div>
        <div className="port w-[100%] lg:w-[50%] text-[#133063]">
          <p className="lg:font-semibold">ABOUT US</p>
          <h2 className="lg:w-[85%] font-bold my-[5%] lg:my-[5px]">
            WE ARE EXPERIENCED TRAVELS AND TOUR COMPANY WITH EXECELLENT
            HOSPITALITY
          </h2>
          <p className="lg:w-[80%] md:w-[50%]">
            At <b>DARUN-NUR</b> we provide services with TEAM of skilled and
            highly professional staff to meet the demand of our reputable Client
            ranging from Visa assistance,from Home to Home accommodation,100%
            guidiance and navigation,Vacation Package,Scholarship etc
          </p>
          <p className="w-[60%] my-[0.7rem]">
            With <b>DARUN-NUR</b>, you get;
          </p>
          <div className="offer">
            <div>
              <BiCheck className="icon" />
              <p>100% Satisfaction Guarantee</p>
            </div>
            <div>
              <BiCheck className="icon" />
              <p>Experence & Expertise</p>
            </div>
            <div>
              <BiCheck className="icon" />
              <p>Variety Service offered</p>
            </div>
            <div>
              <BiCheck className="icon" />
              <p>Free Life Time Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vmContainer">
        <div className="vmOverlay flex flex-col items-center w-[100%] pt-[3%] lg:h-[100vh]">
          <div className=" vm  flex lg:flex  flex-col   lg:flex-row lg:gap-[2%] gap-[1rem] justify-center  items-center w-[100%] pt-[3%] h-[100%] lg:h-[50vh] md:grid  md:grid-cols-3  md:place-items-center">
            <div>
              <h4>VISION</h4>
              <p>
                We stand to facilitate the connection of Hujjaj with Hajj and
                ensure the diligent observation of Hajj principle with our
                pilgrims to direct every effort toward acheiving Hajj rites
                acceptance by Allah
              </p>
            </div>
            <div>
              <h4>MISSION</h4>
              <p>
                To direct all organizational effort towards outstanding
                hospitality and simplicity for our pilgrims client motivation
                and steadfastness to achieve fantastic inner energy directed
                towards the spiritual task accommplishment
              </p>
            </div>
            <div>
              <h4>PLEDGE</h4>
              <p>
                We shall always stand to maintain the standard principle with
                our client
              </p>
              <p>
                never shall we give priority to anything not greater than the
                wish of Allah, which may tourment or jeopardise the trust of our
                reputable client
              </p>
            </div>
          </div>
          <h4 className="text-[2rem] text-white font-bold  my-[10%] lg:my-[2%]">
            PROFESSIONALISM
          </h4>

          <div className="value flex  flex-col md:grid  md:grid-cols-2  md:place-items-center lg:flex lg:flex-row lg:gap-[1%] justify-center gap-[1rem] my-[1rem] lg:my-[0px] md:w-[100%] w-[85%] lg:w-[80%] pt-[3%] ">
            <div>
              <BiCheck className="icon" />
              <h5>Task Accomplishment</h5>
            </div>
            <div>
              <BiCheck className="icon" />
              <h5> Hospitality</h5>
            </div>
            <div>
              <BiCheck className="icon" />
              <h5>Standard Welfarism</h5>
            </div>
            <div>
              <BiCheck className="icon" />
              <h5>Spiritual Motivation</h5>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col mt-[4%]">
        <div className="flex flex-col justify-center  items-center">
          <div></div>
          <div className="flex flex-col mt-[10%] w-[100%] ">
            <Our_Team />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex">
        <Our_Team />
      </div>
      <Rent_vehichle />
      <Form />
      <Mail />
      <Footer />
    </div>
  );
};

export default About_us;
