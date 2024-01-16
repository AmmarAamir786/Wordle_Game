import React, { Children } from 'react'

const MobNav = ({children}: {children:any}) => {
  return (
    <div className='fixed bg-white/90 backdrop-blur-3xl bac left-0 right-0 top-0 pb-5 flex flex-col py-2 px-[30px] z-50'>{children}</div>
  )
}

export default MobNav