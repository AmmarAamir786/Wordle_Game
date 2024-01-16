import React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

function Mybutton({text, style, textStyle, link}: {text: string, style?: string, textStyle?: string, link?:string}) {
  return (
    <main>
      <Link href={`${link}`}>
        <button className={twMerge(`w-[108px] lg:h-9 h-[30px] px-3.5 py-2.5 bg-cta-1 hover:bg-cta-3/80 transform transition-all rounded-[90px] border-b-2 border-cta-3 justify-center items-center  inline-flex`, `${style}`)}>
            <div className={twMerge(`text-white lg:text-sm text-[13px] font-semibold`, `${textStyle}`)}>{text}</div>
        </button>
      </Link>
    </main>
  )
}

export default Mybutton