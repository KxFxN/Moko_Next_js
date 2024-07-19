"use client";

import React from "react";
import Image from "next/image";

function CardReview() {
  const imageReview = [
    {
      src: "/image/Review/review1.png",
      title: "ครีมบำรุงผิว (รอยสัก)🌿✨",
      description:
        "เป็นครีมเนื้อเจล มีส่วนผสมจากสมุนไพรเกาหลี เนื้อสัมผัสบางเบา ซึมง่าย ไม่หนักผิวเลย และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก ทำให้ผิวนุ่มชุ่มชื้น สีจากรอยสักชัดขึ้น ผิวแพ้ง่ายสามารถใช้ได้น้า เหมาะสำหรับคนที่สัก พกพาง่าย ใครที่กำลังหาครีมบำรุงรอยสักอยู่ต้องมาลองใช้กันน้า บำรุงรอยสักให้สีติดทนไปนานๆ💖",
      reviewer: "Purechompoo",
    },
    {
      src: "/image/Review/review2.png",
      title: "แดดแรงแค่ไหนก็เอาอยู่",
      description:
        "รีวิวครีมถนอมรอยสัก ไปเที่ยวทะเล ท้าแดดสุดๆ สายฝ. ต้องมี! 🤟😎 บอกเลยว่าสีสักยังปังเหมือนเดิม ✨ ใครมีครีมเด็ดๆ แนะนำกันได้น้าาา 🥰",
      reviewer: "Eye",
    },
    {
      src: "/image/Review/review3.png",
      title: "ทุกรอยสักมีเรื่องราว",
      description:
        "ทุกรอยสักมีเรื่องราว อยากรักษาไว้ให้นาน เพราะความทรงจำอยู่ตลอดไป 🦋 ครีมถนอมรอยสัก",
      reviewer: "Babythip",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-2">
      {imageReview.map((image, index) => (
        <div
          key={index}
          className="relative w-80 h-80 overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={image.src}
            alt={image.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
          <p className="absolute text-xl text-white inset-0 p-4 flex flex-col justify-end hover:hidden">
            {image.reviewer}
          </p>

          <div className="absolute inset-0 bg-white bg-opacity-70 p-4 flex flex-col justify-between opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-black">{image.title}</h2>
              <p className="text-base text-black">{image.description}</p>
            </div>
            <p className="text-xl text-purple-600">{image.reviewer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardReview;
