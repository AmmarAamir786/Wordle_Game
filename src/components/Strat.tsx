import React from 'react'
import WhiteComp from './WhiteComp'

const Strat = () => {
  return (
    <main className='lg:w-[420px] w-[252px] flex flex-col justify-center lg:gap-[19px] gap-[11px]'>

        <div className='flex justify-between items-center lg:gap-[19px] gap-[11px]'>
            <WhiteComp text='C' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='H' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='A' style='w-[42px] h-[42px] bg-cta-1' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='I' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='N' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
        </div>

        <div className='flex justify-between items-center lg:gap-[19px] gap-[11px]'>
            <WhiteComp text='B' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='R' style='w-[42px] h-[42px] bg-MutedYellow-4' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='E' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='A' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='K' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
        </div>

        <div className='flex justify-between items-center lg:gap-[19px] gap-[11px]'>
            <WhiteComp text='D' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='A' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='I' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
            <WhiteComp text='L' style='w-[42px] h-[42px] bg-stone-300' textstyle='w-[27.5] h-[29.5] text-white'></WhiteComp>
            <WhiteComp text='Y' style='w-[42px] h-[42px]' textstyle='w-[27.5] h-[29.5]'></WhiteComp>
        </div>
        
    </main>
  )
}

export default Strat