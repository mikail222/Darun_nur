import React, { useState } from "react";

const Hotel_Dropdown = ({
  adult,
  children,
  setRoom,
  setAdult,
  setChildren,
}) => {
  return (
    <div>
      <div className="hotel_container">
        <div>
          <div className="flex flex-row justify-around mb-[2rem] text-[#01004d] mt-[8%] items-center  z-[1]">
            <p className="text-[0.85rem] text-[gray]">Room </p>
            <div className="flex flex-row  border-[#01004d] border-[2px] px-[0.78rem] gap-[0.5rem]">
              <p className="text-[0.78rem]">Add room</p>
              <p className="text-[0.78rem]">+</p>
            </div>
          </div>
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
          <div className="flex flex-row justify-around mt-[1rem] items-center">
            <div className="flex flex-col leading-[13px]">
              <p className="text-[0.85rem] ">Children</p>
              <p className="text-[0.65rem] text-[gray]">2 - 11 yrs</p>
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
                <p className="text-[1rem]">-</p>
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-[20%] mr-[8%] gap-[0.5rem] justify-end">
            <button
              type="button"
              className="text-[#01004d] outline-none"
              onClick={(e) => setRoom(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-[orange] px-[18px] p-[8px] text-white rounded-[4px] outline-none"
              onClick={(e) => setRoom(false)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel_Dropdown;
