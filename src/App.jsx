import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Cofee from "./assets/cofee.png"
import Bean from "./assets/bean.png"
import Cake from "./assets/Cake.png"
import Strwaberry from "./assets/strw.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Featured from "./components/Featured"
import Offer from "./components/Offer"
import Testimonials from './components/Testimentials'
import Hero from './components/Hero'
import Offer1 from './components/Offer1'
// import Cta from './components/Cta'
import Footer from './components/Footer'
import CustomOrderSteps from './components/CustomOrder'
import BehindTheScenes from './components/Bts'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'

function App() {

 

  return (
    <div className='bg-[#F5E6D3] h-full w-full overflow-hidden'>
      <Nav />
  
   <Homepage/>
   {/* <AboutUs/> */}
   <Footer/>
    </div>
  
    
   
   
   
  )
}

export default App