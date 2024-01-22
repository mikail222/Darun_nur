import React, { useEffect, useState } from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import Nav_bar from "../Navigation/Nav_bar";
import Footer from "../Footer/Footer";
import satisfaction from "../assets/51-510761_100-satisfaction-guarantee-label-removebg.png";
import Mail from "../Service/Mail";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Affilate_Registration = () => {
  const intialValue = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    state: "",
    city: "",
    country: "",
    address: "",
    company_name: "",
    // fileUpload: "",
  };
  const [check, setCheck] = useState(false);
  const [afillateData, setAfillateData] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [fileUpload, setFileUpload] = useState(null);
  const [progressTrack, setProgressTrack] = useState(null);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const afillateCollRef = collection(db, "Afillate");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAfillateData({
      ...afillateData,
      ...fileUpload,
      [name]: value,
      day: new Date().toDateString(),
      time: serverTimestamp(),
    });
  };

  const addAfillate = async (e) => {
    e.preventDefault();
    setFormError(validate(afillateData));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (
        window.confirm(
          "Please verify your details and the content of your Document for any error or omission"
        )
      ) {
        await addDoc(afillateCollRef, afillateData);
        alert("Registration Completed Thanks");
      }
    }
    // e.target.reset();
  };
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
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAfillateData({ ...afillateData, img: downloadURL });
          });
        }
      );
    };
    fileUpload && uploadfile();
  }, [fileUpload]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    const contactRegex = /^[0-9]/i;
    if (!values.first_name) {
      error.first_name = "Name is required";
    }
    if (!values.last_name) {
      error.last_name = "Last Name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (values.password.length < 6) {
      error.password = "password  should not be less than 6 digit";
    }
    if (!values.company_name) {
      error.company_name = " Company Name is required";
    }
    if (!values.phone) {
      error.phone = "contact is required";
    } else if (!contactRegex.test(values.phone)) {
      error.phone = "This is not a valid contact it  must be a number";
    }
    if (!values.city) {
      error.city = "city is required";
    }
    if (!values.address) {
      error.address = "address is required";
    }
    if (!values.state) {
      error.state = "state is required";
    }
    if (!values.country) {
      error.country = "country is required";
    }

    return error;
  };

  return (
    <div>
      <Nav_bar />
      <div className="  w-[100%] flex flex-col justify-center items-center">
        <div className="w-[95%] lg:w-[50vw] flex flex-col justify-center items-center  border-[1px] mt-[7%] shadow-lg pb-[5%]">
          <div className="bg-[#010080] w-[100%] lg:w-[50vw] h-[7rem] text-white flex flex-row justify-around items-center ">
            <div className="leading-[2rem]">
              <p className="text-[1.4rem] font-extrabold">
                New Affiliate Registration
              </p>
              <p className="text-[0.85rem]">
                Become an affiliate and get amazing rewards.
              </p>
            </div>
            <div className="30%">
              <BsCalendar2CheckFill className="w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="affilateInput">
            <div className="flex flex-row ml-[10%] lg:justify-between items-center pt-[10px] text-[0.85rem]">
              <div className="w-[65%]">
                <p>Affiliate's Information *</p>
                <p>Affilate details are properly keep for Documentation.</p>
              </div>
              <label
                htmlFor="fileInput"
                className="affilatePicture w-[70px] h-[70px] lg:w-[100px] object-cover lg:h-[90px] rounded-[20px] text-[gray] flex flex-col justify-center items-center cursor-pointer my-[3%] text-[0.70rem] text-center font-bold"
              >
                {fileUpload ? (
                  <img
                    src={afillateData.img}
                    alt=""
                    className="w-[70px] h-[70px] lg:w-[100px] object-cover lg:h-[90px] rounded-[20px]"
                  />
                ) : (
                  // ) : progressTrack !== null ? (
                  //   <i className="text-[0.9rem] text-[black]">
                  //     Loading...!{progressTrack}%
                  //   </i>
                  <i>choose image</i>
                )}
              </label>
              <input
                accept="image/*,capture=camera"
                type="file"
                id="fileInput"
                name="file"
                required
                className="outline-0 hidden"
                onChange={(e) => setFileUpload(e.target.files[0])}
              />
            </div>
            <form
              onChange={(e) => handleChange(e)}
              className="travel flex flex-col justify-center "
            >
              <label htmlFor="" className="label">
                {formError.first_name}
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={afillateData.first_name}
              />
              <label htmlFor="" className="label">
                {formError.last_name}
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={afillateData.last_name}
              />{" "}
              <label htmlFor="" className="label">
                {formError.email}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={afillateData.email}
              />
              <label htmlFor="" className="label">
                {formError.password}
              </label>
              <div className="flex flex-row justify-around  items-center">
                <input
                  type={passwordType}
                  required
                  className="border-0
                  "
                  value={afillateData.password}
                  name="password"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="outline-0 w-[25px] h-[25px] right-[15px] relative"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <BiShow />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </button>
              </div>
              <div className="flex flex-col  justify-between pt-[20px]">
                <p className="font-bold text-[1.5rem] ml-[10%]  my-[10%]">
                  Other Information
                </p>
                <label className="afilliate_label">
                  {formError.company_name}
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={afillateData.company_name}
                  placeholder="Company name"
                />
              </div>
              <div className=" flex flex-col  justify-between pt-[20px]">
                <div className="text-[0.70rem] flex flex-col  gap-[20px]">
                  <label className="afilliate_label">{formError.phone}</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Contact"
                    value={afillateData.phone}
                  />
                  <label className="afilliate_label">{formError.address}</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={afillateData.address}
                  />
                  <label className="afilliate_label">{formError.city}</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={afillateData.city}
                  />
                  <label className="afilliate_label">{formError.state}</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={afillateData.state}
                  />
                  <label className="afilliate_label">{formError.country}</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={afillateData.country}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-[1rem] text-[0.85rem] w-[80%] py-[20px] ml-[10%]">
                <div className=" flex flex-row items-center">
                  {!check ? (
                    <GrCheckbox
                      className=" w-[20px] h-[25px] "
                      onClick={() => setCheck(true)}
                    />
                  ) : (
                    <BsFillCheckSquareFill
                      className="fill-[#010080] w-[20px] h-[25px] "
                      onClick={() => setCheck(false)}
                    />
                  )}
                </div>
                <div className="my-[20px]">
                  <p className="text-[0.75rem] text-[gray] leading-[15px]">
                    By proceeding, I acknowledge that I have read and agree to
                    Darun-nur’s Flight booking{" "}
                    <b className="text-[#010080]"> terms & conditions</b>
                  </p>
                </div>
              </div>
              <button
                onClick={addAfillate}
                disabled={progressTrack !== null && progressTrack < 100}
                type="submit"
                className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem] ml-[10%]"
              >
                {progressTrack !== null && progressTrack < 100
                  ? "loading  image"
                  : "Submit"}
                <RiArrowRightSLine className=" w-[20px] h-[25px] " />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:h-[60vh] gap-[2rem] my-[10%] lg:gap-[4rem]">
          <div className="flex  flex-col lg:flex-row justify-center items-center w-[80%] lg:w-[40%] lg:h-[25vh] gap-[2rem]">
            <img src={satisfaction} alt="" className="lg:w-[20vw]" />
            <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <p className="text-[1.2rem] font-bold my-[0.5rem]">
                Satisfaction Guarantee
              </p>
              <p className=" w-[70%] text-center lg:text-[left] lg:w-[90%] text-[0.9rem]">
                Receive a refund on your travel insurance premium within 10 days
                of purchase.
              </p>
            </div>
          </div>
          <div className=" bg-[#96ecd3] w-[90%] lg:w-[40%] lg:h-[27vh]">
            <div className="m-[1.2rem]">
              <p className="font-extrabold">Need Darun nur help?</p>
              <p className="my-[0.5rem] lg:w-[24rem] font-thin">
                We would be more than happy to help you. Our team advisor are
                24/7 at your service to help you.
              </p>
              <p>Email: Darunnur@gmail.com</p>
              <p className="font-extrabold">Phone: 08124330616</p>
            </div>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default Affilate_Registration;
