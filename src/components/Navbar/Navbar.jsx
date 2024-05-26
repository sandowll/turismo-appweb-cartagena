import React from "react";
import { FaSearch } from "react-icons/fa";
import DarkMode from "./DarkMode";
import logo from '../../assets/logo/logo.svg';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "../Services/Services.jsx",
  },
  {
    id: 3,
    name: "About",
    link: "../Services/Services.jsx",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center font-bold text-3xl sm:text-4xl gap-2">
              <img src={logo} alt="Logo" className="w-12" />
              TraveCart
            </a>
          </div>
          <div className="flex items-center gap-6">
            <DarkMode />
            <ul className="hidden sm:flex items-center gap-6 text-lg">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-2 px-4 hover:text-[#921212]"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-white from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full flex items-center gap-2">
              <FaSearch className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
