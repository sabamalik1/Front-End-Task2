import React from 'react'
import HeroHeadline from './HeroHeadline';
import Client from './Client';
import Business from './Business';
import Product from './Product';
import Goodclient from './Goodclient';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Figma = () => {
  return (
    <>
     
     <div className='w-[1440px] h-[4102px] background bg-[#FEFEFE]'>

<div className='w-[1200px] outline-1 border-black h-[34px] shrink-0 top-[10px] left-[120px] flex absolute'>

<div className='top-[20px] left-[120px] absolute'>
<span className='[Proxima Nova] font-bold size-[27.5px] leading-[33.07px] text-[#000000]'> A+</span>
<span className='[Averta Demo PE Cutted] font-normal text-[27.15] leading-[normal] text-[#7a7a7a] '>Studio</span>
</div>

<div className='w-[645px] h-5 top-[20px] left-[675px] border-[0.2] border-black absolute '>
<button className='[Averta Demo PE Cutted D] font-normal text-[16px] leading-[normal] tracking-[0.16px]'>Home</button>
<button className='[Averta Demo PE Cutted D] font-normal text-[16px] leading-[normal] ml-[60px] tracking-[0.16px]  '>What we do</button>
<button className='[Averta Demo PE Cutted D] font-normal text-[16px] leading-[normal] ml-[60px] tracking-[0.16px]   '>Service</button>
<button className='[Averta Demo PE Cutted D] font-normal text-[16px] leading-[normal] ml-[60px] tracking-[0.16px]  '>Project</button>
<button className='[Averta Demo PE Cutted D] font-normal text-[16px] leading-[19.78px] ml-[60px] tracking-[0.16px]  '>Contact</button>

</div>

</div>
      <HeroHeadline/>
      <Client/>
      <Business/>
      <Product/>
      <Goodclient/>
      <NewsLetter/>
      <Footer/>
        
      </div>

    </>

  )
}

export default Figma;
