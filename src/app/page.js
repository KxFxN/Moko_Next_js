import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HowToUse from "./components/HowToUse";
import ProductDetail from "./components/ProductDetail";
import AutoSlide from "./components/AutoSlide";
import Link from "next/link";
import ProductDisplay from "./components/ProductDisplay";
import ProductDescription from "./components/ProductDescription";

import ParallaxSection from "./components/ParallaxSection";
import { ScrollProvider } from "./components/ScrollProvider";

export default function Page() {
  return (
    <ScrollProvider>
      <header>
        <Navbar />
      </header>

      <main className="px-5 md:px-10 lg:px-20 2xl:px-32">
        <ParallaxSection />

        <section id="product">
          <div className="py-10 lg:py-14 ">
            <div className="flex flex-col lg:gap-10 lg:flex-row xl:gap-20 2xl:gap-40">
              <ProductDisplay />

              <div className="flex flex-col lg:basis-3/5 ">
                <div className=" w-fit h-[7%] text-[#00B48E] border-b-[3px] border-[#4bbfa27e]">
                  <h1 className="moko-resposive ">MOKO โมโกะ</h1>
                </div>

                <div className="py-4">
                  <p className="text-base text-[#386C5F] md:text-lg xl:text-xl 2xl:text-3xl 2xl:leading-tight">
                    Skin Rejuvenation Gel Cream สกิน รีจูวิเนชั่น เจล ครีม{" "}
                    <br />
                    Moisture The Skin With Vitamin E, B5, Witch Hazel <br />
                    เจลครีมสำหรับดูแลและฟื้นฟูผิว
                  </p>
                  <div className="flex w-28 h-10 items-center justify-center rounded-full bg-[#04CF9B] mt-3 mb-10  sm:mt-5 sm:mb-10 md:w-36 2xl:w-56 2xl:h-20">
                    <p className="text-base text-white sm:text-xl 2xl:text-3xl">
                      ขนาด : 40 Ml
                    </p>
                  </div>
                  <p>
                    ผลิตภัณฑ์เจลครีมบํารุงผิวชนิดไม่ล้างออก ประกอบด้วยวิตามิน E,
                    B5 และ Shea Butter ช่วยบํารุงผิวให้เนียนนุ่มชุ่มชื้น
                    สารสกัดจาก กุหลาบช่วยกระชับรูขุมขน Witch Hazel
                    ช่วยกระตุ้นการสร้าง
                    อีลาสตินใต้ผิวหนังและสารสกัดจากสมุนไพรธรรมชาติเข้มข้น 7 ชนิด
                    นําเข้าจากประเทศเกาหลี ช่วยลดการแพ้และการระคายเคืองผิว
                    เนื้อเจลครมี บางเบาซึมง่าย ไม่เหนียวเหนอะหนะ
                    ช่วยฟื้นฟูผิวบํารุงผิว
                    ที่เสียหายให้กลับมาสมบูรณ์แข็งแรงอีกครั้ง
                    ผิวบอบบางแพ้ง่ายใช้ได้
                  </p>
                </div>
                <div className="text-xl text-[#00B48E] mb-4 xl:text-2xl xl:font-medium 2xl:text-5xl">
                  599 THB
                </div>
                <div className="flex gap-3">
                  <Link
                    href="https://shop.line.me/@999ctiun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shopee max-w-[100px] md:max-w-[125px] lg:max-w-[100px] xl:max-w-[125px]"
                  >
                    <Image
                      src="/image/shop/Shope.png"
                      alt=""
                      width={200}
                      height={50}
                    />
                  </Link>
                  <Link
                    href="https://shopee.co.th/mokothailand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shopee max-w-[100px] md:max-w-[125px] lg:max-w-[100px] xl:max-w-[125px]"
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
                    className="lazada max-w-[100px] md:max-w-[125px] lg:max-w-[100px] xl:max-w-[125px]"
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
            </div>
            <HowToUse />
          </div>
          {/* lg:bg-gradient-custom-lg */}
          <section className="margin-custom flex flex-col items-center bg-gradient-custom ">
            <h1 className="font-semibold text-[#761245] pb-14">ส่วนประกอบ</h1>
            <div className="flex flex-col items-center justify-center relative lg:flex-row ">
              <div className="w-full md:flex md:justify-center md:max-w-[400px] lg:basis-3/5 lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[600px] 2xl:basis-4/5">
                <Image
                  src="/image/component/Element product.png"
                  alt=""
                  width={600}
                  height={600}
                  className="pb-14"
                />
              </div>
              <div className="flex flex-col gap-4 lg:basis-3/5 lg:gap-4 2xl:basis-2/5">
                <ProductDetail
                  src={"/image/component/Frame 164.png"}
                  title={"vitamin B5 & E"}
                  className={
                    "lg:-translate-x-[15%] lg:-translate-y-[45%] xl:-translate-x-[10%]"
                  }
                >
                  Vitamin B5 ช่วยสมานแผลและเร่งการสร้างเนื้อเยื่อชั้นผิวใหม่
                  <br />
                  Vitamin E ต้านอนุมูลอิสระ
                  ช่วยป้องกันผิวจากความเสียหายที่เกิดจากแสงแดด
                </ProductDetail>

                <ProductDetail
                  src={"/image/component/vitamin.png"}
                  title={"Shea Butter"}
                  className={"lg:-translate-x-[0%] lg:-translate-y-[50%]"}
                >
                  ช่วยให้ผิวชุ่มชื่น พื้นบำรุงผิวให้เนียนนุ่ม
                </ProductDetail>

                <ProductDetail
                  src={"/image/component/rose.png"}
                  title={"Rose"}
                  className={"lg:translate-x-[10%] lg:-translate-y-[50%]"}
                >
                  ช่วยบำรุงเซลล์ผิวที่เสียให้กลับมาสมบูรณ์
                </ProductDetail>

                <ProductDetail
                  src={"/image/component/vitamin gold.png"}
                  title={"Witch Hazel"}
                  className={"lg:-translate-x-[0%] lg:-translate-y-[45%]"}
                >
                  ช่วยกระตุ้นการสร้าง Elastin และ Collagen ใต้ผิวหนัง
                </ProductDetail>

                <ProductDetail
                  src={"/image/component/vitamin-e-gold.png"}
                  title={"Natural Herb"}
                  className={"lg:-translate-x-[6%] lg:-translate-y-[35%]"}
                >
                  สารสกัดจากธรรมชาติ 7 ชนิด ช่วยลดการอักเสบ การแพ้
                  และการระคายเคียงผิว <br /> ได้แก่ ใบบัวบก , ไผ่น้ำญี่ปุ่น ,
                  สกูปแคป ,ชาเขียว ,รากชะเอม , ดอกคาโมมายล์ และ โรสแมรี่
                </ProductDetail>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center py-20">
            <h1 className="font-semibold text-[#629C85] pb-20">คุณประโยชน์</h1>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:flex-row xl:gap-16 2xl:gap-32">
              <ProductDescription
                src={"/image/How/desertification_8740216.png"}
              >
                ช่วยลดการแพ้
                <br />
                และการระคายเคืองผิว
              </ProductDescription>

              <ProductDescription src={"/image/How/aftersun_16344587.png"}>
                เนื้อเจลครีมบางเบาซึมง่าย
                <br />
                ไม่เหนียวเหนอะหนะ
              </ProductDescription>

              <ProductDescription src={"/image/How/recovery_11211153.png"}>
                ช่วยฟื้นฟูผิวบํารุงผิว
                <br />
                ที่เสียหายให้กลับมาสมบูรณ์
                <br />
                แข็งแรงอีกครั้ง
              </ProductDescription>

              <ProductDescription src={"/image/How/rain_16233941.png"}>
                ผิวบอบบางแพ้ง่ายใช้ได้
              </ProductDescription>
            </div>
          </section>

          <section className="flex flex-col items-center py-10" id="review">
            <h1 className=" font-semibold text-[#A488FF] pb-14">
              รีวิวจากผู้ใช้งาน
            </h1>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              <Image
                src="/image/Review/1.png"
                alt=""
                width={400}
                height={400}
              />
              <Image
                src="/image/Review/2.png"
                alt=""
                width={400}
                height={400}
              />
              <Image
                src="/image/Review/3.png"
                alt=""
                width={400}
                height={400}
              />
              <Image
                src="/image/Review/1.png"
                alt=""
                width={400}
                height={400}
              />
              <Image
                src="/image/Review/2.png"
                alt=""
                width={400}
                height={400}
              />
              <Image
                src="/image/Review/3.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div className="margin-custom-slide">
              <AutoSlide />
            </div>
          </section>

          <section
            className="margin-custom flex flex-col-reverse bg-[#EBFEF5] lg:flex-row lg:gap-10"
            id="contact"
          >
            <div className="basis-full">
              <div>
                <h1 className="text-3xl font-medium text-[#008E7A] py-10">
                  Contact Us
                </h1>
                <p>
                  288/113 RK Park Watcharapol Saimai(2) Soi Saimai 76-78 Kwang
                  Saimai Khet Saimai BKK 10220 Thailand.
                </p>
                <p className="pt-5">Allmassidea@gmail.com</p>
                <p>(+66) 8 4043 9489</p>
              </div>
              <form id="send_contact" className="pt-14 rounded-lg ">
                <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:gap-20">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Name"
                      className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      required
                      placeholder="Surname"
                      className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
                    />
                  </div>
                </div>
                <div className="form-group mb-6 md:my-5 2xl:my-20">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Message"
                    className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A] resize-none"
                    rows="3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  form="send_contact"
                  className="w-full bg-[#008E7A] text-white py-3 rounded-lg font-medium hover:bg-[#007a69] transition-colors xl:w-1/3 xl:h-14 2xl:w-1/3 2xl:h-20 2xl:text-3xl"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="flex items-center  w-full max-w-[500px] sm:max-w-[750px] md:max-w-[1000px] lg:max-w-[600px] xl:max-w-[1500px] 2xl:max-w-[1800px] ">
              <Image
                src="/image/Product/Rectangle2-3.png"
                alt="Product Image"
                width={2000}
                height={2000}
                className="rounded-2xl object-contain"
              />
            </div>
          </section>
        </section>

        <footer className="margin-custom flex flex-col gap-10 bg-[#629C85] py-14 lg:flex-row lg:items-center ">
          <div className="flex flex-1 lg:justify-center ">
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
              <Link href={"#review"}>REVIEWER</Link>
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
      </main>
    </ScrollProvider>
  );
}
