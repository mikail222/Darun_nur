import React from "react";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { SiFacebook, SiIata } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Mail from "../Service/Mail";
import { MdEmail, MdMarkEmailUnread, MdOutlineEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footbg">
      <div className="footOverlay w-[100%] h-[100%] lg:h-[87vh] flex flex-col lg:flex-row  lg:justify-between lg:last:gap-[3rem]">
        <div className="lg:w-[70%] mx-[10%] h-[100%] lg:h-[40vh] flex flex-row lg:gap-[4rem] justify-center mt-[7%] lg:mr-[3rem] text-white text-[0.95rem]  gap-[30%] ml-[12%] lg:ml-0">
          <div className="flex flex-col leading-[2.5rem] text-[1.2rem] text-left lg:leading-[2rem]">
            <p className="  lg:text-[1.3rem] font-bold">Services</p>
            <a href="https://#">Flights</a>
            <a href="https://#">Hotels</a>
            <a href="https://#">Visa</a>
            <a href="https://#">Deals</a>
            <a href="https://#">Packages</a>
          </div>
          <div className="flex flex-col gap-[2rem] lg:flex-row ">
            <div className="flex flex-col text-[1.2rem] text-left leading-[2.5rem] lg:leading-[2rem]">
              <p className=" lg:text-[1.3rem] font-bold leading-[2rem]">
                Account
              </p>
              <a href="https://#">My Account</a>
              <a href="https://#"> Affilations</a>
            </div>
            <div className="flex flex-col text-[1.2rem] text-left  leading-[2.5rem] lg:leading-[2rem]">
              <p className="text-[1.7rem] lg:text-[1.5rem] font-bold">
                Darun-Nur
              </p>
              <a href="https://#">About us</a>
              <p
                onClick={() => navigate("/Contact")}
                className="cursor-pointer"
              >
                Contact us
              </p>
              <a href="https://#">Feedback</a>
            </div>
          </div>
        </div>
        <div className=" lg:w-[45%] lg:h-[8rem] lg:ml-[3rem] flex flex-col lg:mr-[5%] lg:items-left mb-[10%] lg:mt-[6%]">
          <div className=" media ">
            <a
              href="http://"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <GrFacebookOption className="w-[15px] h-[15px] fill-black" />
            </a>

            <a
              href="http://"
              target="_blank"
              title="Instagram"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <BsInstagram className="w-[15px] h-[15px] fill-black" />
            </a>
            <a
              href="mailto:darunnur@gmail.com"
              target="_blank"
              title="Email"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <MdOutlineEmail className="w-[15px] h-[15px] fill-black" />
            </a>
            <a
              href="http://"
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer"
              className="bg-white rounded-[100%] items-center p-[0.30rem]"
            >
              <FiTwitter className="w-[15px] h-[15px] fill-black" />
            </a>
          </div>
          <div className=" flex flex-row items-center  lg:ml-[3.5rem]">
            <img
              src="https://i.pinimg.com/originals/e9/08/e8/e908e8086435c57e07c34d1a5e1ce45a.png"
              alt=""
              className="w-[7rem] lg:ml-[5rem]  h-[1.5rem] object-cover"
            />
            <SiIata className="fill-white w-[4vw]  h-[6vh] " />
          </div>
          <div className="text-left lg:text-center lg:text-[1rem] px- text-[0.95rem] flex flex-row items-center">
            <BiCopyright className=" fill-white " />
            <p className="text-[white] font-semibold lg:text-[1.3rem] text-[0.9rem]">
              2023 Darun-Nur.All Right Reserved | BN:3466674
            </p>
          </div>
          <div className=" lg:h-[100vh] flex flex-row  items-center lg:items-center gap-[0.5rem]">
            <p className="ml-[0.3rem] lg:text-[1.3rem] lg:font-bold text-[1rem] text-[white] text-left ">
              web design by: M&K Tech
            </p>
            <div className="flex flex-row justify-center items-center gap-[0.5rem]">
              <a
                href="https://web.facebook.com/mikail.abdulraheem.3"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <SiFacebook className="fill-[white]" />
              </a>
              <a
                href="mailto:abdulraheemmukaila6@gmail.com"
                target="_blank"
                title="Email"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="fill-[white]" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                title="Linkedin"
                rel="noopener noreferrer"
              >
                <GrLinkedinOption className="fill-[white]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
