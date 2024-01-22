import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";

const Form = () => {
  const intialValue = {
    first: "",
    subject: "",
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
    if (!values.subject) {
      error.subject = "subject is required";
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
    <div className="mb-[5%] w-[100%] lg:h-[100%] flex flex-col justify-center items-center">
      {" "}
      <div className="w-[95%] lg:w-[35%]">
        {" "}
        <p className="text-[1rem] text-[#d60052]  mb-[2%]">Drop message</p>
        <form
          onChange={(e) => handleChange(e)}
          onClick={(e) => contact(e)}
          className="cform flex flex-col  gap-[15px] w-[100%]"
        >
          <div className="flex flex-row gap-[15px]">
            <div>
              <label htmlFor="">{formError.first}</label>
              <input
                type="text"
                placeholder="Your Name"
                name="first"
                value={data.first}
              />
            </div>{" "}
            <div>
              <label htmlFor="">{formError.email}</label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                value={data.email}
              />
            </div>
          </div>
          <div className="flex flex-row gap-[10px]">
            <div>
              <label htmlFor="">{formError.subject}</label>
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                value={data.subject}
              />
            </div>{" "}
            <div>
              <label htmlFor="">{formError.phone}</label>
              <input
                type="text"
                placeholder="Your Mobile"
                name="phone"
                value={data.phone}
              />
            </div>
          </div>
          <label htmlFor="">{formError.message}</label>
          <textarea
            name="message"
            value={data.message}
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="border-[1px] font-semibold outline-none px-[5px]"
          ></textarea>
          <button type="submit" className="buttonbg bg-[orange]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
