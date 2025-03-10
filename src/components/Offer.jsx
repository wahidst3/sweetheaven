import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SpecialOffers = () => {
  const bannerRef = useRef();

//   useEffect(() => {
//     gsap.from(bannerRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 0.5,
//       scrollTrigger: {
//         trigger: bannerRef.current,
//         start: "top 60%",
//         end: "bottom 80%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   }, []);

  return (
    <section className="bg-soft-red py-12">
      <div ref={bannerRef} className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Get 10% Off Your First Order!
        </h2>
        <p className="text-white mb-6">
          Use code <strong>SWEET10</strong> at checkout.
        </p>
        <button className="bg-white text-soft-red px-8 py-3 rounded-full font-bold hover:bg-dark-brown hover:text-white transition-colors">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default SpecialOffers;