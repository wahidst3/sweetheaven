import React from 'react'

const Story = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Image Section */}
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Emily Carter baking"
        className="rounded-2xl shadow-lg"
      />
      <div className="absolute -bottom-6 -right-6 bg-[#E34234] p-4 shadow-md border-4 border-[#F5E6D3] rounded-full text-center w-32 h-32 ">
        <p className="text-xs text-white lato pt-2 font-semibold">
          <span className="block text-3xl play font-bold text-[white]">
            2015
          </span>
           Sweet Haven 
           E.S.T
        </p>
      </div>
    </div>

    {/* Text Section */}
    <div className="space-y-6">
      <h3 className="text-3xl font-playfair font-bold text-dark-brown">
        From Grandma’s Kitchen to Your Heart
      </h3>
      <p className="text-lg text-dark-brown/90">
        Founded in 2015 by Emily Carter, Sweet Haven Bakery began as a small
        home bakery inspired by her grandmother’s recipes. Today, we’re a
        beloved local spot where tradition meets innovation. Every loaf,
        cake, and pastry is crafted with the same love and care as our
        family’s secret recipes.
      </p>
      <p className="text-lg text-dark-brown/90">
        We use only the finest ingredients—100% organic flour, free-range
        eggs, and zero artificial additives. Whether you’re here for our
        artisanal bread, gourmet pastries, or custom celebration cakes,
        we’re committed to bringing joy to your table.
      </p>
      <div className="flex gap-4">
        
        <button className="border-2 border-soft-red text-soft-red px-8 py-3 rounded-full font-bold hover:bg-[#E34234] cursor-pointer hover:text-white transition-colors">
          Visit Us
        </button>
      </div>
    </div>
  </div>
  )
}

export default Story
