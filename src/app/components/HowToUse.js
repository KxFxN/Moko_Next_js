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
        <p className={`text-xl font-bold ${isOpen ? "text-[#00B48E]" : ""} 2xl:text-4xl`}>
          {title}
        </p>
        <IoIosArrowDown size={40} className={isOpen ? "rotate-180" : ""} />
      </div>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
};

export default function HowToUse() {
  return (
    <div className="flex flex-col gap-5 py-6 mx-auto cursor-pointer lg:max-w-[75%] 2xl:gap-20 2xl:mt-20">
      <ToggleSection title="วิธีการใช้งาน">
        <p>ใช้บํารุงผิวหลังทําความสะอาด ทำได้บ่อยเท่าที่ต้องการ</p>
      </ToggleSection>
      <ToggleSection title="คำเตือน">
        <p>
          ห้ามใช้ในเด็กต่ำกว่า 3 ปี ใช้ภายนอกเท่าน้ัน
          หากใช้แล้วมีอาการผิดปกติใดๆ ให้หยุดใช้ทันทีแล้วปรึกษาแพทย์
          ควรเก็บไว้ในที่แห้งและเย็น
        </p>
      </ToggleSection>
    </div>
  );
}
