import React from 'react'
import Ad from "../assets/Capture.jpg"
const Offer1 = () => {
  return (
    <div className="bg-soft-red w-full hidden md:flex h-64 lg:flex flex-col justify-end"
    style={{backgroundImage:`url(${Ad})`}} >
        <div className='h-20 ml-48'>
            <p className='text-[#720E18] font-semibold lato mb-3'>Get 10% off your first order! Use code SWEET10 at checkout</p>
            <button>
                <a href="#" className='bg-[#720E18] text-white text-md py-1 px-2 rounded-r-lg font-xl lato'>Shop Now</a>
            </button>
        </div>

      
    </div>
  )
}

export default Offer1
