import { FaHireAHelper } from "react-icons/fa";
import { MdDashboard, MdRoomPreferences } from "react-icons/md";
import logo from "../assets/darun-nur-low-resolution-logo-color-on-transparent-background.png";
import logowhite from "../assets/darun-nur-low-resolution-logo-white-on-transparent-background.png";
import {
  RiInformationFill,
  RiProfileFill,
  RiSettings5Line,
} from "react-icons/ri";
import { auth } from "../firebaseConfig";
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
          className="w-[75vw] h-[100vh] fixed flex  flex-col items-center pt-[2%]  lg:hidden"
          style={
            mode
              ? { background: "black", color: "white" }
              : { background: "#031525" }
          }
        >
          <div className={mode ? "statuName" : "statuNameDark"}>
            {mode ? <img src={logo} alt="" /> : <img src={logowhite} alt="" />}
            <p> 𝓣𝓻𝓪𝓿𝓮𝓵 & 𝓣𝓸𝓾𝓻𝓼 𝓛𝓽𝓭</p>
          </div>
          <aside className="w-[75vw] lg:h-[80vh]  h-[80%]">
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
              <button onClick={(e) => navigate("Hire")}>
                <FaHireAHelper className="icon" /> Hire
              </button>
              <button>
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

export default Mobile_nav;
