"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/image/slider/Rectangle 8.jpg",
  "/image/slider/Rectangle 9.jpg",
  "/image/slider/Rectangle 10.jpg",
  "/image/slider/Rectangle 11.jpg",
  "/image/slider/Rectangle 12.jpg",
];

const AutoSlide = () => {
  const duplicatedSlides = [...slides, ...slides];
  useEffect(() => {
    console.log(duplicatedSlides[0]);
  }, [duplicatedSlides]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-3"
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
            <div className="flex flex-col items-center justify-center text-6xl w-full rounded-xl md:rounded-2xl 2xl:rounded-3xl overflow-hidden">
              <Image src={slide} alt="" width={500} height={500} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoSlide;
