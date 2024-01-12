import React from 'react'
import Image from "next/image";
import chart from "@/assets/chart.svg"
import donut from "@/assets/donut 1.svg"
import setting from "@/assets/setting-2.svg"
import Mybutton from "@/components/Mybutton";


const Myheader = () => {
  return (
    <header className="lg:h-[70px] h-[50px] bg-white shadow border-b border-black border-opacity-10 flex justify-center items-center relative z-20">
        <nav className="flex justify-between items-center px-[30px] w-full mx-auto">
          <div>
            <Image src={donut} alt="donut" className='lg:w-[42px] lg:h-[42px] h-[34px] w-[34px]'></Image>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Image src={setting} alt="setting" className='lg:w-[36px] lg:h-[36px] h-[26px] w-[26px]'></Image>
            <Image src={chart} alt="chart" className='lg:w-[36px] lg:h-[36px] h-[26px] w-[26px]'></Image>
            <Mybutton text="New Game"></Mybutton>
            <Mybutton text="Login" style="w-[68px]"></Mybutton>
          </div>
        </nav>
       </header>
  )
}

export default Myheader