import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const EmployeeRegistration = ({ mode }) => {
  const me = auth.currentUser;
  const intialValue = {
    title: "",
    first: "",
    lastName: "",
    email: "",
    education: "",
    about: "",
    state: "",
    city: "",
    country: "",
    address: "",
    postacode: "",
    department: "",
    position: "",
  };
  const [photoUrl, setPhotoUrl] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(intialValue);
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [trackphotoUrl, setTrackPhotoUrl] = useState(null);

  const collRef = collection(db, "Employee");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileUpdate({
      ...profileUpdate,
      ...photoUrl,
      [name]: value,
      updated: new Date().toDateString(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(profileUpdate));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (
        window.confirm(
          "Please verify your details and the content of your Document for any error or omission"
        )
      ) {
        await addDoc(collRef, profileUpdate);
        alert("Registration Completed Thanks");
      }
    }
  };

  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + photoUrl.name;
      const storageRef = ref(storage, "image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, photoUrl);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setTrackPhotoUrl(progress);
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
            setProfileUpdate({ ...profileUpdate, img: downloadURL });
          });
        }
      );
    };
    photoUrl && uploadfile();
  }, [photoUrl]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    if (!values.first) {
      error.first = "Name is required";
    }
    if (!values.lastName) {
      error.lastName = "Last Name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.title) {
      error.title = "Title name is required";
    }
    if (!values.education) {
      error.education = "Institution is required";
    }
    if (!values.about) {
      error.about = " tell us about yourself";
    }
    if (!values.state) {
      error.state = "State is required";
    }
    if (!values.city) {
      error.city = "City is required";
    }
    if (!values.country) {
      error.country = "Country is required";
    }
    if (!values.address) {
      error.address = "address is required";
    }
    if (!values.department) {
      error.department = "Department is required";
    }
    if (!values.postacode) {
      error.postacode = "Postacode is required";
    }
    if (!values.position) {
      error.position = "Position is required";
    }
    return error;
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100%] h-[65vh] HireBg">
        <div className="overlay text-white flex flex-col justify-center px-[5%] lg:gap-[.6rem]">
          <p className="lg:text-[2.5rem]">Hello</p>
          <p className=" lg:text-[1.2rem]">
            This is your profile your can always make changes to your
            Information here when neccessary
          </p>
        </div>
      </div>
      <div className="employee ">
        <div className={mode ? "employeeForm" : "employeeFormDark"}>
          <form className="" onSubmit={(e) => handleSubmit(e)}>
            <div className="employeePics ">
              <input
                type="file"
                id="fileInput"
                name="file"
                className="outline-0 hidden"
                placeholder="Photo url "
                onChange={(e) => setPhotoUrl(e.target.files[0])}
              />
              {photoUrl ? (
                <img src={profileUpdate.img} alt="" className=" bg-[teal]" />
              ) : (
                <img src={me?.photoURL} alt="" className=" bg-[teal]" />
              )}
              <div className="flex flex-row justify-around items-center w-[100%]  ">
                <label htmlFor="fileInput" className=" btn text-[gray]">
                  {trackphotoUrl !== null && trackphotoUrl < 100 ? (
                    <i>loading picture</i>
                  ) : (
                    "Add Picture"
                  )}
                </label>
                <button type="button" className="btn">
                  Remove
                </button>
              </div>
            </div>
            <div className="uploadBtn">
              <h6>Hired Profile</h6>
              <button type="submit" className="btn">
                {trackphotoUrl !== null && trackphotoUrl < 100 ? (
                  <i>loading picture</i>
                ) : (
                  "Upload profile"
                )}
              </button>
            </div>
            <h6>EMPLOYEE INFORMATION</h6>
            <div className="employeeformDiv">
              <div className="userInfo">
                <label htmlFor="">{formError.title}</label>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.title}
                />
                <label htmlFor="">{formError.email}</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.email}
                  placeholder="email"
                />
              </div>
              <div>
                <label htmlFor=""> {formError.first}</label>
                <input
                  type="text"
                  name="first"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.first}
                  placeholder="first  name"
                />
                <label htmlFor="">{formError.lastName}</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.lastName}
                />
              </div>
            </div>
            <h6>CONTACT INFORMATION</h6>
            <div className="contactContainer">
              <article className="span">
                <label htmlFor="">{formError.address}</label>
                <input
                  type="text"
                  name="address"
                  onChange={(e) => handleChange(e)}
                  placeholder="address"
                  value={profileUpdate.address}
                />
              </article>
              <div className="contactInfo">
                <div>
                  <label htmlFor="">{formError.city}</label>
                  <input
                    type="text"
                    name="city"
                    onChange={(e) => handleChange(e)}
                    placeholder="city"
                    value={profileUpdate.city}
                  />
                </div>
                <div>
                  <label htmlFor="">{formError.state}</label>
                  <input
                    type="text"
                    name="state"
                    onChange={(e) => handleChange(e)}
                    placeholder="state"
                    value={profileUpdate.state}
                  />
                </div>
                <div>
                  <label htmlFor="">{formError.country}</label>
                  <input
                    type="text"
                    name="country"
                    onChange={(e) => handleChange(e)}
                    placeholder="country"
                    value={profileUpdate.country}
                  />
                </div>
                <div>
                  <label htmlFor="">{formError.postacode}</label>
                  <input
                    type="number"
                    name="postacode"
                    onChange={(e) => handleChange(e)}
                    placeholder="postacode"
                    value={profileUpdate.postacode}
                  />
                </div>
              </div>
              <h6>ABOUT ME</h6>
              <article>
                <label htmlFor="">{formError.about}</label>
                <input
                  type="text"
                  name="about"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.about}
                  placeholder="about"
                />
              </article>
              <div className="contactInfo">
                <div>
                  <label htmlFor="">{formError.education}</label>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="education"
                    placeholder="education"
                    value={profileUpdate.education}
                  />
                </div>
                <div>
                  <label htmlFor="">{formError.department}</label>
                  <input
                    type="text"
                    name="department"
                    onChange={(e) => handleChange(e)}
                    value={profileUpdate.department}
                    placeholder="department"
                  />
                </div>
                <div>
                  <label htmlFor="">{formError.position}</label>
                  <input
                    type="text"
                    name="position"
                    onChange={(e) => handleChange(e)}
                    placeholder="position"
                    value={profileUpdate.position}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
