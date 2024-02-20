import React, { useEffect, useState } from "react";
import logo from "../assets/darun-nur-low-resolution-logo-color-on-transparent-background.png";
import logowhite from "../assets/darun-nur-low-resolution-logo-white-on-transparent-background.png";

import { FaHireAHelper, FaHome, FaLuggageCart } from "react-icons/fa";
import { MdDashboard, MdRoomPreferences } from "react-icons/md";
import {
  RiInformationFill,
  RiProfileFill,
  RiSettings5Line,
} from "react-icons/ri";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { BiLogOut, BiUserCheck } from "react-icons/bi";
import { FcDocument } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Dashboard_nav = ({ user, mode }) => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);

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
  const Admin = user?.filter((r) => r.role === "Admin");

  return (
    <div>
      <div className="w-[100%] h-[auto] hidden lg:flex flex-row justify-between">
        <div
          className={
            mode
              ? "w-[20%] h-[100vh] fixed flex  flex-col items-center z-[1] bg-[#f1f2f6] pt-[2%] navBorder"
              : "w-[20%] h-[100vh] fixed flex  flex-col items-center z-[1] bg-[#031525] pt-[2%] navBorder"
          }
        >
          <div className={mode ? "statuName" : "statuNameDark"}>
            {mode ? <img src={logo} alt="" /> : <img src={logowhite} alt="" />}
            <p> 𝓣𝓻𝓪𝓿𝓮𝓵 & 𝓣𝓸𝓾𝓻𝓼 𝓛𝓽𝓭</p>
          </div>
          <aside className="w-[20vw]  h-[80vh] ">
            <div className="menu_list">
              <button onClick={(e) => navigate("Admin")}>
                <MdDashboard className="icon" /> Dashboard
              </button>
              <button onClick={(e) => navigate("users")}>
                <BiUserCheck className="icon" /> Users & Affiliate
              </button>
              <button onClick={(e) => navigate("Profile")}>
                <RiProfileFill className="icon" /> My Profile
              </button>
              <button onClick={() => navigate("Hire")}>
                <FaHireAHelper className="icon" /> Hire
              </button>{" "}
              <button onClick={(e) => navigate("/")}>
                <FaHome className="icon" /> Home
              </button>
              <button onClick={(e) => changeColorClick(e)}>
                <FcDocument className="icon" /> Travel Document
              </button>
              <button onClick={(e) => navigate("chart")}>
                <RiInformationFill className="icon" /> Update
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

export default Dashboard_nav;
