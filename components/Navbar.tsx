"use client";
import logo from "../public/assets/logo.png";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const navLinks = [
    // { name: "About Us", link: "about" },
    // { name: "Contact Us", link: "contact" },
    { name: "Posts", link: "posts" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="my-10 px-4 max-w-[900px] w-full mx-auto py-2 border border-black dark:border-white rounded-full flex items-center justify-between">
        <Link onClick={() => setOpen(false)} href={"/"}>
          <Image
            src={logo}
            alt="Research Info Logo"
            className="h-32 w-32 object-contain"
            priority
          />
        </Link>
        <span
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer  block md:hidden"
        >
          {open ? <AiOutlineClose /> : <BiMenu />}
        </span>
        <ul
          className={` top-32 ${
            open ? "block" : "hidden"
          } left-0 w-full z-50 text-center md:w-auto md:pl-0  fixed md:static pb-12 md:pb-0 md:flex md:items-center md:justify-between  md:space-x-10 bg-light dark:bg-dark  `}
        >
          {navLinks.map((navLink, index) => (
            <Link
              onClick={() => setOpen(false)}
              key={index}
              href={navLink.link}
            >
              <li
                className="cursor-pointer hover:text-blue-500 my-5 md:my-0 "
                key={index}
              >
                {navLink.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
