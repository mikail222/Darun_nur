import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Nav_bar from "../Navigation/Nav_bar";
import Mail from "../Service/Mail";
import { BsPersonFill } from "react-icons/bs";
import { FaHamburger, FaLuggageCart } from "react-icons/fa";
import { MdDashboard, MdRoomPreferences } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import {
  GrDocumentOutlook,
  GrDocumentStore,
  GrUserSettings,
} from "react-icons/gr";
import { RiProfileFill, RiSettings5Line } from "react-icons/ri";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { BiLogOut, BiUserCheck } from "react-icons/bi";
import { FcDocument } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Mobile_nav = ({ user, setMobile, mode }) => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  const handleLogOut = async (e) => {
    const { signOut } = await import("firebase/auth");
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
  const changeColorClick = (e) => {};
  return (
    <div>
      <div className="w-[100%] h-[auto] flex flex-row justify-between relative z-[2]">
        <div
          className="w-[75vw] h-[100vh] fixed flex  flex-col-reverse items-center pt-[2%]  lg:hidden"
          style={
            mode
              ? { background: "black", color: "white" }
              : { background: "#031525" }
          }
        >
          <div className={mode ? "statuName" : "statuNameDark"}>
            <p className="text-[white] text-[1.2rem] ">
              {currentUser?.displayName}
            </p>
            {currentUser ? (
              <img src={currentUser?.photoURL} alt="" className="avartaIcons" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
                alt=""
                className=" avartaIcons "
              />
            )}
          </div>
          <aside className="w-[75vw] h-[80vh]">
            <div className="menu_list">
              <button onClick={(e) => navigate("Admin")}>
                <MdDashboard className="icon" /> Dashboard
              </button>
              <button onClick={(e) => navigate("users")}>
                <BiUserCheck className="icon" /> User & Affilate
              </button>
              <button onClick={(e) => navigate("profile")}>
                <RiProfileFill className="icon" /> My Profile
              </button>
              <button onClick={(e) => changeColorClick(e)}>
                <FaLuggageCart className="icon" /> My Trip
              </button>
              <button>
                <FcDocument className="icon" /> Travel Document
              </button>
              <button onClick={(e) => navigate("chart")}>
                <MdRoomPreferences className="icon" /> Update
              </button>
              <button onClick={(e) => navigate("pass_word")}>
                <RiSettings5Line className="icon" />
                Change Password
              </button>
              <button onClick={(e) => handleLogOut(e)}>
                <BiLogOut className="icon" />
                Log Out
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Mobile_nav;
