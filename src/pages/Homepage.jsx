import React from 'react'
import Featured from "../components/Featured"
import Offer from "../components/Offer"
import Testimonials from '../components/Testimentials'
import Hero from '../components/Hero'
import Offer1 from '../components/Offer1'
// import Cta from './components/Cta'
import Footer from '../components/Footer'
import CustomOrderSteps from '../components/CustomOrder'
import BehindTheScenes from '../components/Bts'
const Homepage = () => {
  return (
    <div className='bg-[#F5E6D3] h-full w-full overflow-hidden'>
    
   <Hero/>
   <Featured />
   <Offer1 />
    
  
      <Testimonials />
      {/* <Cta/>s */}
      <CustomOrderSteps/>
      <BehindTheScenes/>
      </div> 
  )
}

export default Homepage
