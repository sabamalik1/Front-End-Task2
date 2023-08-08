import React, { useEffect , useRef } from 'react'
import HeroHeadline from './HeroHeadline';
import Navbar from './Navbar';
import Client from './Client';
import Business from './Business';
import Product from './Product';
import Goodclient from './Goodclient';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import TopButton from './TopButton';

const Figma = () => {
  const scrolling = useRef("")
  const scrollingBtn = useRef("")

  const footerScroll = (scroll)=>{
    
    scroll.scrollIntoView({behaviour :'smooth'})

  }
  const handleOnTop=()=>{
    scrollingBtn.current.scrollIntoView();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    // const btn = scrollingBtn.current
    // console.log(btn)
    // btn.scrollIntoView();
  }
  useEffect(()=>{
    handleOnTop();
  })
  useEffect(()=>{
    if(scrolling.current){
      // const rect = scrolling.current.getBoundingClientRect();
      console.log(scrolling);
      footerScroll(scrolling.current)

    }
  },[])

  // const footerScroll= (scroll)=>{
  //   scroll.current.scrollIntoView()

  // } 
  // useEffect(()=>{
  //   footerScroll({behaviour :"smooth"})

  // })

  // useEffect((scroll)=>{
  //   scroll.current.scrollInToView({behaviour :"smooth"})
  // },[])


  return (
    <>
     
     <div className='w-[1440px] h-[4102px] background mx-auto'>

      <HeroHeadline/>
      <Client/>
      <Navbar/>
      <Business/>
      <Product ref={scrollingBtn}/>
      <Goodclient/>
      <NewsLetter/>
      <Footer ref={scrolling}/>
      <TopButton onClick={handleOnTop}/> 
      </div>

    </>

  )
}

export default Figma;
