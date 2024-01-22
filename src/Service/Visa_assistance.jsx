import React, { useEffect, useState } from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import Nav_bar from "../Navigation/Nav_bar";
import Footer from "../Footer/Footer";
import Mail from "./Mail";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Visa_assistance = () => {
  const intialValue = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    depart_date: "",
    return_date: "",
    message: "",
    destination_country: "",
    passport_country: "",
    passport_number: "",
    // fileUpload: "",
  };
  const date = new Date();
  const [check, setCheck] = useState(false);
  const [userVisa, setUservisa] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [progressTrack, setProgressTrack] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const visaCollRef = collection(db, "Visa_assistance");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUservisa({
      ...userVisa,
      ...fileUpload,
      [name]: value,
      day: new Date().toDateString(),
      timeStamp: serverTimestamp(),
    });
  };

  const userVisas = async (e) => {
    e.preventDefault();
    setFormError(validate(userVisa));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (
        window.confirm(
          "Please verify your details and the content of your Document for any error or omission"
        )
      ) {
        await addDoc(visaCollRef, userVisa);
        alert("Registration Completed Thanks");
      }
    }
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
          // console.log("Upload is " + progress + "% done");
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
            setUservisa({ ...userVisa, img: downloadURL });
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
    if (!values.firstname) {
      error.firstname = "Name is required";
    }
    if (!values.lastname) {
      error.lastname = "Last Name is required";
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
    if (!values.destination_country) {
      error.destination_country = " Country detination Name is required";
    }
    if (!values.phone) {
      error.phone = "contact is required";
    } else if (!contactRegex.test(values.phone)) {
      error.phone = "This is not a valid contact it  must be a number";
    }

    if (!values.passport_country) {
      error.passport_country = "passport  country is required";
    }
    if (!values.depart_date) {
      error.depart_date = "departure date is required";
    }
    if (!values.return_date) {
      error.return_date = "return date is required";
    }
    if (!values.passport_number) {
      error.passport_number = "passport number is required";
    }

    return error;
  };
  return (
    <div>
      {" "}
      <Nav_bar />
      <div className="flex  flex-col lg:flex-row lg:mt-[3%] mb-[10%]">
        <aside className="lg:w-[40%] lg:h-[90vh] flex flex-col justify-center items-center gap-[2rem] my-[5%] lg:my-[0px] ">
          <div className=" w-[95%] text-center leading-10">
            <p className=" text-[1.3rem] md:text-[1.5rem] lg:text-[2.3rem] font-extrabold px-[2%] lg:px-[0px">
              Travel Visa Assistance Program
            </p>
          </div>
          <div className=" w-[90%] lg:w-[75%] flex flex-col gap-4 text-[gray] font-light lg:font-normal">
            <p>
              Darun-Nur Travel & Tour team is made up of specialized and
              seasoned experts in visa processing.
            </p>
            <p>
              Our process includes profiling, helping you complete your visa
              application forms, vetting documents, getting appointment dates,
              conducting pre-interview sessions where applicable, with the aim
              of increasing your chances of visa success.
            </p>
            <p>
              We do not encourage immigration defaults and kindly note that
              issuance of visas is at the discretion of the embassy.
            </p>
            <p className=" text-[1.3rem] my-[4%] text-[#133063]">
              Contact our visa consultants for all your Travel visa related
              questions.
            </p>
            <div className="flex flex-row">
              <p>Email :</p>
              <p>darunnurvisa@gmail.com</p>
            </div>
            <div className="flex flex-row">
              <p>Phone :</p>
              <p>08124330616</p>
            </div>
          </div>
        </aside>
        <section className="lg:w-[60%]  flex flex-col justify-center  items-center border-l-[1px]">
          <div className="bg-[#010080] w-[98%] lg:w-[90%] h-[7rem] text-white flex flex-row justify-around lg:px-[5%] items-center ">
            <div className=" w-[80%]  leading-[1.6rem] lg:w-[90%] lg:leading-[2rem]">
              <p className="text-[1.1rem]  lg:text-[1.5rem] font-extrabold">
                Need Visa Assistance Now ?
              </p>
              <p className="text-[0.85rem] lg:text-[1.2rem]">
                We’re bringing you a new level of comfort.
              </p>
            </div>
            <div className="30%">
              <BsCalendar2CheckFill className="w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mx-[2%] my-[2%]">
            <div className="flex flex-col justify-center pt-[10px] text-[0.85rem]">
              <p>Traveller's Information *</p>
              <p className="w-[90%]">
                Passengers details must be entered as it appears on the passport
                or ID.
              </p>
            </div>
            <div>
              <label
                htmlFor="fileInput"
                className="affilatePicture w-[70px] h-[70px] lg:w-[100px] object-contai lg:h-[100px] rounded-[100px] text-[gray] flex flex-col justify-center items-center cursor-pointer my-[3%] text-[0.70rem] text-center font-bold"
              >
                {fileUpload ? (
                  <img
                    src={userVisa.img}
                    alt=""
                    className="rounded-[10px] w-[70px] h-[80px] object-cover lg:w-[100px] lg:rounded-[100px] lg:h-[100px]"
                  />
                ) : progressTrack == null ? (
                  <i>upload image</i>
                ) : (
                  `Loading...!`
                )}
              </label>
              <input
                accept="image/*,capture=camera"
                type="file"
                id="fileInput"
                name="file"
                className="outline-0 hidden"
                onChange={(e) => setFileUpload(e.target.files[0])}
                required
              />
            </div>
          </div>

          <form
            onSubmit={(e) => userVisas(e)}
            className="travel flex flex-col justify-center "
          >
            <label htmlFor="" className="label">
              {formError.firstname}{" "}
            </label>
            <input
              type="text"
              name="firstname"
              value={userVisa.firstname}
              placeholder="first name"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="label">
              {formError.lastname}
            </label>
            <input
              type="text"
              name="lastname"
              value={userVisa.lastname}
              placeholder="last  name"
              onChange={(e) => handleChange(e)}
            />{" "}
            <label htmlFor="" className="label">
              {formError.email}
            </label>
            <input
              type="text"
              name="email"
              value={userVisa.email}
              placeholder="email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="label">
              {formError.phone}
            </label>
            <input
              type="text"
              name="phone"
              value={userVisa.phone}
              placeholder="contact"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="label">
              {formError.password}
            </label>
            <div className="flex flex-row justify-between  items-center w-[100%]">
              <input
                type={passwordType}
                className="border-0
                  "
                placeholder="password"
                value={userVisa.password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <button
                type="button"
                className="outline-0"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <BiShow className="relative right-[35px]" />
                ) : (
                  <AiOutlineEyeInvisible className="relative right-[35px]" />
                )}
              </button>
            </div>
            <label htmlFor="" className="label">
              {formError.depart_date}
            </label>
            <input
              type="date"
              name="depart_date"
              id="date"
              placeholder="DEPARTURE DATE"
              value={userVisa.depart_date}
              className="w-[100%]"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="label">
              {formError.return_date}
            </label>
            <input
              type="date"
              name="return_date"
              id="dates"
              placeholder="RETURN DATE"
              value={userVisa.return_date}
              className="w-[100%] "
              onChange={(e) => handleChange(e)}
            />
            <label className="label">{formError.destination_country}</label>
            <input
              type="text"
              name="destination_country"
              placeholder="destination  country"
              value={userVisa.destination_country}
              onChange={(e) => handleChange(e)}
            />
            <label className="label">{formError.passport_country}</label>
            <input
              type="text"
              name="passport_country"
              placeholder="passport country"
              value={userVisa.passport_country}
              onChange={(e) => handleChange(e)}
            />
            <label className="label">{formError.passport_number}</label>
            <input
              type="text"
              name="passport_number"
              placeholder="passport number"
              value={userVisa.passport_number}
              onChange={(e) => handleChange(e)}
            />
            <div className="w-[80%] flex flex-row ml-[10%] justify-between items-center pt-[10px] border-b-[1px]">
              <div className="text-[0.70rem]">
                <label className="label">{formError.message}</label>
                <textarea
                  name="message"
                  placeholder="message"
                  id=""
                  cols="30"
                  rows="10"
                  value={userVisa.message}
                  className="outline-0 w-[48%]"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>{" "}
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
              <div>
                <p className="text-[0.75rem] text-[gray] leading-[15px]">
                  By proceeding, I acknowledge that I have read and agree to
                  Darun-Nur’s Flight booking{" "}
                  <b className="text-[#010080]"> terms & conditions</b>
                </p>
              </div>
            </div>
            <button
              type="submit"
              disabled={progressTrack !== null && progressTrack < 100}
              className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-bold outline-0 flex flex-row justify-center items-center gap-[0.5rem] ml-[10%]"
            >
              {progressTrack !== null && progressTrack < 100
                ? "loading  image"
                : "Submit"}
              <RiArrowRightSLine className=" w-[20px] h-[25px] " />
            </button>
          </form>
        </section>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default Visa_assistance;
