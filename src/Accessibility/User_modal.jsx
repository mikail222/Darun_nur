import { async } from "@firebase/util";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import darun_nur from "../assets/darun-nur-low-resolution-logo-white-on-transparent-background.png";

const User_modal = ({ user }) => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
        alert(" Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const currentUserDetails = user.find((m) => m.email === currentUser?.email);
  console.log(currentUserDetails?.first);
  console.log(currentUserDetails?.LastName);
  console.log({ currentUser });

  // onAuthStateChanged(auth, (user) => {
  //   console.log({ user });
  //   if (user) {
  //     updateProfile(currentUser, {
  //       displayName:
  //         currentUserDetails.first + " " + currentUserDetails.LastName,
  //       photoURL:
  //         currentUserDetails.img &&
  //         user.providerData.forEach(
  //           (profile) =>
  //             (profile.displayName =
  //               currentUserDetails.first + " " + currentUserDetails.LastName),
  //           (profile.photoURL = currentUserDetails.img)
  //         ),
  //     }).then(() => {
  //       alert("profile updated");
  //     });
  //   }
  // });

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user !== null) {
  //       updateProfile(auth.currentUser, {
  //         displayName:
  //           currentUserDetails?.first + " " + currentUserDetails?.LastName,
  //         photoURL:
  //           currentUserDetails?.img &&
  //           user.providerData.forEach(
  //             (profile) =>
  //               (profile.displayName =
  //                 currentUserDetails?.first +
  //                 " " +
  //                 currentUserDetails?.LastName),
  //             (profile.photoURL = currentUserDetails?.img)
  //           ),
  //       })
  //         .then(() => {
  //           alert("profile updated");
  //           console.log(currentUser);
  //         })
  //         .catch((error) => {
  //           // alert(error.message);
  //         });
  //     } else {
  //       //     // User is signed out
  //       //     // ...
  //     }
  //   });
  // }, [currentUser]);

  return (
    <div className="modal">
      <div className="modalBg">
        <div className="modalContainer">
          <div className="flex flex-col justify-center  items-center mb-[6%] py-[5px] text-[1.4rem] leading-[45px]">
            <img src={darun_nur} alt="" className="w-[60%] h-[100%] " />
            <p> 𝓣𝓻𝓪𝓿𝓮𝓵 & 𝓣𝓸𝓾𝓻𝓼 𝓛𝓽𝓭</p>
          </div>
          {currentUser !== true ? (
            <img
              src={currentUser?.photoURL}
              alt=""
              className="w-[80px] h-[80px]  border-[white]  border-[5px] object-cover rounded-[100px]"
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
              alt=""
              className=" avartaIcon "
            />
          )}
          <p className="text-[1rem]">welcome :</p>
          <h3 className="text-[2rem]">{currentUser?.displayName}</h3>
          <div className="buttonContainer">
            <button type="button" onClick={() => navigate("/Update")}>
              Update Profile
            </button>
            <button type="button" onClick={() => navigate("/Dashboard")}>
              Continue
            </button>
            <button type="button" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_modal;
