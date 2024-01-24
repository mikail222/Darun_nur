import React, { useEffect, useState } from "react";
import Nav_bar from "../Navigation/Nav_bar";
import videoBg from "../assets/video-1.mp4";
import vacateImg from "../assets/pexels-pixabay-53537.jpg";
import excursionImg from "../assets/excursion.jpg";
import excursionImag from "../assets/excursions.jpg";
import excurse from "../Accessibility/college-university-students-group-young-happy-people-standing-isolated-white-background/students_09.jpg";
import excursed from "../Accessibility/tour-guide-cartoon-character-telling-tourists-about-city/tour-guide-cartoon-character-telling-tourists-about-city/Tour guide cartoon character telling tourists about city.jpg";
import excurs from "../Accessibility/tropical-vacation-air-travel-service-composition/6990.jpg";
import vacateImg5 from "../assets/pexels-alba-chiara-oldoini-2567550.jpg";
import vacateImg6 from "../assets/pexels-oleksandr-p-321526.jpg";
import vacateImge from "../assets/pexels-sahil-prajapati-974320.jpg";
import vacateImag from "../assets/pexels-tyrrel-burns-17186683.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vacateImgs from "../assets/pexels-zakaria-boumliha-2827374.jpg";
import Footer from "../Footer/Footer";
import Mail from "../Service/Mail";
import FAQs from "./FAQs";

const Vacation = () => {
  const places = [
    {
      imge: vacateImg,
      name: "",
      content: "",
    },
    {
      imge: vacateImag,
      name: "",
      content: "",
    },
    {
      imge: vacateImge,
      name: "",
      content: "",
    },
    {
      imge: vacateImgs,
      name: "",
      content: "",
    },
    {
      imge: vacateImg5,
      name: "",
      content: "",
    },
    {
      imge: vacateImg6,
      name: "",
      content: "",
    },
  ];
  const excursion = [
    {
      imge: excursionImg,
      name: "",
      content: "",
    },
    {
      imge: excursionImag,
      name: "",
      content: "",
    },
    {
      imge: excurse,
      name: "",
      content: "",
    },
  ];
  const [slide, setSlide] = useState(0);
  const pre = () => {
    const isSlide = slide === 0;
    const newSlide = isSlide ? places.length - 1 : slide - 1;
    setSlide(newSlide);
  };
  const next = () => {
    const isLastSlide = slide === places.length - 1;
    const newSlide = isLastSlide ? 0 : slide + 1;
    setSlide(newSlide);
  };
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

  // useEffect(() => {
  //   const next = () => {
  //     const isLastSlide = slide == 0;
  //     const newSlide = !isLastSlide ? slide + 1 : places.length - 1;
  //     setSlide(newSlide);
  //   };
  //   setInterval(() => {
  //     next();
  //   }, 5000);
  // }, []);

  const slides = {
    backgroundImage: `url(${places[slide].imge})`,
    backgroundsize: "50%",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };

  return (
    <div>
      <Nav_bar />
      <div className="w-[100%] h-[100%] ">
        <div className="flex flex-col-reverse  items-center lg:items-start lg:h-[90vh] md:h-[50vh] lg:top-[-0px] md:top-[-0px] top-[-105px] lg:w-[100%] lg:flex relative z-[-1] lg:mb-[5rem]">
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className="object-cover w-[100%]  lg:h-[100%] h-[60vh] lg:top-[-0px]"
          ></video>
          <div className=" text-white lg:w-[50%] relative md:top-[400px] top-[260px] lg:top-[560px] p-[5%]">
            <p className="lg:tracking-[5px] text-[.8rem] lg:text-[1.2rem] md:text-[1.2rem]">
              ABOUT YOUR FAVOURITE PLACE FOR TOUR
            </p>
            <h1>LET PLAN YOUR VACATION TODAY WITH YOUR LOVE ONES,</h1>
            <h1>LOCALLY AND INTERNATIONAL</h1>
          </div>
        </div>
        <div className="w-[100%] h-[100%] flex flex-col lg:flex-row gap-[3%] lg:gap-[0px]">
          <div className="px-[5%] lg:px-[0px] lg:w-[50%] lg:pl-[6rem]">
            <p className="text-[orange] font-bold text-[1.2rem] my-[5%]">
              ABOUT US
            </p>
            <h1 className="font-bold text-[2.3rem] lg:text-[3rem] text-[#133063]">
              Explore All Corners of The World With Us
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <button className="bg-[orange]  rounded-[25px] text-white px-[5%] py-[5px] my-[5%] font-bold">
              Get in touch
            </button>
          </div>

          <div className=" vacate lg:w-[50%] flex flex-row lg:justify-start lg:items-start gap-[5%] px-[5%] my-[5%]">
            <img src={vacateImg} alt="" />
            <img src={vacateImgs} alt="" className=" relative lg:top-[3rem]" />
          </div>
        </div>
        <div className="my-[15%]">
          <div className="w-[100%] h-[100%] flex lg:flex-row flex-col gap-[3%]  ">
            <div className="px-[5%] lg:w-[50%] lg:pl-[6rem]">
              <p className="text-[orange] text-[1.2rem] font-bold my-[5%]">
                WHAT WE SERVE
              </p>
              <h1 className="font-bold text-[2.3rem] lg:text-[3rem] text-[#133063]">
                We Provide Top Destinations
              </h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <div className="w-[50%] flex flex-row  justify-center">
              <img
                src={excurs}
                alt=""
                className="lg:w-[80%] hidden lg:flex lg:h-[80%]"
              />
            </div>
          </div>
          <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
            <div className="w-[95%] bg-white">
              <Slider {...settings}>
                {places.map(({ imge, content }) => (
                  <div className=" flex flex-col">
                    <img
                      src={imge}
                      alt=""
                      className="w-[100%] h-[65vh] bg-[orange] object-cover"
                    />
                    <h2 className="lg:text-[2.5rem]  leading-10">
                      Enjoy the beauty of Nature
                    </h2>
                    <h4 className="text-[gray]  text-[1.5rem]">{content} </h4>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-[100%] h-[100%] flex lg:flex-row-reverse flex-col gap-[3%]  ">
            <div className="px-[5%] lg:w-[50%] lg:pl-[6rem]">
              <p className="text-[orange] text-[1.2rem] font-bold my-[5%]">
                WHAT WE SERVE
              </p>
              <h1 className="font-bold text-[2.3rem] lg:text-[3rem] text-[#133063]">
                We Foster the spirit of learning by Excursion Service
              </h1>
              <p>
                Inspire the learning ability of your pupils,student and children
                today by cutting a deal with Darun-nur excursion service
                Department for well organised excursion to some resourceful
                environment
              </p>
              <p>
                where carrier development prevail and asimilation descend far
                from the achievement rate of the four wall of the class
              </p>
            </div>
            <div className="w-[50%] flex flex-row  justify-center items-center">
              <img
                src={excursed}
                alt=""
                className="w-[60%] hidden lg:flex h-[60%]"
              />
            </div>
          </div>
          <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
            <div className="w-[95%] bg-white">
              <Slider {...settings}>
                {excursion.map(({ imge, content }) => (
                  <div className="flex flex-col">
                    <img
                      src={imge}
                      alt=""
                      className="w-[100%] h-[65vh] bg-[orange] object-cover"
                    />
                    <h2 className="lg:text-[2.5rem]  leading-10">
                      Enjoy the beauty of Excursion
                    </h2>
                    <h4 className="text-[gray]  text-[1.5rem]">{content} </h4>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="printBgs h-[30vh] flex flex-col lg:justify-start lg:items-start  justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[65%] lg:w-[45%]">
          {" "}
          <h3 className="lg:px-[10rem] text-center">
            PREPARE YOUR VACATION TODAY
          </h3>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          </p>
          <button type="button " className="buttonbg  bg-[orange]">
            Contact Now
          </button>
        </div>
      </div>
      <FAQs />
      <Mail />
      <Footer />
    </div>
  );
};

export default Vacation;
