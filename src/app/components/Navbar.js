"use client";
import React, { useCallback, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-5 md:flex md:items-center  md:px-24 md:gap-20">
      <div className="flex justify-between px-7 md:px-0 md:basis-1/5">
        <Link href="#product" className="max-w-[125px] 2xl:max-w-[200px]">
          <Image src="/image/Logo/Logo4.png" alt="" width={200} height={200} />
        </Link>

        <button
          className="md:hidden cursor-pointer text-[#629c85] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseOutline size={35} /> : <IoMenuOutline size={35} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } py-5 md:flex md:py-0  md:basis-4/5 `}
      >
        <ul className="md:flex md:w-full md:justify-between">
          <li className="px-3 py-2">
            <Link
              href={"#product"}
              onClick={(e) => handleScroll(e, "product")}
              className="text-[#629c85] hover:opacity-75 px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              PRODUCT
            </Link>
          </li>
          <li className="px-3 py-2">
            <Link
              href={"#review"}
              onClick={(e) => handleScroll(e, "review")}
              className="text-[#629c85] hover:opacity-75  px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              REVIEWER
            </Link>
          </li>
          <li className="px-3 py-2">
            <Link
              href={"#contact"}
              onClick={(e) => handleScroll(e, "contact")}
              className="text-[#629c85] hover:opacity-75  px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
