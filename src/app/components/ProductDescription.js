import React from "react";
import Image from "next/image";

function ProductDescription({ children, src }) {
  return (
    <div className="Benefits">
      <div className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[100px] xl:max-w-[125px] 2xl:max-w-[150px]">
        <Image src={src} alt="" width={150} height={150} />
      </div>
      <p className="text-[#629C85] text-2xl md:text-3xl lg:text-lg xl:text-xl 2xl:text-4xl">
        {children}
      </p>
    </div>
  );
}

export default ProductDescription;
