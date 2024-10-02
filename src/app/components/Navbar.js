"use client";
import React, { useCallback, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useScrolling } from "./ScrollProvider";
import { usePathname } from "next/navigation";

function Navbar() {
  const { isNavbarbg, isFontColor } = useScrolling();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isInCatalog = pathname === "/catelog";
  const isAbout = pathname === "/about";

  const handleScroll = useCallback(
    (e, id) => {
      e.preventDefault();

      // ถ้าอยู่ในหน้า catalog ให้ navigate ไปหน้าหลักก่อน แล้วค่อย scroll
      if (isInCatalog || isAbout) {
        window.location.href = `/#${id}`;
        return;
      }

      if (id === "about" && !isAbout) {
        window.location.href = `/${id}`;
        return;
      }

      // ถ้าไม่ได้อยู่ในหน้า catalog ให้ทำงานปกติ
      const element = document.getElementById(id);
      const navbarHeight = document.querySelector("nav").offsetHeight;
      if (element) {
        console.log(element.offsetTop - navbarHeight);
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    },
    [isInCatalog, isAbout]
  ); // เพิ่ม isInCatalog เข้าไปใน dependency array

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // สร้างฟังก์ชันสำหรับกำหนดสถานะ background
  const getNavbarBackground = () => {
    if (isInCatalog || isAbout) {
      return "bg-white";
    }
    return !isNavbarbg ? "bg-transparent" : "bg-white";
  };

  // สร้างฟังก์ชันสำหรับกำหนดสีของ font
  const getFontColor = () => {
    if (isInCatalog || isAbout) {
      return "text-[#629c85]";
    }
    return !isFontColor ? "text-white" : "text-[#629c85]";
  };

  // สร้างฟังก์ชันสำหรับเลือก logo
  const getLogoSrc = () => {
    if (isInCatalog || isAbout) {
      return "/image/Logo/Moko-Logo-Green.svg";
    }
    return !isFontColor
      ? "/image/Logo/Moko-Logo-White.svg"
      : "/image/Logo/Moko-Logo-Green.svg";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-10 h-16 py-3 ${getNavbarBackground()} md:flex md:items-center md:px-16 md:gap-16`}
    >
      <div className="flex justify-between px-7 md:px-0 md:basis-1/5">
        <Link
          href={"/"}
          onClick={(e) => handleScroll(e, "moko")}
          className="max-w-[125px] 2xl:max-w-[200px] color"
        >
          <Image src={getLogoSrc()} alt="" width={200} height={200} />
        </Link>
        <button
          className={`md:hidden cursor-pointer ${getFontColor()} focus:outline-none`}
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseOutline size={35} /> : <IoMenuOutline size={35} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } ${getNavbarBackground()} py-5 md:flex md:py-0 md:basis-4/5`}
      >
        <ul
          className={`flex flex-col w-full ${getFontColor()} gap-3 -mt-1  md:mt-0 md:flex-row md:justify-between`}
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
          <li className="px-3 py-2 ">
            <Link
              href={"/about"}
              className="w-full  hover:opacity-75 px-3 py-2 rounded-md text-sm font-medium 2xl:text-2xl"
            >
              About Us
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
        <div className="flex-row gap-2 items-center justify-center hidden ml-5 md:flex">
          <Link
            href="https://shopee.co.th/mokothailand"
            target="_blank"
            rel="noopener noreferrer"
            className="shopee max-w-[70px] md:max-w-[60px] lg:max-w-[75px] xl:max-w-[85px]"
          >
            <Image
              src="/image/shop/Shopee.png"
              alt=""
              width={200}
              height={50}
            />
          </Link>
          <Link
            href="https://www.lazada.co.th/shop/moko-thailand"
            target="_blank"
            rel="noopener noreferrer"
            className="lazada max-w-[80px] md:max-w-[60px] lg:max-w-[75px] xl:max-w-[85px]"
          >
            <Image
              src="/image/shop/Lazada.png"
              alt=""
              width={200}
              height={50}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
