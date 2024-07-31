"use client";
import React, { useCallback, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useScrolling } from "./ScrollProvider";

function Navbar() {
  const { isNavbarbg, isFontColor } = useScrolling();
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector("nav").offsetHeight;
    if (element) {
      console.log(element.offsetTop - navbarHeight);
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-10 h-16 py-3 ${
        !isNavbarbg ? "bg-transparent" : "bg-white"
      } md:flex md:items-center md:px-24 md:gap-20`}
    >
      <div className="flex justify-between px-7 md:px-0 md:basis-1/5">
        <Link
          href="#moko"
          onClick={(e) => handleScroll(e, "moko")}
          className="max-w-[125px] 2xl:max-w-[200px] color"
        >
          {!isFontColor ? (
            <Image
              src="/image/Logo/Moko-Logo-White.svg"
              alt=""
              width={200}
              height={200}
            />
          ) : (
            <Image
              src="/image/Logo/Moko-Logo-Green.svg"
              alt=""
              width={200}
              height={200}
            />
          )}
        </Link>
        <button
          className={`md:hidden cursor-pointer ${
            !isFontColor ? "text-white" : "text-[#629c85]"
          } focus:outline-none`}
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseOutline size={35} /> : <IoMenuOutline size={35} />}
        </button>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} ${
          !isNavbarbg ? "bg-transparent" : "bg-white"
        } py-5 md:flex md:py-0 md:basis-4/5 `}
      >
        <ul
          className={`flex flex-col w-full ${
            !isFontColor ? "text-white" : "text-[#629c85]"
          }  gap-3 -mt-1  md:mt-0 md:flex-row md:justify-between`}
        >
          <li className="px-3 py-2 ">
            <Link
              href={"#product"}
              onClick={(e) => handleScroll(e, "product")}
              className="w-full  hover:opacity-75 px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              Product
            </Link>
          </li>
          <li className="px-3 py-2">
            <Link
              href={"#review"}
              onClick={(e) => handleScroll(e, "review")}
              className="w-full  hover:opacity-75  px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              Reviewer
            </Link>
          </li>
          <li className="px-3 py-2">
            <Link
              href={"#contact"}
              onClick={(e) => handleScroll(e, "contact")}
              className="w-full hover:opacity-75  px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
