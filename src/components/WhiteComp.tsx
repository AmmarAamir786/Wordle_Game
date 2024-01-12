import React from "react";
import { twMerge } from "tailwind-merge";

const WhiteComp = ({text, style, textstyle}: {text?:string, style?:string, textstyle?:string}) => {
  return (
    <div className={twMerge(`lg:h-[70px] lg:w-[70px] w-[39px] h-[39px] bg-white lg:rounded-2xl rounded-xl shadow border-l border-r border-t border-b border-black border-opacity-10 flex justify-center items-center`,`${style}`)}>
      <span className={twMerge(`lg:w-[46px] lg:h-[49px] w-6 h-6 flex items-center justify-center text-center text-black text-xl lg:text-4xl font-semibold`,`${textstyle}`)}>{text}</span>
    </div>
  );
};

export default WhiteComp;
