import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigation = [
  {
    name: "Home",
    path: "/",
    icon: "home", // Optional
  },
  {
    name: "About",
    path: "/about",
    icon: "info",
  },
  {
    name: "Services",
    path: "/services",
    icon: "briefcase",
    children: [
      { name: "Web Design", path: "/services/web-design" },
      { name: "SEO", path: "/services/seo" },
      { name: "Marketing", path: "/services/marketing" },
    ],
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: "image",
  },
  {
    name: "Blog",
    path: "/blog",
    icon: "file-text",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "phone",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigation.map((route, i) => (
    <li
      key={i}
      className="relative group hover:bg-amber-400 p-3 lg:rounded-2xl"
    >
      <a href={route.path}>{route.name}</a>
      {route.children && (
        <ul className="hidden group-hover:block border-1 p-2 md:p-0 lg:p-4 md:block lg:hidden lg:absolute lg:top-12 bg-white lg:border-1 border-gray-300 w-[200px] lg:shadow-2xl md:border-0">
          {route.children.map((child, i) => (
            <li className="mt-2" key={i}>
              {child.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <nav className="flex justify-between max-w-[1400px] mx-auto px-2 py-2 items-center">
      <span onClick={() => setOpen(!open)} className="lg:hidden block">
        {open ? <X /> : <Menu />}
        <ul
          className={`absolute bg-white shadow-2xl ${
            open ? "left-5 duration-600" : "-left-70 duration-200"
          } flex flex-col p-2 mt-2 gap-2 lg:hidden border-1 border-gray-300 w-[250px] rounded-lg`}
        >
          {links}
        </ul>
      </span>

      <h3 className="font-bold text-2xl">MY NAV</h3>

      <ul className="flex gap-5 items-center hidden md:hidden lg:flex">
        {links}
      </ul>

      <button className="border-1 border-gray-300 px-3 py-2 rounded">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
