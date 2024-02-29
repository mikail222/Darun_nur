import React, { useState, memo } from "react";
import Nav_bar from "../Navigation/Nav_bar";
import publication from "../assets/publication.jpg";
import cbn from "../assets/Central-Bank-of-Nigeria-CBN.svg";

import { MdCall, MdCheckBox, MdEmail, MdHome } from "react-icons/md";
import print from "../assets/printing.jpg";
import printe from "../assets/paints.jpg";
import prints from "../assets/print.jpg";
import Slider from "react-slick/lib/slider";
import Footer from "../Footer/Footer";
import Mail from "../Service/Mail";
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import Form from "../Button/Forms/Form";

const Scholarship = () => {
  const advert = [
    {
      imge: print,
      name: "Company  Journal",
      content:
        "we print all text  material needed for official assignment with quality textures,color  blending and  fascinating font",
    },
    {
      imge: printe,
      name: "Company  Journal",
      content:
        "we print all text  material needed for official assignment with quality textures,color  blending and  fascinating font",
    },

    {
      imge: prints,
      name: "Megal Bill board ",
      content:
        "For bill board advert portraits with quality  materials and durability  please reffer to  An-nur ",
    },
    {
      imge: publication,
      name: "Banners and  portrait",
      content:
        "We also quality assurance  touch to  your  advert portraits and  banners for events  and Business.",
    },
  ];
  const client = [
    {
      imge: cbn,
      name: "Central Bank of Nigeria ",
      content:
        "ratione ipsam ipsum utmolestiae laboriosam fugiat. Ab laborum explicabo neque vitae reconsectetur.",
      bus_type: "Institution",
    },
    {
      imge: prints,
      name: "Al Hikmah University ilorin",
      content:
        "ratione ipsam ipsum utmolestiae laboriosam fugiat. Ab laborum explicabo neque vitae reconsectetur.",
      bus_type: "Academics",
    },
    {
      imge: publication,
      name: "Darun-nur  Travels and Tour",
      content:
        "ratione ipsam ipsum utmolestiae laboriosam fugiat. Ab laborum explicabo neque vitae reconsectetur.",
      bus_type: "Agency",
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
    <div>
      <Nav_bar />
      <div className="printBg flex flex-col px-[5%] py-[5%] items-end text-[white]  text-end">
        <div className=" lg:w-[50%] ">
          <h1 className="lg:text-[2.6rem] ">An Nur Publication Service </h1>
          <p>
            for all sort of publication related business do reffer to us as we
            are well known with high level of integrity and professionalism in
            dealing with our client
          </p>
          <button type="button " className="buttonbg">
            About us
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-[5%] w-[95%] lg:w-[60%] flex flex-col justify-center">
          <p className="text-[orange]">ABOUT US</p>
          <h2 className="text-[#133063]">
            WELCOME TO OUR PUBLICATION COMPANY PAGE
          </h2>

          <p className="border-l-[2px] my-[5%] border-[orange] px-[25px]">
            The company that best suite your expection and anticipation in term
            of quality assurance in service delivery
          </p>
          <div>
            <div className="flex flex-row items-center  gap-[5px]">
              <MdCheckBox className="fill-[orange]" />
              <p>Printing for Business brand</p>
            </div>{" "}
            <div className="flex flex-row items-center  gap-[5px]">
              <MdCheckBox className="fill-[orange]" />
              <p>Megal Billboard Printing</p>
            </div>{" "}
            <div className="flex flex-row items-center  gap-[5px]">
              <MdCheckBox className="fill-[orange]" />
              <p>Banners Printing service</p>
            </div>{" "}
            <div className="flex flex-row items-center  gap-[5px]">
              <MdCheckBox className="fill-[orange]" />
              <p>Company and Organization Journal publication</p>
            </div>{" "}
            <button type="button " className="buttonbg">
              About us
            </button>
          </div>
          <img src={print} alt="" />
        </div>
      </div>
      <div className="printBg h-[30vh] my-[5%]  flex flex-col lg:justify-end lg:items-end  justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[65%] lg:w-[45%]">
          {" "}
          <h3 className="lg:px-[10rem] text-white text-center">
            PREPARE YOUR PRINTING SERVICE
          </h3>
          <p className="text-white  text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          </p>
          <button type="button " className="buttonbg">
            Contact Now
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center  items-center my-[5%] w-[96%] lg:w-[60%]">
          <p className="text-[orange]">SERVICE</p>
          <h2 className="text-[#133063]">OUR LATEST SERVICE</h2>
          <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
            <div className="w-[96%] lg:w-[85%]  bg-white">
              <Slider {...settings}>
                {advert.map(({ imge, content, name }, i) => (
                  <div key={i} className="flex flex-col">
                    <img
                      src={imge}
                      alt=""
                      className="w-[100%] h-[35vh]  rounded-[2px] bg-[orange] object-cover"
                    />
                    <div className="shade text-center bg-white rounded-[2px] my-[2%] py-[5%] px-[5px]">
                      <h5 className="leading-10">{name}</h5>
                      <p className="text-[gray]  text-[1rem]">{content} </p>
                      <button type="button " className="buttonbg ">
                        Contact Now
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-[100%] lg:my-[15%]">
            <div className="  w-[100%] flex flex-col lg:flex-row justify-between">
              <div className="w-[100%]">
                <p className="text-[orange]">GALLERY</p>
                <h2 className="text-[#133063]">OUR PROJECTS</h2>
              </div>
              <button className="buttonbg w-[40%] lg:w-[16vw]">
                View All Projects
              </button>
            </div>
            <div className=" lg:w-[100%] flex flex-col justify-center items-center my-[5%]">
              <div className=" w-[95%]  lg:w-[50%] flex flex-row justify-around gap-[.5rem]  lg:gap-[1rem] projBtn">
                <button>Banner</button>
                <button>Journal</button>
                <button>Portrait</button>
                <button>Jotters</button>
              </div>
            </div>
            <div className="projectDemo w-[100%]">
              {advert.map(({ imge }, i) => (
                <div key={i}>
                  <img
                    src={imge}
                    alt=""
                    className="w-[100%] h-[50vh]  rounded-[2px] bg-[orange] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] my-[5%]  ">
            <div className="  w-[100%] flex flex-col  lg:flex-row justify-between">
              <div className="w-[100%]">
                <p className="text-[orange]">TESTIMONIAL</p>
                <h2 className="text-[#133063]">OUR CLIENT</h2>
              </div>
              <button className="buttonbg lg:w-[16vw]">View All Client</button>
            </div>

            <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
              <div className="w-[99%] lg:w-[85%] bg-white">
                <Slider {...settings}>
                  {client.map(({ imge, content, name, bus_type }, i) => (
                    <div
                      key={i}
                      className=" w-[100%] lg:h-[58vh] shade flex flex-col justify-center items-center my-[5%] pt-[5%] px-[5%]"
                    >
                      <img
                        src={imge}
                        alt=""
                        className="w-[100px] h-[100px]  rounded-[100px] bg-[orange] object-cover  ml-[33%] my-[5%]"
                      />
                      <div className=" text-center bg-white rounded-[2px] my-[2%] py-[5%] px-[5px]">
                        <p className="text-[gray]  text-[1rem]">{content} </p>
                        <h5>{name}</h5>
                        <p className="text-[orange]">{bus_type}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactbg w-[100%] lg:h-[100%] flex flex-col justify-center items-center  py-[5%]">
        <p className="text-[orange]">CONTACT US</p>
        <h2 className="text-[#133063]">GET IN TOUCH</h2>
        <div className="bg-[transparent] shade  w-[95%] lg:w-[35%] h-[60%] flex flex-col gap-[1rem] p-[2%] text-[#d60052] my-[5%]">
          <h3>OUR ADDRESS</h3>
          <div className="address">
            <MdHome className="contactIcon" />
            <p>7B iwaro Lane Isolo-Akure ondo state Nigeria</p>
          </div>
          <div className="address">
            <MdCall className="contactIcon" />
            <p>+234-8124330616</p>
          </div>
          <div className="address">
            <MdEmail className="contactIcon" />
            <p> darunnur@gmail.com </p>
          </div>
          <p>Quick Connect</p>
          <div className="flex  flex-row items-center gap-[3%]">
            <BsFacebook className="contacticon" />
            <BsLinkedin className="contacticon" />
            <BsTwitter className="contacticon" />
            <BsWhatsapp className="contacticon" />
          </div>
        </div>
        <Form />
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default memo(Scholarship);
