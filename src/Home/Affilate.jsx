import React, { useEffect } from "react";
import logo from "../assets/darul-nur-low-resolution-logo-color-on-transparent-background.png";
import Nav_bar from "../Navigation/Nav_bar";
import arabman from "../assets/istockphoto-1298353587-612x612-removebg-preview.png";
import group from "../assets/111-1110507_img-group-of-people-animated-png-clipart-removebg-preview.png";
import announce from "../assets/images-removebg-preview.png";
import offerImg from "../assets/pngtree-percent-sign-3d-icon-render-png-image_6116477-removebg-preview.png";
import satisfaction from "../assets/51-510761_100-satisfaction-guarantee-label-removebg.png";
import Mail from "../Service/Mail";
import Footer from "../Footer/Footer";
const Affilate = ({ navigate }) => {
  const offer = [
    {
      imge: group,
      title: "Who we are",
      className: "offer1",
      content:
        "We are Nigeria's leading online travel agency offering you the best prices for travel products and technology to enable you grow your travel business.",
    },
    {
      imge: announce,
      title: "Become an Affilate",
      className: "offer2",
      content:
        "We put the power of pricing in your hands by giving you the  ability to adjust pricing for flights and hotels at great discounts.",
    },
    {
      imge: offerImg,
      title: "What we offer",
      className: "offer3",
      content:
        "We offer discounted domestic and international flights, over  508,000 hotels worldwide, airport transfers, visa services and travel packages.",
    },
  ];
  return (
    <div className="flex flex-col justify-center ">
      <Nav_bar />
      <div className="flex flex-col justify-center lg:flex-row lg:justify-around">
        <aside className="">
          <div className=" w-[90%] lg:w-[100%] ml-[4%] lg:ml-[0px] lg:mt-[20%] gap-[2rem]">
            <p className=" w-[70%] text-[1.4rem] lg:text-[2.4rem] lg:w-[25rem] leading-[2rem] lg:leading-[3.2rem] font-semibold my-[2rem]">
              𝙶𝚎𝚝 𝚏𝚊𝚗𝚝𝚊𝚜𝚝𝚒𝚌 𝚙𝚛𝚘𝚏𝚒𝚝 𝚊𝚜 𝚊
            </p>
            <img src={logo} alt="" className="w-[70%] lg:w-[15rem]" />
            <button
              type="button"
              onClick={() => navigate("/Affilate_Registration")}
              className="bg-[#ffb712] text-white w-[55%] py-[1rem] rounded-[3px] my-[2rem] outline-0 text-[0.9rem] font-extrabold"
            >
              Get started
            </button>
          </div>
        </aside>
        <section className="">
          <div className="">
            <img src={arabman} alt="" className=" lg:h-[75vh]" />
          </div>
        </section>
      </div>
      <div className="bg-[#f8f9fc] my-[1rem] lg:h-[130vh] py-[2rem]">
        <div className="my-[5rem]">
          <div className="w-[90%] mx-[3%] lg:w-[40%] lg:mx-[5rem]">
            <p className="text-[2rem] font-bold leading-[2.5rem] w-[70%] ">
              Why Become Darun-nur Affiliate?
            </p>
            <p className="lg:w-[80%] my-[2rem]">
              Enjoy unbeatable discounts on flights, hotels, tours and visa
              processing, all around the world - far better than what you get
              with any other online travel company
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-[3%] gap-[1.9rem] my-[5rem]">
            {offer.map(({ imge, content, title, className }, i) => (
              <div key={i} className="i">
                <div className={className}>
                  <img
                    src={imge}
                    alt=""
                    className="w-[60%] lg:h-[30vh]  object-contain"
                  />
                </div>
                <p className="text-[1.2rem] font-bold my-[1rem]">{title}</p>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:h-[60vh] gap-[2rem] my-[6%] lg:gap-[4rem]">
        <div className="flex  flex-col lg:flex-row justify-center items-center w-[80%] lg:w-[40%] lg:h-[25vh] gap-[2rem]">
          <img src={satisfaction} alt="" className="lg:w-[20vw]" />
          <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <p className="text-[1.2rem] font-bold my-[0.5rem]">
              Satisfaction Guarantee
            </p>
            <p className=" w-[70%] text-center lg:text-[left] lg:w-[90%] text-[0.9rem]">
              Receive a refund on your travel insurance premium within 10 days
              of purchase.
            </p>
          </div>
        </div>
        <div className=" bg-[#96ecd3] w-[90%] lg:w-[40%] lg:h-[32vh]">
          <div className="m-[1.2rem]">
            <p className="font-extrabold">Need Darun nur help?</p>
            <p className="my-[0.5rem] lg:w-[24rem] font-thin">
              We would be more than happy to help you. Our team advisor are 24/7
              at your service to help you.
            </p>
            <p>Email: Darunnur@gmail.com</p>
            <p className="font-extrabold">Phone: 08124330616</p>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};

export default Affilate;
