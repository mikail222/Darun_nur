import React, { useEffect, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsStars } from "react-icons/bs";
import kaaba from "../assets/pexels-tahir-shaw-186985.jpg";
import sample from "../assets/fabian-joy-YZrgAkpbXJQ-unsplash.jpg";
import satisfy from "../assets/satisfaction.svg";

const FAQs = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="my-[10%] lg:px-[5%]" data-aos="zoom-in">
        <div className="faq ">
          <div className="faqform">
            <div>
              <p className="text-[#133063]  font-bold">
                FREQUENTLY ASK QUESTION
              </p>
              <h1 className="lg:text-[3rem] font-bold  text-[#133063]">
                GET ANSWERS TO COMMON QUESTIONS ABOUT HOW WE OPERATE
              </h1>
            </div>
            <div className="toggleDetails">
              <div className="div">
                <span>
                  <h6>What document do i need? </h6>
                  {!show1 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow1(true)}
                    />
                  )}
                  {show1 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow1(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show1 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>{" "}
              <div className="div">
                <span>
                  <h6>Do I need to be around for every documentation? </h6>
                  {!show2 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow2(true)}
                    />
                  )}
                  {show2 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow2(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show2 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>{" "}
              <div className="div">
                <span>
                  <h6>How will Our relationship work? </h6>
                  {!show3 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow3(true)}
                    />
                  )}
                  {show3 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow3(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show3 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>{" "}
              <div className="div">
                <span>
                  <h6>what level of hospitality do give to your client? </h6>
                  {!show4 && (
                    <MdOutlineKeyboardArrowRight
                      className="arrow"
                      onClick={() => setShow4(true)}
                    />
                  )}
                  {show4 && (
                    <MdKeyboardArrowDown
                      onClick={() => setShow4(false)}
                      className="arrow"
                    />
                  )}
                </span>
                {show4 && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente laborum similique quam iste, minus nam provident!
                      Ipsa quod dignissimos nulla nihil, qui magnam placeat
                      reiciendis aliquam, mollitia, ipsam minus dolorum!
                    </p>
                  </div>
                )}
              </div>
              <nav className="btnRow">
                <button className="" onClick={() => navigate("/")}>
                  VIEW ALL FAQs
                </button>
                <button className="enquirybtn" onClick={() => navigate("/")}>
                  MAKE AN ENQUIRY
                </button>
              </nav>
            </div>
          </div>
          <div className="productDesign">
            <div className="product1">
              <img src={sample} alt="" className="productImg" />
              <BsStars className="BsStar" />
            </div>
            <div className="faqProduct2">
              <BsStars className="BsStar2" style={{ marginTop: "15rem" }} />
              <img src={kaaba} alt="" className="cleanImg " />
            </div>

            <img
              src={satisfy}
              alt=""
              className="w-[10rem] h-[10rem]  relative  top-[-260px] right-[-400px] z-[1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
