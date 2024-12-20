"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full">
      {/*Desktop Navbar*/}
      <div className="hidden sm:flex justify-end items-center">
        <ul className="flex gap-5">
          <li className="cursor-pointer relative group">
            <Link href={"/works"}>
              <b>Works</b>
            </Link>
            <span className="absolute w-full h-[2px] bg-black scale-x-0 left-0 bottom-0 group-hover:scale-x-100 transition-transform duration-100 origin-bottom"></span>
          </li>
          <li className="cursor-pointer relative group">
            <Link href={"/blog"}>
              <b>Blog</b>
            </Link>
            <span className="absolute w-full h-[2px] bg-black scale-x-0 left-0 bottom-0 group-hover:scale-x-100 transition-transform duration-100 origin-bottom"></span>
          </li>
          <li className="cursor-pointer relative group">
            <Link href={"/contact"}>
              <b>Contact</b>
            </Link>
            <span className="absolute w-full h-[2px] bg-black scale-x-0 left-0 bottom-0 group-hover:scale-x-100 transition-transform duration-100 origin-bottom"></span>
          </li>
        </ul>
      </div>
      {/*Mobile Navbar*/}
      <div className="flex justify-end sm:hidden">
        <button
          onClick={toogleNavbar}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/**Mobile Menu */}
      <div
        className={`absolute flex flex-col items-center top-0 left-0 w-full h-screen  bg-white ${
          open ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="grid m-5 gap-5">
          <li className="cursor-pointer">
            <Link href={"/works"}>
              <b>Works</b>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/blog"}>
              <b>Blog</b>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/contact"}>
              <b>Contact</b>
            </Link>
          </li>
        </ul>
        <Button
          onClick={toogleNavbar}
          className="mt-5 text-gray-600 hover:text-black"
        >
          Close
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
