import React from "react";
import Image from "next/image";

function ProductDetail({ src, title, description, className }) {
  return (
    <div className={`flex items-center gap-4 ${className} `}>
      <div className="relative flex-shrink-0 w-full max-w-[56px] md:max-w-[70px] lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[100px]">
        <Image
          src={src}
          alt={title}
          width={100}
          height={100}
          className="rounded-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#761245] md:text-xl lg:text-lg 2xl:text-3xl">
          {title}
        </h3>
        <p className="text-sm text-[#761245] sm:text-sm md:text-base lg:text-sm 2xl:text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
