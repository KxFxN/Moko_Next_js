"use client";
import React, { useState } from "react";
import Image from "next/image";

function ProductDisplay() {
  const [selectedImage, setSelectedImage] = useState(
    "/image/Product/Rectangle2.png"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const productImages = [
    "/image/Product/Rectangle2.png",
    "/image/Product/Rectangle2-1.png",
    "/image/Product/Rectangle2-2.png",
    "/image/Product/Rectangle2-3.png",
  ];

  const handleImageClick = (src, index) => {
    setSelectedImage(src);
    setActiveIndex(index);
  };

  return (
    <div className="product-image pb-14 lg:basis-2/5 lg:pb-0">
      <div className="flex justify-center max-w-[1000px]">
        <Image
          src={selectedImage}
          alt="Product image"
          className="object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex justify-between gap-2 py-2 sm:py-6 sm:gap-5 lg:gap-3">
        {productImages.map((src, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
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
