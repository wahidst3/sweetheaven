// import React from 'react'

// const Nav = () => {
//   return (
//     <div className="px-20  flex items-center justify-between w-full">
//     <div className="logo w-[15%] mt-4 text-[#3A2D1F] flex flex-col items-center"><h1 className='text-2xl font-extrabold' style={{fontFamily:'Playfair Display'}}>Sweet Heaven</h1> <p className='text-lg' style={{fontFamily:"Great Vibes"}}>Bakery</p></div>
// <div className="nav_links w-[30%] flex items-center justify-between text-[#3A2D1F]">
// <a href="#" className='lato text-lg font-medium'>Home</a>
// <a href="#" className='lato text-lg font-medium'>About</a>
// <a href="#" className='lato text-lg' font-medium>Menu</a>
// <a href="#" className='lato text-lg font-medium'>Custom Orders</a>

// </div>
// <button className='bg-[#3A2D1F] text-white font-semibold px-4 py-1 rounded-2xl text-md'> <a href="# " className='lato text-md'>Contact Us</a></button>
//   </div>
//   )
// }

// export default Nav
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons for menu

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 md:px-20 py-1 flex items-center justify-between w-full  shadow-md md:shadow-none lg:shadow-none">
      {/* Logo */}
      <div className="logo text-[#3A2D1F] flex flex-col items-center">
        <h1 className="text-2xl font-extrabold play">Sweet Heaven</h1>
        <p className="text-lg greet">Bakery</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 text-[#3A2D1F]">
        <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">Home</a>
        <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">About</a>
        <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">Menu</a>
        <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">Custom Orders</a>
      </div>

      {/* Contact Button (Desktop) */}
      <div className="hidden lg:block">
        <a href="#" className="bg-[#3A2D1F] text-white font-semibold px-6 py-2 rounded-2xl text-md hover:bg-[#E34234] transition">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#3A2D1F] text-2xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#F5E6D3] shadow-lg flex flex-col items-center space-y-4 py-6 z-30">
          <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">Home</a>
          <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">About</a>
          <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">Menu</a>
          <a href="#" className="lato text-lg font-medium hover:text-[#E34234] transition">Custom Orders</a>
          <a href="#" className="bg-[#3A2D1F] text-white font-semibold px-6 py-2 rounded-2xl text-md hover:bg-[#E34234] transition">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
