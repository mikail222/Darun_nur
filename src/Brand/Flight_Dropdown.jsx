import React, { useState } from "react";

const Flight_Dropdown = ({ setBooking, setTotalpassanger }) => {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(false);
  const [infant, setInfant] = useState(0);

  return (
    <div>
      <div className="flight_container">
        <div>
          <div className="flex flex-row justify-around items-center gap-[1rem]">
            <p className="text-[0.85rem] ">Adult</p>
            <div className="flex flex-row-reverse gap-[1.5rem]  items-center">
              <button
                type="button"
                className="sign bg-[#01004d]"
                onClick={(e) => setAdult((p) => (!p ? 1 : p + 1))}
              >
                +
              </button>
              <p className="text-[0.75rem]">{adult}</p>
              <button
                type="button"
                className="sign bg-[gray]"
                onClick={(e) => setAdult((d) => (!d ? 1 : d - 1))}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="flex flex-col text-left leading-[15px]">
              <p className="text-[0.85rem] ">Children</p>
              <p className="text-[0.85rem] font-thin text-[black]">
                2 - 11 yrs
              </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-[1.5rem]">
              <button
                type="button"
                className="sign bg-[#01004d]"
                onClick={(e) => setChildren((p) => p + 1)}
              >
                +
              </button>
              <p className="text-[0.75rem]">{children}</p>
              <button
                type="button"
                className="sign bg-[gray]"
                onClick={(e) => setChildren((d) => (!d ? 0 : d - 1))}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="flex flex-col text-left leading-[15px]">
              <p className="text-[0.85rem] ">Infant</p>
              <p className="text-[0.85rem] font-thin text-[black]">
                under 2 yrs
              </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-[1.5rem]">
              <button
                type="button"
                className="sign bg-[#01004d]"
                onClick={(e) => setInfant((p) => p + 1)}
              >
                +
              </button>
              <p className="text-[0.75rem]">{infant}</p>
              <button
                type="button"
                className="sign bg-[gray]"
                onClick={(e) => setInfant((d) => (!d ? 0 : d - 1))}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-[5%] mr-[5%] gap-[0.5rem] justify-end">
            <button
              type="button"
              className="text-[#01004d] outline-none"
              onClick={(e) => setBooking(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-[orange] px-[48px] p-[5px] text-white rounded-[4px] outline-none"
              onClick={(e) =>
                setTotalpassanger(adult + children + infant) ||
                setBooking(false)
              }
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight_Dropdown;
