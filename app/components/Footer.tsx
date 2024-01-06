import React from "react";
import Inputs from "./Inputs";
import Buttons from "./Buttons";

const Footer = () => {
  return (
    <div className="w-[577px] text-left">
      <div className="flex text-[26px] uppercase font-bold text-[#BDBCBC] mt-[90px] ">
        <h1 className="hover:text-[28px] hover:text-white hover:cursor-pointer text-white">
          description
        </h1>
        <h1 className="mx-[43px] hover:text-[28px] hover:text-white hover:cursor-pointer  hover:underline underline-offset-[9.5px] decoration-4  decoration-[#EDC42C]">
          details
        </h1>
        <h1 className="hover:text-[28px] hover:text-white hover:cursor-pointer hover:underline underline-offset-[9.5px] decoration-4 decoration-[#EDC42C]">
          comments
        </h1>
      </div>
      <div className="w-[577px] h-[2px] bg-[white] flex items-center">
        <div className="w-[171px] h-[4px] bg-[#EDC42C]"></div>
      </div>
      <p className="text-[26px] max-w-[577px] font-medium font-notosans tracking-[-0.78px] text-[#BDBCBC] mt-[23px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
        quam ac nulla blandit vehicula at vitae ipsum...{" "}
        <span className="text-[#EDC42C] hover:cursor-pointer">read more</span>
      </p>
      <Inputs />
      <Buttons />
    </div>
  );
};

export default Footer;
