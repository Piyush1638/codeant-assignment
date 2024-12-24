import Image from "next/image";
import React from "react";

const LogoName = ({classes}:{classes: string}) => {
  return (
    <div className={`font-satoshi gap-2 text-font ${classes}`}>
      <Image src={"logo.svg"} alt="logo" height={40} width={35.62} />
      CodeAnt AI
    </div>
  );
};

export default LogoName;
