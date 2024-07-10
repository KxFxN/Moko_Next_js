import React from "react";
import Image from "next/image";

function ProductDescription({ children, src }) {
  return (
    <div className="Benefits">
      <div className="w-full max-w-[90px] sm:max-w-[110px] md:max-w-[110px] lg:max-w-[90px] xl:max-w-[120px] 2xl:max-w-[150px]">
        <Image src={src} alt="" width={150} height={150} />
      </div>
      <p className="text-[#629C85] text-xl lg:text-base xl:text-xl 2xl:text-3xl">
        {children}
      </p>
    </div>
  );
}

export default ProductDescription;
