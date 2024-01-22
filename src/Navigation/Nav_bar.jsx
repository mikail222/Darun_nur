import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClear } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import SlideShow from "../Service/SlideShow";
import { Link, useNavigate } from "react-router-dom";
import darunnur from "../assets/darun-nur-low-resolution-logo-color-on-transparent-background.png";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const Nav_bar = ({ setHotelDetails, setFlightDetails }) => {
  const currentUser = auth.currentUser;
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log(" Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const nav = [
    { Hotel: "Hotel" },
    { visa: "Saudi visa" },
    { vacation: "Vacation" },
    { scholarship: "Publication" },
    { affilate: "Become an afillation" },
    { about_us: "About Darul-Nur" },
  ];
  const mobile_nav = [
    { Hotel: "Hotel" },
    { visa: "Saudi visa" },
    { vacation: "Vacation" },
    { scholarship: "Publication" },
    { afilate: "Become an afillation" },
    { about_us: "About Darul-Nur" },
    { login: "Login" },
    { sign_up: "Create Account" },
  ];

  return (
    <div>
      <div className=" hidden bg-[white] top-0  w-[100%] cursor-pointer h-[10vh] lg:flex flex-row items-center justify-between  lg:border-b-[2px] border-[#f7f7f7]">
        <SlideShow />
        <div>
          <button onClick={() => navigate("/")} className="outline-0">
            <img
              src={darunnur}
              alt=""
              className="w-[20rem] h-[30px] object-contain"
            />
          </button>
        </div>
        <div className="flex flex-row ">
          {nav.map(
            ({ Hotel, visa, vacation, affilate, about_us, scholarship }, i) => (
              <div
                key={i}
                className=" text-[#0f0326] rounded-[20%] text-[0.95rem] p-[0.55rem]"
              >
                <p
                  onClick={() =>
                    (navigate("/") && setHotelDetails(true)) ||
                    setFlightDetails(false)
                  }
                >
                  {Hotel}
                </p>
                <p onClick={() => navigate("/Visa_assistance")}>{visa}</p>
                <p onClick={() => navigate("/Vacation")}>{vacation}</p>
                <p onClick={() => navigate("/Affilate")}>{affilate}</p>
                <p onClick={() => navigate("/About_us")}>{about_us}</p>
                <p onClick={() => navigate("/Scholarship")}>{scholarship}</p>
              </div>
            )
          )}
        </div>
        <div className="flex flex-row gap-[1.5rem] items-center">
          {currentUser === null ? (
            <a
              onClick={() => navigate("/Login")}
              className="outline-none text-[0.95rem] text-[#01004d] font-bold"
            >
              Login
            </a>
          ) : (
            <a
              onClick={() => navigate("/Dashboard")}
              className="outline-none text-[0.95rem] text-[#01004d] font-bold"
            >
              Log out
            </a>
          )}
          <a
            onClick={() => navigate("/Sign_in")}
            className="outline-none text-[0.95rem]  p-[0.65rem] mb-[0.20rem] bg-[orange] rounded-[3px] mr-[5rem] font-bold px-[0.95rem] text-white"
          >
            Create account
          </a>
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center lg:hidden  bg-white ">
        {show ? (
          <div className=" md:flex flex-col w-[100%] h-[100vh] bg-[white] border-b-[1px] border-r-[1px] overflow-hidden z-[2] fixed">
            <div className="head h-[4rem] flex flex-row  justify-around items-center px-[5%]">
              <button onClick={() => navigate("/")} className="outline-0">
                <img
                  src={darunnur}
                  alt=""
                  className="w-[60%] lg:w-[15rem] object-contain h-[30px]"
                />
              </button>
              <MdOutlineClear
                title="Menu Bar"
                onClick={(e) => setShow(!show)}
                className=" w-[30px] h-[30px] fill-[gray] rounded-[50px] p-[3px]"
              />
            </div>

            <div className="flex flex-col justify-center  text-left mt-[5%] ml-[1rem]">
              {mobile_nav.map(
                (
                  {
                    Hotel,
                    visa,
                    vacation,
                    sign_up,
                    login,
                    afilate,
                    scholarship,
                    about_us,
                  },
                  i
                ) => (
                  <div
                    key={i}
                    className="flex flex-row justify-between my-[0.2rem] px-[5%]"
                  >
                    <div className="nav_list  flex flex-col gap-[0.25rem] justify-start  z-[1] ">
                      <p
                        onClick={() =>
                          (navigate("/") && setHotelDetails(true)) ||
                          setFlightDetails(false)
                        }
                      >
                        {Hotel}
                      </p>
                      <p
                        onClick={() =>
                          navigate("/Visa_assistance") || setShow(!show)
                        }
                      >
                        {visa}
                      </p>
                      <p
                        onClick={() => navigate("/Vacation") || setShow(!show)}
                      >
                        {vacation}
                      </p>
                      <p
                        onClick={() => navigate("/About_us") || setShow(!show)}
                      >
                        {about_us}
                      </p>
                      <p
                        onClick={() =>
                          navigate("/Scholarship") || setShow(!show)
                        }
                      >
                        {scholarship}
                      </p>
                      <p
                        onClick={() => navigate("/Affilate") || setShow(!show)}
                      >
                        {afilate}
                      </p>
                      <p onClick={() => navigate("/Login") || setShow(!show)}>
                        {login}
                      </p>
                      <nav
                        onClick={() => navigate("/Sign_in") || setShow(!show)}
                      >
                        {sign_up}
                      </nav>
                    </div>

                    <RiArrowDropRightLine className="w-[30px] h-[35px]" />
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="w-[100%]">
            {" "}
            <SlideShow />
            <div className="flex flex-row h-[10vh] justify-between items-center lg:mt-[3rem] mx-[4%]">
              <button onClick={() => navigate("/")} className="outline-0">
                <img
                  src={darunnur}
                  alt=""
                  className="w-[60%] object-contain lg:w-[15rem] h-[30px]"
                />
              </button>
              <RxHamburgerMenu
                title="Menu Bar"
                onClick={(e) => setShow(!show)}
                className="w-[25px] h-[25px] fill-[gray]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav_bar;
