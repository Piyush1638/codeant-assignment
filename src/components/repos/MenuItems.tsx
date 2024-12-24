import { menuItems } from "@/data/Menu";
import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import LogoName from "../shared/LogoName";

const MenuItems = () => {
  const [buttonClicked, setButtonClicked] = useState<string>("Repositories");

  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <LogoName classes="text-2xl flex items-center" />
        <DropdownSelect />
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              onClick={() => setButtonClicked(item.name)}
              key={index}
              className={`flex items-center space-x-3 px-3 py-2 font-semibold text-[#414651] cursor-pointer ${
                buttonClicked === item.name
                  ? "text-white bg-[#1570EF] rounded-lg"
                  : ""
              }`}
            >
              <span>{React.createElement(item.icon, { size: 24 })}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <button
          onClick={() => setButtonClicked("Support")}
          className={`font-semibold w-full text-[#414651] mb-4 px-3 py-2 flex items-center gap-3 ${
            buttonClicked === "Support"
              ? "text-white bg-[#1570EF] rounded-lg"
              : ""
          }`}
        >
          <span>
            <IoCallOutline size={24} />
          </span>{" "}
          Support
        </button>
        <button
          onClick={() => setButtonClicked("Logout")}
          className={`font-semibold w-full text-[#414651] cursor-pointer px-3 py-2 flex items-center gap-3 ${
            buttonClicked === "Logout"
              ? "text-white bg-[#1570EF] rounded-lg"
              : ""
          }`}
        >
          <span>
            <MdLogout size={24} />
          </span>{" "}
          Logout
        </button>
      </div>
    </>
  );
};

export default MenuItems;

const DropdownSelect = () => {
  return (
    <div className="relative">
      <select className="text-[#181D27] outline-none border-[#D5D7DA] px-3 py-2 border rounded-lg w-full truncate appearance-none cursor-pointer">
        <option>UtkarshDhairyaajlk</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 text-[#181D27]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
