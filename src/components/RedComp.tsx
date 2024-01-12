import React from 'react'

const RedComp = ({text, style}: {text?:string, style?:string}) => {
  return (
    <div className={`lg:w-[58.4px] lg:h-[58.4px] w-[23.98px] px-[7.26px] py-[3.16px] bg-WarmCoral-4 rounded lg:rounded-lg shadow border-l border-r border-t border-b-2 border-WarmCoral-1 flex-col justify-center items-center inline-flex text-center text-text-4 lg:text-3xl text-xs font-semibold ${style}`}>{text}</div>
  )
}

export default RedComp