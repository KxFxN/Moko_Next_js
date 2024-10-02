import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header>
        <Navbar />
      </header>

      <div className="min-h-[100vh] flex items-center px-5 md:px-10 lg:px-20 2xl:px-32">
        <div className="mt-28">
          <h1 className="text-4xl font-bold text-[#57CE7F] mb-6 text-center lg:text-start">
            ABOUT US
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-16 md:ml-16 lg:ml-20">
              <div>
                <p className="ml-10">
                  Moko Thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ
                </p>
                <p className="text-gray-700 ">
                  และคืนความอ่อนเยาว์ ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว
                  และยังช่วยลด การระคายเคืองผิว ที่เกิดจากกระบวนการสัก
                  การสักหลายสไตล์ สักน่ารัก ๆ รอยสักที่เป็นความทรงจํา ครอบครัว
                  ความรัก และเรากลุ่มลูกค้า ชาย หญิง รวมถึง LGBTQ
                  เราสนับสนุนการสมรสเท่าเทียม
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/image/about/image115.png"
                  alt="MOKO Product on Tattoo"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-16">
              <div className="relative">
                <Image
                  src="/image/about/PAON6196 1.png"
                  alt="MOKO Products"
                  width={500}
                  height={400}
                  className="rounded-lg m-auto"
                />
              </div>
              <div className="relative bg-white p-8 my-12">
                <Image
                  src="/image/about/v1.png"
                  alt="Decorative leaves top right"
                  width={200}
                  height={200}
                  className="absolute w-24 h-24 bottom-32 -right-4  md:w-28 md:h-28 md:bottom-16 md:-right-10 "
                />
                <Image
                  src="/image/about/v.png"
                  alt="Decorative leaves bottom left"
                  width={200}
                  height={200}
                  className="absolute w-24 h-24 top-28 -left-6   md:w-28 md:h-28 md:top-16 md:-left-14 "
                />
                <blockquote className="text-[#57CE7F] text-xl md:text-2xl font-medium text-center max-w-2xl mx-auto relative z-10">
                  <p className="text-2xl">
                    &ldquo; ทุกรอยสัก มีเรื่องราว รักษาไว้ให้นานเพราะ
                  </p>
                  <p className="text-2xl">
                    ความทรงจำไม่เคยลืมเลือนครีมบำรุงรอยสัก &rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-5 md:px-10 lg:px-20 2xl:px-32">
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
      </div>
    </div>
  );
}
