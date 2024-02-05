import React, { useEffect, useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { app, auth, db, storage } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Button from "../Button/Button";
import sample from "../assets/images-removebg-preview.png";

const Sign_in = ({ navigate, darunnur, user }) => {
  const intialValue = {
    first: "",
    LastName: "",
    email: "",
    phone: "",
    password: "",
    // fileUpload: "",
  };
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [data, setData] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [check, setCheck] = useState(false);
  const [progressTrack, setProgressTrack] = useState(null);
  const currentUser = auth.currentUser;
  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + fileUpload.name;
      const storageRef = ref(storage, "image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, fileUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgressTrack(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData({ ...data, img: downloadURL });
          });
        }
      );
    };
    fileUpload && uploadfile();
  }, [fileUpload]);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      ...fileUpload,
      [name]: value,
      day: new Date().toDateString(),
      timeStamp: serverTimestamp(),
    });
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (
        window.confirm(
          "Please verify your details and the content of your Document for any error or omission"
        )
      ) {
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          await setDoc(doc(db, "users", res.user.uid), { ...data });
          setLoggedInUser(res.user);
        } catch (err) {
          setError(err.message);
        }
      }
    }
  };
  useEffect(() => {
    if (loggedInUser) {
      const currentUserDetails = user.find(
        (m) => m.email === loggedInUser?.email
      );
      updateProfile(currentUser, {
        displayName:
          currentUserDetails?.first + " " + currentUserDetails?.LastName,
        photoURL: currentUserDetails?.img,
        phoneNumber: currentUserDetails?.phone,
      }).then(() => {
        setTimeout(() => {
          setSuccess(
            `You are successfully signed in as ${
              data?.first + " " + data?.LastName
            }`
          );
        }, 5000);
        navigate("/User_modal");
      });
    }
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError || handleSubmit]);
  const existingUser = user?.find((p) => p.email === data.email);
  console.log(existingUser);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    const contactRegex = /^[0-9]/i;
    if (!values.first) {
      error.first = "Name is required";
    }
    if (!values.LastName) {
      error.LastName = "Last Name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (values.email === existingUser.email) {
      error.email = "the email you input has already been use please login";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (values.password.length < 6) {
      error.password = "password  should not be less than 6 digit";
    }
    if (!values.phone) {
      error.phone = "contact is required";
    } else if (!contactRegex.test(values.phone)) {
      error.phone = "This is not a valid contact it  must be a number";
    }

    return error;
  };
  return (
    <div className="flex flex-col ">
      <div className="w-[100%] h-[4rem] bg-white text-[2rem] text-[#010080] flex flex-row justify-center items-center font-extrabold">
        <p onClick={() => navigate("/")} className="cursor-pointer">
          <img
            src={darunnur}
            alt=""
            className=" w-[15rem] lg:w-[100% h-[35px]"
          />
        </p>
      </div>
      <div className="bg-[#010080] flex flex-col justify-center items-center  w-[100%] pb-[5rem]">
        <p className="text-[1rem] text-white my-[3%] font-extrabold">
          CREATE ACCOUNT
        </p>
        <form
          onSubmit={handleSubmit}
          onChange={(e) => handleChange(e)}
          className="accessibility bg-white w-[95%] lg:w-[33vw] lg:h-[100vh] rounded-[15px] py-[5%] lg:pb-[5rem]"
        >
          <div className="bg-[#fafafa]  w-[90%] lg:w-[80%] lg:h-[66vh] flex flex-col justify-center lg:mt-[3rem] ">
            <div className="flex flex-row justify-around    items-center border-[1px] rounded-[5%]">
              <label
                htmlFor="fileInput"
                className="w-[100px] object-cover h-[90px] rounded-[20%] bg-[#95bbdf] text-white flex flex-col justify-center items-center cursor-pointer my-[3%] text-[0.70rem]  font-bold"
              >
                <MdOutlineDriveFolderUpload className="w-[45px] h-[40px]  fill-white" />
                choose image:
              </label>
              <input
                type="file"
                id="fileInput"
                name="file"
                className="outline-0 hidden"
                onChange={(e) => setFileUpload(e.target.files[0])}
              />
              {fileUpload ? (
                <img
                  src={data.img}
                  alt=""
                  className="w-[100px] object-cover h-[90px] border-[1px] rounded-[20%] "
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
                  alt=""
                  className="w-[100px] object-cover h-[90px] border-[1px] rounded-[20%]"
                />
              )}
            </div>
            <label htmlFor="" className="changeColor">
              {formError.first}
            </label>
            <input
              type="text"
              name="first"
              value={data.first}
              placeholder="First"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.LastName}
            </label>
            <input
              type="text"
              name="LastName"
              value={data.LastName}
              placeholder="Last Name"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.phone}
            </label>
            <input
              name="phone"
              value={data.phone}
              placeholder="Phone"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.email}
            </label>
            <input
              type={"email"}
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.password}
            </label>{" "}
            <div className="flex flex-row justify-around  items-center border-b-[1px] w-[80%] ml-7">
              <input
                id="password"
                type={passwordType}
                className="border-none "
                name="password"
              />
              <button
                type="button"
                className="outline-0"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <BiShow className="fill-[gray]" />
                ) : (
                  <AiOutlineEyeInvisible className="fill-[gray]" />
                )}
              </button>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex flex-col items-center">
            <div className="flex flex-row justify-between items-center text-[0.85rem] w-[80%] py-[20px]">
              <div className="lg:w-[15%] flex flex-row items-center gap-[15px]">
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
              </div>
              <div>
                <p className="text-[0.75rem] text-[gray] leading-[15px]">
                  By proceeding, I acknowledge that I have read and agree to
                  Travelbeta’s Flight booking{" "}
                  <b className="text-[#010080]"> terms & conditions</b>
                </p>
              </div>
            </div>
            <div className="w-[100%]  flex flex-col justify-center items-center text-[0.90rem]">
              {!error ? (
                <Button
                  disabled={progressTrack !== null && progressTrack < 100}
                  progressTrack={progressTrack}
                />
              ) : (
                <Button />
              )}
              {error && (
                <p className="bg-[red]  border-[1px] border-[red] rounded-[5px] px-[4rem] mt-[3px]  text-[white]">
                  {" "}
                  {error}
                </p>
              )}
              <p className="mt-[3%]">Already have an account</p>
              <p
                onClick={() => navigate("/Login")}
                className="text-[#010080] cursor-pointer font-extrabold"
              >
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
