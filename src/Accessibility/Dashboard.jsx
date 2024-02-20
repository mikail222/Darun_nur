import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard_nav from "./Dashboard_nav";
import Admin from "./Admin";
import Mobile_nav from "./Mobile_nav";
import { BiBell, BiMenu, BiNotification } from "react-icons/bi";
import Users from "./Users";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import { MdCancel, MdDarkMode, MdLightMode } from "react-icons/md";
import InformationPage from "./InformationPage";
import { collection, onSnapshot } from "firebase/firestore";
import emoji from "../assets/pexels-alba-chiara-oldoini-2567550.jpg";
import EmployeeRegistration from "./EmployeeRegistration";

const Dashboard = () => {
  const [mobile, setMobile] = useState(false);
  const [visa, setVisa] = useState([]);
  const [staff, setStaff] = useState([]);
  const [user, setUser] = useState([]);
  const [affilates, setAffilates] = useState([]);
  const [mode, setMode] = useState(false);
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUser(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "Employee"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setStaff(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  useEffect(() => {
    const unsubs = onSnapshot(
      collection(db, "Afillate"),
      (snapShot) => {
        const Affiliates = [];
        snapShot.forEach((doc) => {
          Affiliates.push({ id: doc.id, ...doc.data() });
        });
        setAffilates(Affiliates);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubs();
    };
  }, []);
  useEffect(() => {
    const unsubsDoc = onSnapshot(
      collection(db, "Visa_assistance"),
      (snapShot) => {
        const Visa = [];
        snapShot.forEach((doc) => {
          Visa.push({ id: doc.id, ...doc.data() });
        });
        setVisa(Visa);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubsDoc();
    };
  }, []);

  return (
    <div
      className={
        mode
          ? "bg-[#f1f2f6] w-[100%] h-[100vh]"
          : "bg-[#031525] w-[100%] h-[100vh]"
      }
    >
      <div className="w-[100%] flex flex-row justify-between items-center py-[2%] gap-[1%] border-b-[1px] border-[gray]">
        <div className="lg:w-[100%] w-[50%]  flex flex-row lg:justify-end lg:items-end justify-around items-center gap-[1%] lg:px-[2%]">
          <div>
            {mode ? (
              <MdLightMode
                onClick={() => setMode(false)}
                className="modeIcon"
              />
            ) : (
              <MdDarkMode onClick={() => setMode(true)} className="modeIcon" />
            )}
          </div>

          <div className="flex flex-row ">
            <BiBell className="w-[30px] h-[30px] fill-[lightgray]" />
            <div className="flex flex-col justify-center items-center w-[15px] h-[15px] text-center rounded-[100px] bg-[green] text-white relative left-[-15px]">
              <p>5</p>
            </div>
          </div>
          <img
            src={currentUser ? currentUser.photoURL : emoji}
            alt=""
            className="w-[35px] h-[35px] border-[2px] rounded-[100px] border-white object-cover"
          />
        </div>
        <div className="lg:hidden flex  flex-col  justify-end items-end px-[25px] py-[2%]">
          {mobile === false ? (
            <BiMenu
              className="lg:hidden flex flex-col w-[25px] h-[25px]"
              onClick={() => setMobile(true)}
              style={mode ? { fill: "black" } : { fill: "white" }}
            />
          ) : (
            <MdCancel
              className="lg:hidden flex flex-col w-[25px] h-[25px] justify-end items-end"
              onClick={() => setMobile(false)}
              style={mode ? { fill: "black" } : { fill: "white" }}
            />
          )}
        </div>
      </div>

      <div className="w-[100%] h-[auto] lg:flex flex-row justify-between">
        {mobile === true ? (
          <Mobile_nav user={user} setMobile={setMobile} mode={mode} />
        ) : (
          <Dashboard_nav mode={mode} user={user} setMode={setMode} />
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
                <Users
                  users={user}
                  visas={visa}
                  affilates={affilates}
                  staff={staff}
                  mode={mode}
                />
              }
            />
            <Route
              path="/pass_word"
              element={<ChangePassword user={user} mode={mode} />}
            />
            <Route
              path="/chart"
              element={<InformationPage user={user} mode={mode} />}
            />
            <Route
              path="/Hire"
              element={<EmployeeRegistration user={user} mode={mode} />}
            />
          </Routes>{" "}
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
