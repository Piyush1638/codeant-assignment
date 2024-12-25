import Image from "next/image";
import React from "react";

const Data = () => {
  return (
    <div className="flex-container px-6 py-3 w-1/2  rounded-3xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)]
 absolute -bottom-32 right-0">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="bg-[#9D90FA40] rounded-full p-3">
            <Image
              src="/signin/pie-chart.svg"
              alt="pie-chart"
              height={28}
              width={28}
            />
          </div>
          <div className="flex-container flex-col">
            <span className="text-[#0049C6] text-sm flex-container">
              <Image
                src={"/signin/arrow.svg"}
                alt="Up"
                height={24}
                width={24}
              />
              <span>14%</span>
            </span>
            <span className="text-xs text-[#171717]">This week</span>
          </div>
        </div>
        <div className="flex-col flex gap-1">
          <span className="text-[#171717] text-sm font-bold">Issues Fixed</span>
          <span className="text-[#081735] font-bold text-3xl">500K+</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
