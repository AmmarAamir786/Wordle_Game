import React from 'react'

const Yourscore = () => {
  return (
    <div className="lg:w-[1140px] lg:h-[254px] w-[336px] h-[405px] lg:mt-[96px] mt-[67px] bg-white rounded-[20px] shadow border-t-[3px] border-soft-blue relative">

          <div className='lg:h-[63px] lg:w-[240px] w-[158px] h-[46px] bg-soft-blue absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex justify-center items-center rounded-[90px] py-[10px] '>
            <div className='lg:text-3xl text-lg font-bold text-center text-white'>Your Score</div>
          </div>

          <div className="flex flex-wrap justify-center items-center lg:h-[181px] lg:w-[1093px] lg:mx-6 mx-[5px] lg:mb-[25px] mb-[21px] lg:gap-[17px] lg:mt-[48px] mt-[34px]">
            <div className="w-[326px] lg:h-[82px] h-[70px] p-2.5 flex-col justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-neutral-600 lg:text-xl text-base font-bold">Username</div>
              <div className="text-center text-neutral-500 lg:text-lg text-sm font-normal">User not logged in</div>
            </div>
            <div className="w-[326px] lg:h-[82px] h-[70px] p-2.5 flex-col justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-neutral-600 lg:text-xl text-base font-bold">Game ID</div>
              <div className="text-center text-neutral-500 lg:text-lg text-sm font-normal">6576faaa7aceda167d40fd66</div>
            </div>
            <div className="w-[326px] lg:h-[82px] h-[70px] p-2.5 flex-col justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-neutral-600 lg:text-xl text-base font-bold">Player ID</div>
              <div className="text-center text-neutral-500 lg:text-lg text-sm font-normal">6576faa9e36902e5ec90852d</div>
            </div>
            <div className="w-[326px] lg:h-[82px] h-[70px] p-2.5 flex-col justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-neutral-600 lg:text-xl text-base font-bold">Guesses</div>
              <div className="text-center text-neutral-500 lg:text-lg text-sm font-normal">-</div>
            </div>
            <div className="w-[326px] lg:h-[82px] h-[70px] p-2.5 flex-col justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-neutral-600 lg:text-xl text-base font-bold">Timer</div>
              <div className="text-center text-neutral-500 lg:text-lg text-sm font-normal">00:27:06:152</div>
            </div>
          </div>
        </div>
  )
}

export default Yourscore