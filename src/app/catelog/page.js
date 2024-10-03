"use client";
import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Page() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    window.location.href = `/#${id}`;

    const element = document.getElementById(id);
    const navbarHeight = document.querySelector("footer")?.offsetHeight || 0;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <div className="px-5 md:px-10 lg:px-20 2xl:px-32">
        <main className="flex-grow">
          <div className="bg-[#57CE7F] relative overflow-hidden  min-h-screen -mx-5 md:-mx-10 lg:-mx-20 2xl:-mx-32">
            <div className="flex flex-row items-center mb-10 absolute top-[4%] left-[5%] text-white">
              <Link href={"/"} className=" hover:text-gray-200">
                หน้าแรก
              </Link>
              <MdKeyboardArrowRight size={20} />
              <p>PRODUCT CATALOG</p>
            </div>
            <div className="flex items-center justify-between text-white mt-20 -mx-5 md:-mx-10 lg:-mx-20 2xl:-mx-32">
              <Image
                src={"/image/catelog/Vector.png"}
                width={200}
                height={200}
                alt=""
                className="w-1/6"
              />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                PRODUCT CATALOG
              </h1>
              <Image
                src={"/image/catelog/Vector1.png"}
                width={200}
                height={200}
                alt=""
                className="w-1/6"
              />
            </div>
            <div className="relative w-full py-10 px-5 md:px-10 lg:px-20 2xl:px-32">
              {/* Desktop Image */}
              <Image
                src="/image/catelog/catelog.png"
                alt="MOKO Product Catalog Desktop"
                width={1200}
                height={800}
                className="w-full hidden md:block"
              />
              {/* Mobile Image */}
              <Image
                src="/image/catelog/catelog.png"
                alt="MOKO Product Catalog Mobile"
                width={800}
                height={1600}
                className="w-full md:hidden"
              />
            </div>
          </div>
        </main>

        <footer className="margin-custom flex flex-col gap-10 bg-[#629C85] py-14 lg:flex-row lg:items-center">
          <div className="flex flex-1 lg:justify-center">
            <Image
              src="/image/Logo/Logo5.png"
              alt=""
              width={100}
              height={50}
              className="max-w-[150px] lg:max-w-[200px]"
            />
          </div>
          <ul className="flex flex-1 flex-col gap-5 py-10">
            <li className="flex items-center gap-7 text-white text-xl">
              <Image
                src={"/image/vector/Vector.png"}
                alt=""
                width={30}
                height={30}
              />
              <Link href={"#moko"}>HOME</Link>
            </li>
            <li className="flex items-center gap-7 text-white text-xl">
              <Image
                src={"/image/vector/Vector.png"}
                alt=""
                width={30}
                height={30}
              />
              <Link href={"#product"}>PRODUCT</Link>
            </li>
            <li className="flex items-center gap-7 text-white text-xl">
              <Image
                src={"/image/vector/Vector.png"}
                alt=""
                width={30}
                height={30}
              />
              <Link href={"/about"}>About US</Link>
            </li>
            <li className="flex items-center gap-7 text-white text-xl">
              <Image
                src={"/image/vector/Vector.png"}
                alt=""
                width={30}
                height={30}
              />
              <Link href={"#review"}>REVIEWER</Link>
            </li>
            <li className="flex items-center gap-7 text-white text-xl">
              <Image
                src={"/image/vector/Vector.png"}
                alt=""
                width={30}
                height={30}
              />
              <Link href="/" onClick={(e) => handleScroll(e, "faq")}>
                FAQ
              </Link>
            </li>
            <li className="flex items-center gap-7 text-white text-xl">
              <Image
                src={"/image/vector/Vector.png"}
                alt=""
                width={30}
                height={30}
              />
              <Link href={"#contact"}>CONTACT US</Link>
            </li>
          </ul>
          <div className="flex-1 max-w-[400px] rounded-3xl p-5 bg-[#386C5F] lg:h-[50%]">
            <p className="text-white text-xl">Follow Us</p>
            <div className="flex flex-row justify-between items-center pt-5">
              <div className="flex flex-row items-center gap-5">
                <Link href="https://www.facebook.com/MOKO.official.th?locale=nl_NL">
                  <Image
                    src="/image/vector/ic_baseline-facebook.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://www.instagram.com/moko_official/">
                  <Image
                    src="/image/vector/mage_instagram-circle.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://www.tiktok.com/@moko.official.th">
                  <Image
                    src="/image/vector/mage_tiktok-circle.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <h2 className="text-2xl text-white pr-6">Moko</h2>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
