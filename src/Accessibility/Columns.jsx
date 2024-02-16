import React, { useEffect, useState } from "react";
import { BiArrowToBottom, BiArrowToTop, BiNotification } from "react-icons/bi";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import mgs from "../assets/chat_1041916.png";
import affilateIcon from "../assets/affiliate-marketing_10846492.png";
import usericon from "../assets/team_12202122.png";
import visaicon from "../assets/visa_5968334.png";
import { MdMessage } from "react-icons/md";

const Columns = ({
  msg,
  inbox,
  mode,
  monthlyAff,
  monthlyDiff,
  monthlyDiffAff,
  monthlyDiffVisa,
  monthlyUser,
  monthlyVisa,
}) => {
  const columnData = [
    {
      title: "MESSAGE",
      info: msg.length,
      query: "Contact",
      button: "overall",
      imgs: mgs,
      icon: inbox?.length > 0 ? inbox?.length : "",
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

  const currentUser = auth.currentUser;
  return (
    <div className="w-[100%] flex flex-col  justify-center items-center">
      <div className="WrapperContainer">
        {columnData?.map(({ title, imgs, info, perct, button, icon }, i) => (
          <div className={mode ? "columDiv" : "columDivDark"} key={i}>
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
