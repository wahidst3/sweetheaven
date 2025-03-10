import React, { useRef, useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

export default function BehindTheScenes() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Video sources
  const videos = [video1, video2, video3, video4];

  // Function to play the next video
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length); // Loop videos
  };

  return (
    <div className="relative w-full  h-screen p-3 flex items-center justify-center overflow-hidden ">
      {/* Background Video */}
      <video
        key={currentVideo} // 👈 Forces re-render when video changes
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#F5E6D3]/40"></div>

      {/* Main Heading (Behind the Video) */}
      {/* <h1 className="absolute text-center py-4 bg-[#F5E6D3] lato w-full rounded-b-2xl top-0 px-32 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-[#3A2D1F]">
       
      </h1> */}

      {/* Centered Subheading */}
      <h2 className="absolute md:top-64 lg:top-64 top-36 rounded-t-2xl text-white/80 text-center py-4  text-3xl md:text-5xl play font-semibold z-10 w-full">
        How We Prepare the <span className="text-[#F5E6D3]/80">Delicious Moments</span>
      </h2>
    /
      <p className="relative text-white/50 text-lg md:text-xl z-10 text-center mt-20 max-w-2xl">
  Step into our kitchen and witness the magic behind every bite. From handpicked ingredients to 
  artisan techniques, we pour love into every creation to bring you the finest flavors.
</p>
{/* <h1 className="absolute text-center py-4 bg-[#F5E6D3] lato w-full rounded-t-2xl bottom-0 px-32 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-[#3A2D1F]">
       
      </h1> */}
    </div>
  );
}
