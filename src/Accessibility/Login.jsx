import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";

import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = ({ navigate, darunnur, user }) => {
  const [check, setCheck] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loggedInUser, setLoggedInUser] = useState();
  const currentUser = auth.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        setUserErr(error.message);
        setTimeout(() => {
          setUserErr(null);
        }, 2000);
      });
  };

  useEffect(() => {
    if (loggedInUser) {
      console.log({ loggedInUser });
      const currentUserDetails = user.find(
        (m) => m.email === loggedInUser?.email
      );
      updateProfile(currentUser, {
        displayName:
          currentUserDetails?.first + " " + currentUserDetails?.LastName,
        photoURL: currentUserDetails?.img,
        phoneNumber: currentUserDetails?.phone,
      }).then(() => {
        navigate("/User_modal");
      });
    }
  }, [loggedInUser]);

  const tooglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="flex flex-col">
      <div className="w-[100%] h-[4rem] bg-white text-[2rem] text-[#010080] flex flex-row justify-center items-center font-extrabold">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer flex flex-row justify-center items-center "
        >
          <img
            src={darunnur}
            alt=""
            className="w-[15rem] lg:w-[40%] h-[30px] "
          />
        </p>
      </div>
      <div className="bg-[#010080] flex flex-col justify-center items-center  w-[100%] h-[110vh] pb-[5rem]">
        <p className="text-[1rem] text-white my-[3%] font-extrabold">LOG IN</p>

        <form
          onSubmit={handleSubmit}
          className="accessibility bg-white w-[95%] lg:w-[33vw] h-[70vh] rounded-[15px]"
        >
          <div className="bg-[#fafafa] w-[90%] lg:w-[80%] h-[30vh] flex flex-col justify-center mt-[1rem] ">
            <label htmlFor="" className="label">
              Email{" "}
            </label>
            <input
              id="password"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <label htmlFor="password" className="label">
              Password
            </label>{" "}
            <div className="flex flex-row  justify-around items-center w-[80%] ml-7">
              {" "}
              <input
                type={passwordType}
                required
                className="outline-0"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={tooglePassword}
                className="outline-0"
              >
                {passwordType === "password" ? (
                  <BiShow />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </button>
            </div>
          </div>
          <div className="w-[100%] h-[AiOutlineEyeInvisible50%] flex flex-col items-center">
            <div className="flex flex-row justify-between items-center text-[0.85rem] gap-[10px] lg:w-[80%] py-[20px]">
              <div className="lg:w-[50%] flex flex-row justify-center items-center lg:gap-[5px]">
                {!check ? (
                  <GrCheckbox
                    className=" lg:w-[20px] h-[25px] "
                    onClick={() => setCheck(true)}
                  />
                ) : (
                  <BsFillCheckSquareFill
                    className="fill-[#010080] lg:w-[20px] h-[25px] "
                    onClick={() => setCheck(false)}
                  />
                )}
                <p className="text-[0.90rem] lg:text-[1rem] ml-[5px]">
                  Remember me
                </p>
              </div>
              <div>
                <p
                  onClick={() => navigate("/Reset_Password")}
                  className="text-[#010080] lg:text-[1rem] text-[0.90rem] cursor-pointer"
                >
                  Forget password?
                </p>
              </div>
            </div>
            <div className="w-[100%]  flex flex-col justify-center items-center text-[0.90rem]">
              <button
                type="submit"
                className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem]"
              >
                Login
                <RiArrowRightSLine className=" w-[20px] h-[25px] " />
              </button>

              {userErr && (
                <p className="bg-[red]  border-[1px] border-[red] rounded-[5px] px-[4rem] mt-[3px]  text-[white]">
                  {userErr}
                </p>
              )}
              <p className="mt-[3%]">Don't have an account</p>
              <p
                onClick={() => navigate("/Sign_in")}
                className="text-[#010080] cursor-pointer font-extrabold"
              >
                Create account
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
