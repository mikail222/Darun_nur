import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import darunnur from "../assets/darun-nur-low-resolution-logo-white-on-transparent-background.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Reset_Password = ({ user }) => {
  const [resetEmail, setResetEmail] = useState(" ");
  const navigate = useNavigate();
  // const getProfileImg = user.filter((email) => email.email === resetEmail);

  // console.log(user);
  const email = resetEmail;
  const handleResetPassword = (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error); // ..
      });
  };
  return (
    <div className="modal">
      <div className="modalBg">
        <div className="modalContainer">
          <img src={darunnur} alt="" className="  w-[15rem] lg:w-[24rem]" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
            alt=""
            className=" avartaIcon  lg:my-[3%] "
          />
          <p>Forget Password? </p>
          <div className=" w-[80%] lg:w-[50%] flex flex-row justify-around items-center gap-[6%]  border-[2px] rounded-[20px] px-[20px] my-[5%]">
            <RiLockPasswordLine className="w-[50px] lg:w-[30px] lg:h-[20px]  fill-[gray] lg:pr-[3px] rounded-[50px]" />
            <input
              type="text"
              placeholder="Enter your Email"
              className="outline-[0]  bg-[transparent] py-[5px] text-[black] font-bold"
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <HiOutlineArrowNarrowRight
              className="w-[20px] h-[40px] fill-[gray]"
              onClick={handleResetPassword}
            />
          </div>
          <div className="buttonContainer">
            <button type="button" onClick={handleResetPassword}>
              {" "}
              Reset Password
            </button>
            <button type="button" onClick={() => navigate("/Login")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset_Password;
