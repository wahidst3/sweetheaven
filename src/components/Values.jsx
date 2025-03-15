import React from "react";
import { FaLeaf, FaGlobe, FaHeart } from "react-icons/fa";

const Values = () => {
  return (
    <div className="mt-20 flex items-center justify-between gap-10 w-full ">
      <div className="text-center flex flex-col justify-center items-center w-[25%]">
        <div className="text-7xl text-[#E34234] mb-4">
          <FaLeaf />
        </div>
        <h4 className="text-2xl play font-bold text-[#3A2D1F] mb-2">
          Organic Ingredients
        </h4>
        <p className="text-[#3A2D1F]/90 lato">
          We source only the best organic ingredients for our baked goods.
        </p>
      </div>

      <div className="text-center flex flex-col justify-center items-center w-[30%]">
        <div className="text-7xl text-[#E34234] mb-4">
          <FaGlobe />
        </div>
        <h4 className="text-2xl play font-bold text-[#3A2D1F] mb-2">
          Zero Waste
        </h4>
        <p className="text-[#3A2D1F]/90 lato">
          We’re committed to sustainable practices and reducing waste.
        </p>
      </div>

      <div className="text-center flex flex-col justify-center items-center w-[25%]">
        <div className="text-7xl text-[#E34234] mb-4">
          <FaHeart />
        </div>
        <h4 className="text-2xl play font-bold text-[#3A2D1F] mb-2">
          Community First
        </h4>
        <p className="text-[#3A2D1F]/80 lato">
          We believe in giving back to the community that supports us.
        </p>
      </div>
    </div>
  );
};

export default Values;
