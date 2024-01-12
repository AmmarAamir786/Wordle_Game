import React from 'react'
import Winner from "@/components/Winner"


const TotalWinners = () => {
  return (
    <div className='lg:w-[467px] w-[335px]'>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 4}]}></Winner>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 5}]}></Winner>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 6}]}></Winner>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 7}]}></Winner>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 8}]}></Winner>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 9}]}></Winner>
        <Winner winners={[{name:"Hannibal Lector", score:100, position: 10}]}></Winner>
    </div>
  )
}

export default TotalWinners