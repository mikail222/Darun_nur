import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Nav_bar from "../Navigation/Nav_bar";
import Mail from "../Service/Mail";
import { BsPersonFill } from "react-icons/bs";
import { FaHome, FaLuggageCart } from "react-icons/fa";
import { MdDashboard, MdRoomPreferences } from "react-icons/md";
import { RiProfileFill, RiSettings5Line } from "react-icons/ri";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { BiLogOut, BiUserCheck } from "react-icons/bi";
import { FcDocument } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Dashboard_nav = ({ user }) => {
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

  return (
    <div>
      <div className="w-[100%] h-[auto] hidden lg:flex flex-row justify-between">
        <div className="w-[20%] h-[100vh] fixed flex  flex-col-reverse items-center z-[1] bg-[black] pt-[2%]">
          <div className="statuName flex flex-row justify-around items-center w-[90%] rounded-[10px] h-[20%] mb-[10px]">
            <p className="text-[white] text-[1.2rem] my-[3%]  ml-[5%]">
              Welcome: <br /> {currentUser?.displayName}
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
              <button onClick={(e) => changeColorClick(e)}>
                <FaLuggageCart className="icon" /> My Trip
              </button>{" "}
              <button onClick={(e) => navigate("/")}>
                <FaHome className="icon" /> Home
              </button>
              <button onClick={(e) => changeColorClick(e)}>
                <FcDocument className="icon" /> Travel Document
              </button>
              <button onClick={(e) => changeColorClick(e)}>
                <MdRoomPreferences className="icon" /> My Preferences
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
