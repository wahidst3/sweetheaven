import React from 'react'
import { useRef, useState } from 'react'

import '../App.css'
// import Nav from './components/Nav'
import Cofee from "../assets/cofee.png"
import Bean from "../assets/bean.png"
import Cake from "../assets/Cake.png"
import Strwaberry from "../assets/strw.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Hero = () => {
    const strawRef = useRef(null);
    const cakeRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const coffeeRef = useRef(null);
    const bean1Ref = useRef(null);
    const bean2Ref = useRef(null);
  
    useGSAP(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
    
      // Strawberry animation
      tl.from(strawRef.current, { 
        x: -100,
        opacity: 0,
        duration: 1.5
      });
    
      // Cake animation
      tl.from(cakeRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8
      }, "-=0.5");
    
      // Text elements animation (excluding button)
      tl.from(textRef.current.querySelectorAll("h1, p"), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
      });
    
      // Button animation
      tl.from(buttonRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8
      });
    
      // Coffee image animation
      tl.from(coffeeRef.current, {
        x: 100,
        opacity: 0,
        rotation: -15,
        scale: 0.9
      }, "-=0.3");
    
      // Bean animations
      tl.from([bean1Ref.current, bean2Ref.current], {
        rotation: 180,
        opacity: 0,
        stagger: 0.3,
        scale: 1.2
      }, "-=0.5");
    }, []);
  return (
      <div className='w-full flex flex-col lg:flex-row md:flex-row items-center relative'>
            <div className="sec1 hidden md:w-[22%] w-full lg:w-[22%] md:h-[90vh] lg:h-[90vh] md:flex lg:flex flex-col items-end justify-end">
              <img ref={strawRef} src={Strwaberry} alt="strawberry" className='opacity-0  lg:opacity-50 md:opacity-50 w-[520px] absolute lg:top-0 md:top-0 lg:-left-10 md:-left-10' />
              <img ref={cakeRef} src={Cake} alt="cake" className='md:opacity-90 lg:opacity-90 opacity-20 w-[520px] h-[540px] absolute md:bottom-0 lg:bottom-0 -bottom-40 md:-left-20 lg:-left-20 left-0 ' />
            </div>
    
            <div className="w-full sec2 z-10 lg:w-[40%] md:w-[40%] md:h-[90vh] lg:h-[90vh] flex items-center justify-start lg:pt-32 md:pt-32 flex-col overflow-hidden mt-20 md:mt-0 lg:mt-0">
              <div ref={textRef} className='w-full play text-[#3A2D1F]'>
                <h1 className='play font-extrabold text-5xl md:mb-2 mb-5 lg:mb-2 md:text-[4rem] lg:text-[4rem] md:ml-0 lg:ml-0 ml-10'>Where Every Bite</h1>
                <h1 className='play font-extrabold text-[2rem] md:ml-40 lg:ml-40 -mt-5 ml-10'>Makes You</h1>
                <h1 className='play font-extrabold text-[4rem] md:ml-52 lg:ml-52 -mt-6 ml-10'>Happy</h1>
                <p className='lato lg:ml-36 md:ml-36 mr-8 text-md text-[#E34234] ml-10'>At <b>Sweet Haven Bakery</b>, we craft <i>artisanal bread</i>, <i>pastries</i>, and <i>cakes</i> that bring joy to your table. Made fresh daily with love and the finest ingredients.</p>
                <button ref={buttonRef} className='md:mt-16 lg:mt-16 mt-4 ml-10 bg-[#E34234] px-4 lg:ml-36 md:ml-36 text-white font-semibold lato py-1 rounded-r-xl cursor-pointer'>
                  Explore Our Menu
                </button>
              </div>
            </div>
    
            <div className="sec3 w-full md:w-[40%] lg:w-[40%] md:h-[90vh] lg:h-[90vh] h-full flex flex-col items-center justify-center relative">
              
              <img ref={bean1Ref} src={Bean} className="opacity-10 w-[70%] absolute -top-8 -left-16" alt="bean" />
              <img ref={coffeeRef} src={Cofee} className="w-[95%] z-10" alt="coffee" />
              <img ref={bean2Ref} src={Bean} className="opacity-10 md:w-[60%] lg:w-[60%] w-[70%] absolute -bottom-16 right-6" alt="bean" />
            </div>
          </div>
  )
}

export default Hero
