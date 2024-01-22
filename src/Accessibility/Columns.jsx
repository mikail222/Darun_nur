import React, { useEffect, useState } from "react";
import { BiArrowToBottom, BiArrowToTop, BiNotification } from "react-icons/bi";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import mgs from "../assets/chat_1041916.png";
import affilateIcon from "../assets/affiliate-marketing_10846492.png";
import usericon from "../assets/team_12202122.png";
import visaicon from "../assets/visa_5968334.png";
import { MdMessage } from "react-icons/md";

const Columns = ({ msg, inbox }) => {
  const [monthlyUser, setMonthlyUser] = useState(null);
  const [monthlyDiff, setMonthlyDiff] = useState([]);
  const [monthlyAff, setMonthlyAff] = useState(null);
  const [monthlyVisa, setMonthlyVisa] = useState(null);
  const [monthlyDiffAff, setMonthlyDiffAff] = useState([]);
  const [monthlyDiffVisa, setMonthlyDiffVisa] = useState([]);
  console.log(inbox);
  const columnData = [
    {
      title: "MESSAGE",
      info: msg.length,
      query: "Contact",
      button: "overall",
      imgs: mgs,
      icon: inbox.length,
    },
    {
      title: "AFFILATE",
      icon: "",
      info: monthlyAff,
      query: "Afillate",
      button: "last month",
      imgs: affilateIcon,
      perct: monthlyDiffAff,
    },
    {
      title: "VISA DOCS",
      icon: "",
      imgs: visaicon,
      info: monthlyVisa,
      perct: monthlyDiffVisa,

      query: "Visa_assistance",
      button: "last month",
    },
    {
      title: "USER",
      icon: "",
      info: monthlyUser,
      perct: monthlyDiff,
      query: "users",
      button: "last month",
      imgs: usericon,
    },
  ];

  useEffect(() => {
    let data = columnData.query;
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

  const currentUser = auth.currentUser;
  return (
    <div className=" w-[96%]  lg:w-[93%] flex flex-col ml-[3%] md:ml-[2%] lg:ml-[3.5%]">
      <div className="WrapperContainer">
        {columnData?.map(({ title, imgs, info, perct, button, icon }, i) => (
          <div key={i}>
            <article className="colarrange">
              <p>{title}</p>
              <nav>
                <h4>{info}</h4>
              </nav>
              <p>{button}</p>
            </article>
            <article className="flex flex-col gap-[5%]">
              {perct >= 100 ? (
                <nav className="text-[green] flex flex-row justify-center items-center">
                  <BiArrowToTop className="fill-[green]" />
                  <p>{perct} %</p>
                </nav>
              ) : (
                <nav className="text-[red]  flex flex-row justify-center items-center">
                  {perct ? (
                    <>
                      <BiArrowToBottom className="fill-[red]" />
                      <p>{perct}%</p>
                    </>
                  ) : (
                    icon && (
                      <nav className="flex flex-row justify-center items-center">
                        <p className="bg-[orange] text-white rounded-[100px] px-[5px] w-[15px] h-[15px] relative left-[25px] top-[-8px] flex flex-col justify-center items-center ">
                          <p className="text-[10px] font-bold ">{icon}</p>
                        </p>
                        <MdMessage className="w-[25px] h-[25px] fill-[lightblue]" />
                      </nav>
                    )
                  )}
                </nav>
              )}
              <span>
                <img src={imgs} alt="" className="w-[35px] h-[35px]" />
              </span>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Columns;
