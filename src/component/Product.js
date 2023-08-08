import React, { forwardRef } from 'react'

const Product=forwardRef((props,ref)=> {
  return (
    <div ref={ref}
    className='w-[1200px] h-[436px] top-[1995px]  absolute '>
        <div className='w-[129px] h-[129px] top-[280px] left-[410px] absolute'>
        <img src='./figmaImages/Ellipse 86.png' alt='ellipse86'></img> 
        </div>

        <div className='w-[178px] h-[178px] top-[58px] left-[630px] radius-[0px, 0px, 100px, 0px] absolute'>
        <img src='./figmaImages/Rectangle 26.png' alt='rectangular6'></img> 
        </div>

        <div className='w-[486px] h-[98px] top-[100px] left-[670px]  absolute'>
            <div className='[Averta Demo PE Cutted D] font-bold  leading-[49.44px] text-[40px] text-[#000000]'>
            Great Digital Product Agency since 2016
             </div> 
        </div>

        <div className='w-[532px] h-[104px] [Averta Demo PE Cutted D] font-normal leading-[160%px] left-[670px] top-[250px] text-[16px] text-[#565656] absolute'>
            Our Business Plan is a written document describing a company's core business activites, 
            Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.
             </div> 

        <div className='w-[550px] h-[372px] radius-[32px] shrink-0 absolute'>
        <img src='./figmaImages/unsplash.png' alt='unsplash'></img> 
        <div className='w-[78px] h-[78px] shrink-0 top-[160px] left-[230px] absolute'>
        <img src='./figmaImages/play-rounded-button 1.png' alt='button'></img> 

        </div>
           
        </div>

        

        
      
    </div>
  )
})

export default Product
