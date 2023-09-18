import React, { useState } from "react";
import Links from "../Link/Links";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCrossedSabres } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/products", name: "Products", id: 5 },
  ];

  return (
    <nav className="p-6">
      <div
        className="md:hidden text-3xl  font-medium text-blue-600 bg-amber-200 p-3 md:p-6"
        onClick={() => setOpen(!open)}
      >
        {open === true ? <GiCrossedSabres /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static lg:text-3xl lg:p-6 px-6 bg-amber-200 ${
          open ? "top-16 " : "-top-32"
        }`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
