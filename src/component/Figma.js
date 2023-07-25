import React from 'react'
import HeroHeadline from './HeroHeadline';
import Navbar from './Navbar';
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

      <HeroHeadline/>
      <Client/>
      <Navbar/>
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
