import React, { useEffect, useState } from "react";
import Columns from "./Columns";
import { BiDotsVerticalRounded, BiUser } from "react-icons/bi";
import { TbAffiliate } from "react-icons/tb";
import { SiVisa } from "react-icons/si";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import { auth, db } from "../firebaseConfig";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
const Admin = ({ user, visa, affilates, mode, setMode }) => {
  const [message, setMessage] = useState([]);
  const [msg, setMsg] = useState([]);
  const [view, setView] = useState(false);
  const [monthlyUser, setMonthlyUser] = useState(null);
  const [monthlyDiff, setMonthlyDiff] = useState([]);
  const [monthlyAff, setMonthlyAff] = useState(null);
  const [monthlyVisa, setMonthlyVisa] = useState(null);
  const [monthlyDiffAff, setMonthlyDiffAff] = useState([]);
  const [monthlyDiffVisa, setMonthlyDiffVisa] = useState([]);

  const darkModeClasses = {
    backgroundColor: "#121212",
    color: "white",
  };
  useEffect(() => {
    // let data = columnData.query;
    const getMonths = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const lastMonthAff = query(
        collection(db, "Afillate"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthAff = query(
        collection(db, "Afillate"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const lastMonthVisa = query(
        collection(db, "Visa_assistance"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthVisa = query(
        collection(db, "Visa_assistance"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);
      const lastMonth_Aff = await getDocs(lastMonthAff);
      const prevMonth_Aff = await getDocs(prevMonthAff);
      const lastMonth_visa = await getDocs(lastMonthVisa);
      const prevMonth_visa = await getDocs(prevMonthVisa);

      setMonthlyUser(lastMonthData.docs.length);
      setMonthlyAff(lastMonth_Aff.docs.length);
      setMonthlyVisa(lastMonth_visa.docs.length);
      setMonthlyDiff(
        lastMonthData.docs.length -
          (prevMonthData.docs.length / prevMonthData.docs.length) * 100
      );
      setMonthlyDiffAff(
        lastMonth_Aff.docs.length -
          (prevMonth_Aff.docs.length / prevMonth_Aff.docs.length) * 100
      );
      setMonthlyDiffVisa(
        lastMonth_visa.docs.length -
          (prevMonth_visa.docs.length / prevMonth_visa.docs.length) * 100
      );
    };
    getMonths();
  }, []);

  useEffect(() => {
    const unsubsDoc = onSnapshot(
      collection(db, "Contact"),
      (snapShot) => {
        const msg = [];
        snapShot.forEach((doc) => {
          msg.push({ id: doc.id, ...doc.data() });
        });
        setMessage(msg);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubsDoc();
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const today = new Date().toDateString();
  const inbox = message?.filter(({ day }) => day === today);
  const fireTostify = inbox >= 1;
  const data = [
    {
      name: "January",
      Total: 4000,
    },
    {
      name: "February",
      Total: 3000,
    },
    {
      name: "March",
      Total: 2000,
    },
    {
      name: "April",
      Total: 2780,
    },
    {
      name: "May",
      Total: 1890,
    },
    {
      name: "June",
      Total: 2390,
    },
  ];
  const handleView = async (id) => {
    const checkMsg = message.find((p) => p.id === id);
    setMsg(checkMsg);
    setView(true);
  };
  const handleDelete = async (id) => {
    const checkMsg = message.find(({ id }) => id === id);
    try {
      if (
        window.confirm(
          `are  you sure you want  to  delete  ${checkMsg.first}  message ?`
        )
      ) {
        await deleteDoc(doc(db, "Contact", id));
        setMessage(message.filter((p) => p.id !== id));
      }
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };
  useEffect(() => {
    const notify = () => {
      toast(`you have ${inbox} new message`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    };

    notify();
  }, [fireTostify]);
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%]  lg:mt-[0px] adminBg flex flex-col justify-center ">
        <ToastContainer />
        <Columns
          inbox={inbox}
          user={user}
          visa={visa}
          affilates={affilates}
          msg={message}
          mode={mode}
          monthlyAff={monthlyAff}
          monthlyDiff={monthlyDiff}
          monthlyDiffVisa={monthlyDiffVisa}
          monthlyDiffAff={monthlyDiffAff}
          monthlyUser={monthlyUser}
          monthlyVisa={monthlyVisa}
        />
        <div className="w-[100%] flex flex-row gap-[1rem] px-[1%] lg:px-[2%]">
          <div className="field">
            <aside className={mode ? "graphField" : "graphFielddark"}>
              {" "}
              <p
                className="my-[3%] px-[3%] font-semibold text-[2rem]"
                style={mode ? { color: "gray" } : { color: "lightgrey" }}
              >
                Last 6 month Registration
              </p>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 10, right: 5, left: 5, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="green" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  {/* <YAxis /> */}
                  <CartesianGrid strokeDasharray="0 3" className="gridLine" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#total)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </aside>
          </div>
          <aside className={mode ? "revenue" : "revenueDark"}>
            <div className="flex flex-row justify-between items-center w-[100%] py-[5%]">
              <p>Total Registration</p>
              <BiDotsVerticalRounded />
            </div>
            <div className="progressbar">
              <CircularProgressbar
                value={monthlyDiff}
                text={`${monthlyDiff}%`}
                strokeWidth={10}
              />
            </div>
            <p> The Total Registration for the month is </p>
            <p className="text-[2rem]">{user.length}</p>
          </aside>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className={mode ? "productWrapper" : "productWrapperDark"}>
            <p className="text-[gray] text-[2rem] m-[2%]">Clients</p>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                className={mode ? "bg-white" : "tableDark"}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <p>Icon</p>
                    </TableCell>
                    <TableCell align="left">
                      <p>Categories</p>
                    </TableCell>
                    <TableCell align="left">
                      <p>Total</p>
                    </TableCell>
                    <TableCell align="left">
                      <p>Progress</p>
                    </TableCell>
                    <TableCell align="center">
                      <p>profile pictures</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <BiUser className="bg-[purple]  proIcon" />
                    </TableCell>
                    <TableCell align="left">
                      <p>Registered Users</p>
                    </TableCell>
                    <TableCell align="left">
                      <p>{user?.length}</p>
                    </TableCell>
                    <TableCell align="left">
                      <div className="">
                        {monthlyDiff}%
                        <ProgressBar animated now={monthlyDiff} />
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className=" flex flex-row  justify-end items-end">
                        {user?.slice(0, 5).map(({ img }, i) => (
                          <img src={img} alt="" className="proImg" />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <SiVisa className="bg-[black]  proIcon" />
                    </TableCell>
                    <TableCell align="left">
                      <p>Visa Document</p>
                    </TableCell>
                    <TableCell align="left">
                      <p> {visa?.length}</p>
                    </TableCell>{" "}
                    <TableCell align="left">
                      <div className="">
                        {monthlyDiffVisa}%
                        <ProgressBar animated now={monthlyDiffVisa} />
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className=" flex flex-row  justify-end items-end">
                        {visa?.slice(0, 5).map(({ img }, i) => (
                          <img src={img} alt="" className="proImg" />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <TbAffiliate className="  bg-[teal] proIcon shadow-xl" />
                    </TableCell>
                    <TableCell align="left">
                      <p>Afillate Document</p>
                    </TableCell>
                    <TableCell align="left">
                      <p>{affilates?.length}</p>{" "}
                    </TableCell>{" "}
                    <TableCell align="left">
                      <div className="">
                        {monthlyDiffAff}%
                        <ProgressBar animated now={monthlyDiffAff} />
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className=" flex flex-row  justify-end items-end">
                        {affilates?.slice(0, 5).map(({ img }, i) => (
                          <img src={img} alt="" className="proImg" />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div a className={mode ? "productWrapper" : "productWrapperDark"}>
            <p className="text-[gray] text-[2rem] m-[2%]">Message Details</p>
            {message && view === false ? (
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  className={mode ? "bg-white" : "tableDark"}
                >
                  <TableHead>
                    <TableRow className="head">
                      <TableCell align="left">
                        <p>Name</p>
                      </TableCell>
                      <TableCell align="left">
                        <p>Email</p>
                      </TableCell>
                      <TableCell align="left">
                        <p>Contact</p>
                      </TableCell>{" "}
                      <TableCell align="left">
                        <p>Subject</p>
                      </TableCell>
                      <TableCell align="left">
                        <p>Received</p>
                      </TableCell>{" "}
                      <TableCell align="left">
                        <p>Details</p>
                      </TableCell>{" "}
                      <TableCell align="left">
                        <p>Action</p>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {message?.map(
                      ({ day, first, email, phone, subject, id }, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">
                            <p>{first}</p>
                          </TableCell>
                          <TableCell align="left">
                            <p>{email}</p>
                          </TableCell>
                          <TableCell align="center">
                            <p>{phone}</p>
                          </TableCell>
                          <TableCell align="center">
                            <p>{subject}</p>
                          </TableCell>
                          <TableCell align="left">
                            <p>{day}</p>
                          </TableCell>{" "}
                          <TableCell align="left">
                            {view === false && (
                              <button
                                onClick={() => handleView(id)}
                                className="text-[lightgreen]  text-[1rem] font-bold"
                              >
                                View
                              </button>
                            )}
                          </TableCell>
                          <TableCell align="left">
                            <button
                              onClick={() => handleDelete(id)}
                              className={mode ? "delete" : "delete text-white"}
                            >
                              Delete
                            </button>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              message &&
              view === true && (
                <div className="flex flex-col justify-center mx-[2%] w-[100%]">
                  <div className="flex flex-row gap-[5%] leading-[50px] my-[5%]">
                    <div>
                      <h3>Name:</h3>
                      <h6>Email:</h6>
                      <h5>Contact:</h5>
                      <h5> Date:</h5>
                      <h5>subject:</h5>
                      <h5>Message:</h5>
                      <h5>Id:</h5>
                    </div>

                    <div>
                      <h3>{msg.first}</h3>
                      <h6>{msg.email}</h6>
                      <h5> {msg.phone}</h5>
                      <h5>{msg.day}</h5>
                      <h5>{msg.subject}</h5>
                      <h5>{msg.message}</h5>
                      <h5>{msg.id}</h5>
                    </div>
                  </div>
                  <div className="w-[50%] flex flex-row justify-around">
                    {view === true && (
                      <button onClick={() => setView(false)} className="close">
                        close
                      </button>
                    )}

                    <button onClick={() => handleDelete(id)} className="delete">
                      delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
