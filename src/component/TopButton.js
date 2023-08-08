import React from 'react'
import {FaLongArrowAltUp} from 'react-icons/fa'

function TopButton({onClick}) {
  return (
    <div>
       
        <button className='w-[40px] h-[40px] place-items-center rounded-full color-white justify-center 
    background bg-blue-600 justify-items-center cursor-pointer fixed right-14 bottom-5 flex stroke-white'
        onClick={onClick}><FaLongArrowAltUp /></button>

       
    </div>
  )
}

export default TopButton