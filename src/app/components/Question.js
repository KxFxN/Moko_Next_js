"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center border-b-[1px] 2xl:pb-10 2xl:border-b-[3px] "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={`text-xl font-normal ${
            isOpen ? "text-[#00B48E]" : ""
          } 2xl:text-4xl`}
        >
          {title}
        </p>
        <IoIosArrowDown size={40} className={isOpen ? "rotate-180" : ""} />
      </div>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
};

export default function Question() {
  return (
    <div id="faq" className="flex flex-col w-full h-full gap-8 py-6 mx-auto cursor-pointer lg:max-w-[75%] 2xl:gap-20 2xl:mt-20">
      <h1 className="text-[#386C5F] text-center mb-6">คำถามที่พบบ่อย</h1>
      <ToggleSection title="MOKO คืออะไร">
        <p>
          ครีมถนอมรอยสัก ช่วยให้รอยสักสีสวยคมชัด
          ให้ความชุ่มชื้นและลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก
        </p>
      </ToggleSection>
      <ToggleSection title="วิธีการใช้งาน">
        <p>ทาลงบนรอยสักหลังทำการทำความสะอาดผิว สามารถทาได้บ่อยเท่าที่ต้องการ</p>
      </ToggleSection>
      <ToggleSection title="ควรใช้ MOKO ตอนไหน">
        <p>
          MOKO สามารถใช้ได้ตลอดเวลา
          แต่ช่วงเวลาที่เห็นผลดีที่สุดคือหลังอาบน้ำเสร็จ เพราะผิวสะอาดและอ่อนโยน
          ทำให้ครีมซึมเข้าสู่ผิวได้ดีขึ้น
        </p>
      </ToggleSection>
      <ToggleSection title="ต้องใช้ MOKO นานแค่ไหน">
        <p>
          สามารถใช้ MOKO ได้ตามต้องการ
          เนื่องจากมีสารสกัดที่ช่วยบำรุงผิวอย่างต่อเนื่อง
        </p>
      </ToggleSection>
      <ToggleSection title="MOKO แตกต่างจากผลิตภัณฑ์ดูแลรอยสักตัวอื่นอย่างไร">
        <p>
          MOKO มีวิตามิน B5 ช่วยสมานแผลได้เร็ว เน้นสารสกัดธรรมชาติเข้มข้น 7 ชนิด
          ช่วยบำรุงผิว ลดการอักเสบ
        </p>
      </ToggleSection>
      <ToggleSection title="MOKO ใช้ก่อนสักได้ไหม">
        <p>
          สามารถใช้ MOKO ก่อนสักได้ เพื่อเตรียมผิวให้ชุ่มชื้น
          ซึ่งจะช่วยให้รอยสักดูชัดเจนและติดทนนานขึ้น
        </p>
      </ToggleSection>
    </div>
  );
}
