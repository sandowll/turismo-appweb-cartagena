import React from "react";
import logo from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

const Menu = [
  {
    id: 1,
    name: "Dónde ir",
    link: "/dóndeir",
  },
  {
    id: 2,
    name: "Qué hacer",
    link: "/quehacer",
  },
  {
    id: 3,
    name: "Informacion práctica",
    link: "/informacionpráctica",
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#172554] shadow-md dark:bg-gray-900 text-white duration-200">
      <div className="container mx-auto py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center font-bold text-3xl sm:text-4xl gap-2">
              <img src={logo} alt="Logo" className="w-12" />
              Planes Cartagena
            </a>
          </div>
          <div className="flex items-center gap-6">
            <ul className="hidden sm:flex items-center gap-6 text-lg">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block py-2 px-4 hover:text-[#921212]"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
