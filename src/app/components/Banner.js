"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`margin-custom fixed top-[92%] w-full z-20 flex flex-row text-white bg-[#04CF9B] h-10 items-center justify-center py-8  ${
        isOpen ? "flex" : "hidden"
      } md:py-5 md:top-[97%] lg:top-[95%]`}
    >
      <div className="flex flex-row gap-2">
        <MdOutlineVerified className="text-2xl" />
        <p className="">
          MOKO ผลิตภัณฑ์ ได้รับการรับรอง อย 50-1-6600039912{" "}
          <Link
            href={
              "http://pertento.fda.moph.go.th/FDA_SEARCH_CENTER/PRODUCT/export_cmt_detail.aspx?regnos=5016600039912"
            }
            className="underline decoration-whites"
            target="_blank"
          >
            คลิกได้ที่
          </Link>
        </p>
      </div>
      <IoMdClose
        className={`absolute right-0 mr-4 z-10 text-xl`}
        onClick={handleClick}
      />
    </div>
  );
}

export default Banner;
