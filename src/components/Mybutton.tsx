import React from 'react'
import { twMerge } from 'tailwind-merge'

function Mybutton({text, style, textStyle}: {text: string, style?: string, textStyle?: string}) {
  return (
    <main>
        <button className={twMerge(`w-[108px] lg:h-9 h-[30px] px-3.5 py-2.5 bg-cta-1 rounded-[90px] border-b-2 border-cta-3 justify-center items-center  inline-flex`, `${style}`)}>
            <div className={twMerge(`text-white lg:text-sm text-[13px] font-semibold`, `${textStyle}`)}>{text}</div>
        </button>
    </main>
  )
}

export default Mybutton