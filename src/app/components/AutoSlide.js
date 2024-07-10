"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/image/slider/Rectangle 8.png",
  "/image/slider/Rectangle 9.png",
  "/image/slider/Rectangle 10.png",
  "/image/slider/Rectangle 11.png",
  "/image/slider/Rectangle 12.png",
];

const AutoSlide = () => {
  const duplicatedSlides = [...slides, ...slides];
  useEffect(() => {
    console.log(duplicatedSlides[0]);
  }, [duplicatedSlides]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center text-6xl w-full pr-3 ">
              <Image src={slide} alt="" width={450} height={450} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoSlide;
