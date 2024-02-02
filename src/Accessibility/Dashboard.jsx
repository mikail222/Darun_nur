import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard_nav from "./Dashboard_nav";
import Admin from "./Admin";
import Mobile_nav from "./Mobile_nav";
import { BiMenu } from "react-icons/bi";
import Users from "./Users";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import { MdCancel } from "react-icons/md";

const Dashboard = ({ user }) => {
  const [mobile, setMobile] = useState(false);
  const [visa, setVisa] = useState([]);
  const [affilates, setAffilates] = useState([]);
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  const callVisa = (child) => {
    setVisa(child);
  };
  const callback = (child) => {
    setAffilates(child);
  };

  return (
    // &&
    <div>
      <div className="lg:hidden flex  flex-col  justify-end items-end px-[25px] py-[2%]">
        {mobile === false ? (
          <BiMenu
            className="lg:hidden flex flex-col w-[25px] h-[25px]"
            onClick={() => setMobile(true)}
          />
        ) : (
          <MdCancel
            className="lg:hidden flex flex-col w-[25px] h-[25px] justify-end items-end"
            onClick={() => setMobile(false)}
          />
        )}
      </div>
      <div className="w-[100%] h-[auto] lg:flex flex-row justify-between">
        {mobile === true ? (
          <Mobile_nav user={user} setMobile={setMobile} />
        ) : (
          <Dashboard_nav />
        )}
        <aside className="w-[100%] lg:w-[80%] h-[100%]  flex flex-col bg-[black]">
          <Routes>
            <Route
              path="/Admin"
              element={<Admin user={user} visa={visa} affilates={affilates} />}
            />
            <Route
              path="/Profile"
              element={<Profile navigate={navigate} user={user} />}
            />
            <Route
              path="/users"
              element={
                <Users user={user} {...{ callback }} {...{ callVisa }} />
              }
            />
            <Route path="/pass_word" element={<ChangePassword user={user} />} />
          </Routes>{" "}
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
