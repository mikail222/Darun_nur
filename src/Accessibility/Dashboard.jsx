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
import { MdCancel, MdDarkMode, MdLightMode } from "react-icons/md";

const Dashboard = ({ user }) => {
  const [mobile, setMobile] = useState(false);
  const [visa, setVisa] = useState([]);
  const [affilates, setAffilates] = useState([]);
  const [mode, setMode] = useState(false);
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
    <div
      className={
        mode
          ? "bg-[#f1f2f6] w-[100%] h-[100vh]"
          : "bg-[#031525] w-[100%] h-[100vh]"
      }
    >
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
          <Mobile_nav user={user} setMobile={setMobile} mode={mode} />
        ) : (
          <Dashboard_nav mode={mode} setMode={setMode} />
        )}
        <aside
          className={
            mode
              ? "w-[100%] lg:w-[80%] h-[100%]  flex flex-col bg-[#f1f2f6]"
              : "w-[100%] lg:w-[80%] h-[100%]  flex flex-col bg-[#031525]"
          }
        >
          <Routes>
            <Route
              path="/Admin"
              element={
                <Admin
                  user={user}
                  visa={visa}
                  affilates={affilates}
                  mode={mode}
                  setMode={setMode}
                />
              }
            />
            <Route
              path="/Profile"
              element={<Profile navigate={navigate} user={user} mode={mode} />}
            />
            <Route
              path="/users"
              element={
                <Users user={user} {...{ callback }} {...{ callVisa }} />
              }
            />
            <Route
              path="/pass_word"
              element={<ChangePassword user={user} mode={mode} />}
            />
          </Routes>{" "}
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
