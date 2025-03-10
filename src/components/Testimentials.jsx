import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const WhimsicalTestimonials = () => {
  const [showMore,setShowMore] = useState(false)
  const testimonialRefs = useRef([]);
  const containerRef = useRef();

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "The Miller Family",
      role: "Weekly Bread Lovers",
      text: "Our wedding cake was nothing short of magical! From the moment we laid eyes on it, we were captivated by its elegant design and intricate details. But the true magic happened when we took our first bite—it was an explosion of flavors, perfectly balanced and absolutely divine. Each layer was moist, rich, and filled with love, making our special day even more unforgettable. ",
      flavor: "Traditional Sourdough",
      image: "https://images.pexels.com/photos/5630679/pexels-photo-5630679.jpeg",
      decoration: "🍞"
    },
    {
      id: 2,
      name: "Sarah & James",
      role: "Wedding Cake Enthusiasts",
      text: "Our wedding cake was a dream come true! Every bite was pure magic.",
      flavor: "Vanilla Almond Bliss",
      image: "https://images.pexels.com/photos/2956954/pexels-photo-2956954.jpeg",
      decoration: "🎂"
    },
    {
      id: 3,
      name: "Emma Carter",
      role: "Chocolate Addict",
      text: "The double chocolate fudge cake is out of this world!",
      flavor: "Double Chocolate Fudge",
      image: "https://images.pexels.com/photos/5630679/pexels-photo-5630679.jpeg",
      decoration: "🍫"
    },
    {
      id: 4,
      name: "Oliver & Mia",
      role: "French Pastry Fans",
      text: "The croissants are buttery perfection! We can’t get enough.",
      flavor: "Classic French Croissants",
      image: "https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg",
      decoration: "🥐"
    }
  ];
  

  useEffect(() => {
    // Card entrance animation
    gsap.from(testimonialRefs.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="md:py-20 lg:py-20 py-8  relative overflow-hidden bg-[#FAE8C8]"
    >
      <div className="container w-full h-full rounded-xl   mx-auto px-4 relative z-10">
       

     <div className="container2 w-full h-full flex-col md:flex-row lg:flex-row  flex md:items-center lg:items-center gap-1 p-4">
     <h2 className="text-4xl md:px-0 lg:px-0 px-2 w-96 relative play md:text-5xl lg:text-5xl font-playfair font-bold text-[#A35D3D]  md:mb-16 lg:mb-16 mb-8">
          Sweet Words from Our Family
          <span className='absolute -bottom-7 left-[30px] border-[#A35D3D]/60 border-4 rounded-2xl w-[40%]'></span>
        </h2>

<div className='flex flex-wrap gap-9 p-3 w-full'>
  <img src={testimonials[0].image} className='w-96 h-80 rounded-3xl' alt="" />
  <div className='w-96'>
    <h3 className="text-2xl font-bold text-[#6B4F4F]">{testimonials[0].name}</h3>
    <p className="text-[#E34234] font-semibold">{testimonials[0].role}</p>
    <p className='text-[#6B4F4F]'>{testimonials[0].text}</p>
    <p className='text-[#5f4e3b] mt-2 text-sm font-semibold lato'>Flavor: {testimonials[0].flavor}</p>
    <button className='bg-[#A35D3D] p-2 mt-2 px-4 cursor-pointer rounded-xl text-white text-right' onClick={()=>{setShowMore(!showMore)}}>{showMore ? "Show Less":"Show More"}</button>
  </div>

</div>

     </div>
     <div className={`${showMore?"flex":"hidden"}  flex-wrap w-full justify-center  gap-6 p-6`}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-col items-center text-center w-64">
        <div className="group relative overflow-hidden rounded-2xl shadow-lg w-56 h-56">
            {/* Overlay Text (Hidden by Default, Shown on Hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 text-white text-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10">
              {testimonial.text.slice(0, 100)}.
            </div>
            {/* Image with Hover Zoom Effect */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-[#3A2D1F] opacity-70">{testimonial.role}</p>
        </div>
      ))}
    </div>

     
      </div>
    </section>
  );
};

export default WhimsicalTestimonials;
