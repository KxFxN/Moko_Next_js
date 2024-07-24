"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

function ProductDisplay() {
  const [selectedImage, setSelectedImage] = useState(
    "/image/Product/Rectangle2.jpg"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const productImages = [
    "/image/Product/Rectangle2.jpg",
    "/image/Product/Rectangle2-1.jpg",
    "/image/Product/Rectangle2-2.jpg",
    "/image/Product/Rectangle2-3.jpg",
  ];

  const handleImageClick = useCallback((src, index) => {
    setSelectedImage(src);
    setActiveIndex(index);
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (activeIndex + 1) % productImages.length;
    handleImageClick(productImages[nextIndex], nextIndex);
  }, [activeIndex, handleImageClick, productImages]);

  useEffect(() => {
    const interval = setInterval(nextImage, 8000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="product-image pb-14 lg:basis-2/5 lg:pb-0 2xl:basis-1/5">
      <div className="flex justify-center  overflow-hidden rounded-3xl max-w-[1000px] h-[24rem] md:h-[45rem] lg:h-[21rem] xl:h-[30rem] 2xl:max-w-[43.75rem] 2xl:h-[43.75rem]">
        <Image
          src={selectedImage}
          alt="Product image"
          className="object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex justify-between gap-2 py-3 sm:py-6 sm:gap-5 lg:py-2 lg:gap-3 xl:py-4">
        {productImages.map((src, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-xl h-[5.5rem] md:h-[10rem] lg:h-[4.5rem] xl:w-28 xl:h-28 2xl:w-[10rem] 2xl:h-[10rem] overflow-hidden ${
              index === activeIndex ? "scale-110" : "scale-100"
            }  max-w-[200px]`}
          >
            <Image
              src={src}
              alt="Product list"
              width={200}
              height={200}
              className={`cursor-pointer`}
              onClick={() => handleImageClick(src, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
