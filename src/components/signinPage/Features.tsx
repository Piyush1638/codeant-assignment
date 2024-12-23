import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="rounded-3xl bg-white me-4 shadow-lg ">
      <div className="flex items-center gap-2 px-4 py-3 text-font font-bold text-lg border-b border-[#E6E8F0]">
        <Image src={"/logo.svg"} alt="logo" height={31} width={28} />
        AI to Detect & Autofix Bad Code
      </div>
      <div className="grid grid-cols-3 gap-3 py-6 px-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-font font-bold text-lg">30+</span>
          <span className="text-[#171717] text-sm">Language Support</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-font font-bold text-lg">10K+</span>
          <span className="text-[#171717] text-sm ">Developers</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-font font-bold text-lg">100K+</span>
          <span className="text-[#171717] text-sm ">Hours Saved</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
