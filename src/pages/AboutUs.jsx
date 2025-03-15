import React from "react";
import Story from "../components/Story";
import MeetOurTeam from "../components/MeetOurTeam";
import Values from "../components/Values";

const AboutUs = () => {
  return (
    <section className="py-20 bg-warm-beige relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flour dust particles */}
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-[#3A2D1F]/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#E34234]/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <h2 className="text-5xl md:text-5xl play font-bold text-[#A35D3D]  text-left mb-12">
          Our Story-The Beginning
         
        </h2>

        {/* Content Grid */}
       <Story/>
<MeetOurTeam/>
        {/* Values Section */}
      <Values/>
      </div>
    </section>
  );
};

export default AboutUs;