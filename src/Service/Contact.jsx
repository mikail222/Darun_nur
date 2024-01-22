import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowRightSLine } from "react-icons/ri";
import Nav_bar from "../Navigation/Nav_bar";
import Footer from "../Footer/Footer";
import Mail from "./Mail";
import { CiLocationOn } from "react-icons/ci";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Contact = () => {
  const intialValue = {
    first: "",
    lastName: "",
    message: "",
    email: "",
    phone: "",
  };
  const [data, setData] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const contactCollRef = collection(db, "Contact");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, day: new Date().toDateString() });
  };

  const contact = async (e) => {
    e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      await addDoc(contactCollRef, {
        ...data,
      });
      alert("Message sent. thanks, as you await response via your email");
    }
  };
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    const contactRegex = /^[0-9]/i;
    if (!values.first) {
      error.first = "Name is required";
    }
    if (!values.lastName) {
      error.lastName = "subject is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.message) {
      error.message = "Message is required";
    }
    if (!values.phone) {
      error.phone = "contact is required";
    } else if (!contactRegex.test(values.phone)) {
      error.phone = "This is not a valid contact it  must be a number";
    }

    return error;
  };
  return (
    <div className="contact">
      <Nav_bar />
      <div className="socialMedia"></div>
      <div className="flex flex-col justify-center items-center   lg:gap-[2rem]">
        <aside>
          <div className="flex flex-col items-center  rounded-[15px] lg:w-[40vw] h-[50vh] lg:hover:shadow-md my-[5%] bg-white">
            <div className="mt-[10%]">
              <CiLocationOn className="w-[40px] h-[40px] fill- [#ffb712] animate-bounce ml-[2rem]" />
              <div className="rounded-[50%] border-[1px] p-[0.5rem] px-[3rem] bg-[#ffb712] animate-ping"></div>
            </div>
            <div className="text-center   leading-[2rem] lg:tracking-[0.25rem] tracking-[0.15rem] text-[2rem]">
              <h1 className="text-[1.7rem]  lg:text-[2rem] py-[1rem] font-bold">
                Nigeria Office
              </h1>
              <p>Address: 7B iwaro Lane Isolo-Akure </p>
              <p> Ondo State.Nigeria</p>
              <p>Phone: +234-8124330616</p>
              <p>Email: darunnur@gmail.com </p>
            </div>
          </div>
        </aside>
        <section className="flex flex-col justify-center items-center">
          <div className="mt-[5rem]">
            <p className="text-[1.5rem] lg:text-[2.5rem] font-bold font-serif">
              Drop a Message here...!
            </p>
          </div>
          <form
            onChange={(e) => handleChange(e)}
            onClick={(e) => contact(e)}
            className="travel flex flex-col justify-center rounded-[15px] w-[95%] lg:w-[40vw] h-[auto] lg:shadow-md my-[10%] bg-white"
          >
            <label htmlFor="" className="label">
              {formError.first}{" "}
            </label>
            <input
              type="text"
              name="first"
              value={data.first}
              placeholder="First Name"
            />
            <label htmlFor="" className="label">
              {formError.lastName}
            </label>
            <input
              type="text"
              name="last_name"
              value={data.lastName}
              placeholder="Last Name"
            />{" "}
            <label htmlFor="" className="label">
              {formError.email}
            </label>
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="Email"
            />
            <label htmlFor="" className="label">
              {formError.phone}
            </label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              placeholder="Contact"
            />
            <div className=" w-[95%] lg:w-[80%] flex flex-row lg:ml-[10%] justify-between items-center pt-[10px]">
              <div className=" my-[1.5rem]">
                <label htmlFor="" className="mslabel">
                  {formError.message}
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  value={data.message}
                  className="outline-0 lg:w-[32vw] lg:text-[1.3rem] mb-[1rem]"
                  placeholder="drop your message here..."
                ></textarea>
              </div>
            </div>{" "}
            <button
              type="submit"
              className="w-[80%] p-[15px] rounded-[5px] bg-[#ffb712]  text-white font-extrabold outline-0 flex flex-row justify-center items-center gap-[0.5rem] ml-[10%] mb-[3rem]"
            >
              Submit
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

export default Contact;
