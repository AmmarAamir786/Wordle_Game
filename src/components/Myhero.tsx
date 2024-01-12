import React from 'react'
import sent from "@/assets/send.svg"
import Image from 'next/image'
import WhiteComp from './WhiteComp'
import RedComp from './RedComp'

const Myhero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[25px] z-10">

          <div className="lg:w-[419px] w-[234px] px-[11px] grid grid-cols-5 gap-[6.14px] lg:gap-[11px]">
            <WhiteComp text='A'></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>
            <WhiteComp></WhiteComp>           
          </div>

          <div className="flex flex-col lg:gap-[7.39px] gap-[3px]">
            <div className="flex justify-center items-center gap-[3.47px] lg:gap-[8.47px]">
              <RedComp text='Q'></RedComp>
              <RedComp text='W'></RedComp>
              <RedComp text='E'></RedComp>
              <RedComp text='R'></RedComp>
              <RedComp text='T'></RedComp>
              <RedComp text='Y'></RedComp>
              <RedComp text='U'></RedComp>
              <RedComp text='I'></RedComp>
              <RedComp text='O'></RedComp>
              <RedComp text='P'></RedComp>
            </div>
            <div className="flex justify-center items-center gap-[3.47px] lg:gap-[8.47px]">
              <RedComp text='A'></RedComp>
              <RedComp text='S'></RedComp>
              <RedComp text='D'></RedComp>
              <RedComp text='F'></RedComp>
              <RedComp text='G'></RedComp>
              <RedComp text='H'></RedComp>
              <RedComp text='J'></RedComp>
              <RedComp text='K'></RedComp>
              <RedComp text='L'></RedComp>
            </div>
            <div className="flex justify-center items-center gap-[3.47px] lg:gap-[8.47px]">
              <div className="lg:h-[58.4px] w-[45.5px] lg:w-[110.5px] px-[7.26px] py-[3.16px] bg-WarmCoral-4 rounded lg:rounded-lg shadow border-l border-r border-t border-b-2 border-WarmCoral-1 justify-center items-center inline-flex text-center text-text-4 text-xs lg:text-3xl font-semibold">Enter</div>
              <RedComp text='Z'></RedComp>
              <RedComp text='X'></RedComp>
              <RedComp text='C'></RedComp>
              <RedComp text='V'></RedComp>
              <RedComp text='B'></RedComp>
              <RedComp text='N'></RedComp>
              <RedComp text='M'></RedComp>
              <div className="lg:h-[58.4px] px-[7.26px] py-[3.16px] bg-WarmCoral-4 rounded lg:rounded-lg shadow border-l border-r border-t border-b-2 border-WarmCoral-1 justify-center items-center inline-flex text-center text-text-4 text-xs lg:text-3xl font-semibold gap-[3.16px] lg:gap-[7.2px]">
                <Image src={sent} alt='sent' className='lg:h-[24px] lg:w-[24px] h-[10px] w-[10px]'></Image>
                Delete</div>
            </div>
          </div>
          
        </div>
  )
}

export default Myhero