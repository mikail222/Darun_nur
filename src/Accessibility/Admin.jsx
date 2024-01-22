import React, { useEffect, useState } from "react";
import Columns from "./Columns";
import { BiDotsVerticalRounded, BiUser } from "react-icons/bi";
import { TbAffiliate } from "react-icons/tb";
import { SiVisa } from "react-icons/si";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import { auth, db } from "../firebaseConfig";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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

const Admin = ({ user, visa, affilates }) => {
  const [message, setMessage] = useState([]);
  const [monthlyUser, setMonthlyUser] = useState(null);
  const [monthlyAff, setMonthlyAff] = useState([]);
  const [monthlyVisa, setMonthlyVisa] = useState([]);
  const [monthlyDiff, setMonthlyDiff] = useState([]);

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

  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] lg:pt-[50%] lg:mt-[0px] md:mt-[50%]  adminBg lg:h-[50vh] md:h-[50vh] flex flex-col justify-center">
        {inbox.length > 0 && (
          <div
            data-aos="slide-right"
            className="lg:w-[26%] w-[94%] md:w-[42%] mt-[5%] ml-[2.6%]  lg:ml-[3.5%] lg:h-[4rem] h-[2rem] md:h-[5%] text-center  text-[gray] lg:py-[2%]  md:py-[4%] bg-white relative rounded-[5px] flex flex-col justify-center items-center px-[5px]"
          >
            <p data-aos="zoom-in" className="font-bold">
              your have {inbox.length} new message Boss
            </p>
          </div>
        )}
        <div></div>
        <Columns
          inbox={inbox}
          user={user}
          visa={visa}
          affilates={affilates}
          msg={message}
          monthlyUser={monthlyUser}
          monthlyAff={monthlyAff}
          monthlyVisa={monthlyVisa}
          monthlyDiff={monthlyDiff}
        />
        <div className=" flex flex-row  lg:gap-[1rem] justify-center">
          <div className="field">
            <aside className="graphField">
              {" "}
              <h5 className="my-[3%] px-[3%]">Last 6 month Registration</h5>
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 10, right: 0, left: 7, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="green" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  {/* <YAxis /> */}
                  <CartesianGrid strokeDasharray="3 3" className="gridLine" />
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
          <aside className="revenue bg-white ">
            <div className="flex flex-row justify-between items-center w-[100%] p-[3%]">
              <p>Total Registration</p>
              <BiDotsVerticalRounded />
            </div>
            <div className="progressbar">
              <CircularProgressbar
                value={user?.length}
                text={`${user?.length}%`}
                strokeWidth={6}
              />
            </div>
          </aside>
        </div>
        <div className="productWrapper">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Icon</TableCell>
                  <TableCell align="left">Categories</TableCell>
                  <TableCell align="left">Total</TableCell>
                  <TableCell align="right">profile pictures</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <BiUser className="bg-[purple]  proIcon" />
                  </TableCell>
                  <TableCell align="left">Registered Users</TableCell>
                  <TableCell align="left"> {user?.length}</TableCell>
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
                  <TableCell align="left">Visa Document</TableCell>
                  <TableCell align="left"> {visa?.length}</TableCell>
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
                  <TableCell align="left">Registered Affilates</TableCell>
                  <TableCell align="left"> {affilates?.length}</TableCell>
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Admin;
