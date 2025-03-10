
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const FeaturedProducts = () => {
//   const productRefs = useRef([]);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: -50,
//       duration: 1,
//       ease: "power2.out",
//     });})
//   useEffect(() => {
//     productRefs.current.forEach((el, index) => {
//       let animationProps = {};

//       if (index === 0 || index === 3) {
//         animationProps = { x: index === 0 ? -100 : 100, opacity: 0 };
//       } else if (index === 1) {
//         animationProps = { y: -100, opacity: 0 };
//       } else if (index === 2) {
//         animationProps = { y: 100, opacity: 0 };
//       }

//       gsap.from(el, {
//         ...animationProps,
//         duration: 1,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse",
//         },
//         delay: index * 0.2,
//       });
//     });
//   }, []);

//   const products = [
//     {
//       image: "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg",
//       title: "Artisanal Bread Basket",
//       description: "Our daily bread, baked with love and tradition.",
//       cta: "Order Now",
//     },
//     {
//       image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
//       title: "Signature Cakes",
//       description: "Custom cakes for every occasion, made just for you.",
//       cta: "Customize Yours",
//     },
//     {
//       image: "https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg",
//       title: "Vegan Delights",
//       description: "Indulge guilt-free with vegan and gluten-free options.",
//       cta: "Explore Vegan Menu",
//     },
//     {
//       image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
//       title: "Seasonal Specials",
//       description: "Try our limited-time seasonal favorites!",
//       cta: "See What’s New",
//     },
//   ];

//   return (
//     <section className="py-12 bg-warm-beige mt-20 relative bg-[#FFF8F0]">
//       <div className="container mx-auto px-4">
//         <div  className="flex flex-wrap justify-between w-full items-center mb-8">
//           <h2  className="text-4xl font-bold text-dark-brown text-center">Featured Products</h2>
//           <button className="cursor-pointer bg-soft-red text-md font-semibold text-white mt-4 bg-[#E34234] px-6 py-2 rounded-r-lg hover:bg-dark-brown transition-colors">View All</button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               ref={(el) => (productRefs.current[index] = el)}
//               className="rounded-lg relative"
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-68 object-cover rounded-lg mb-4"
//               />
//               <div className="bg-[#FFF8F0] fade-in mb-1 border-1 border-[#3A2D1F] group text-left p-2 rounded-lg shadow-lg w-[90%] m-auto absolute bottom-12 left-3.5 cursor-pointer">
//                 <h3 className="text-lg text-[#3A2D1F] font-semibold mb-1">{product.title}</h3>
//                 <p className="text-lg text-[#3A2D1F] lato hidden group-hover:block transition-opacity duration-300">{product.description}</p>
//               </div>
//               <button className="cursor-pointer bg-soft-red text-md font-semibold text-white mt-4 bg-[#E34234] px-6 py-2 rounded-r-lg hover:bg-dark-brown transition-colors">
//                 {product.cta}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  const productRefs = useRef([]);
  const headerRef = useRef(null);

  // useEffect(() => {
  //   // Header animation
  //   gsap.from(headerRef.current, {
  //     opacity: 0,
  //     y: -50,
  //     duration: 1,
  //     ease: "power2.out",
  //   });

  //   // Product card animations
  // //   productRefs.current.forEach((el, index) => {
  // //     let animationProps = {};

  // //     if (index === 0 || index === 3) {
  // //       animationProps = { x: index === 0 ? -100 : 100, opacity: 0 };
  // //     } else if (index === 1) {
  // //       animationProps = { y: -100, opacity: 0 };
  // //     } else if (index === 2) {
  // //       animationProps = { y: 100, opacity: 0 };
  // //     }

  // //     gsap.from(el, {
  // //       ...animationProps,
  // //       duration: 1,
  // //       ease: "power2.out",
  // //       scrollTrigger: {
  // //         trigger: el,
  // //         start: "top 80%",
  // //         end: "bottom 20%",
  // //         toggleActions: "play none none reverse",
  // //         markers: false, // Disable markers for production
  // //       },
  // //       delay: index * 0.2,
  // //     });
  // //   });
  // // }, []);

  const products = [
    {
      image: "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg",
      title: "Artisanal Bread Basket",
      description: "Our daily bread, baked with love and tradition.",
      cta: "Order Now",
    },
    {
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
      title: "Signature Cakes",
      description: "Custom cakes for every occasion, made just for you.",
      cta: "Customize Yours",
    },
    {
      image: "https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg",
      title: "Vegan Delights",
      description: "Indulge guilt-free with vegan and gluten-free options.",
      cta: "Explore Vegan Menu",
    },
    {
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
      title: "Seasonal Specials",
      description: "Try our limited-time seasonal favorites!",
      cta: "See What’s New",
    },
  ];

  return (
    <section className="py-12 bg-warm-beige mt-20 relative bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div  className="flex flex-wrap justify-between w-full items-center mb-8">
          <h2 className="text-4xl font-bold text-dark-brown text-center">Featured Products</h2>
          <button className="cursor-pointer hidden lg:block md:block bg-soft-red text-md font-semibold text-white mt-4 bg-[#E34234] px-6 py-2 rounded-r-lg hover:bg-dark-brown transition-colors">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productRefs.current[index] = el)}
              className="rounded-lg relative"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <div className="bg-[#FFF8F0] fade-in mb-1 border-1 border-[#3A2D1F] group text-left p-2 rounded-lg shadow-lg w-[90%] m-auto absolute bottom-12 left-3.5 cursor-pointer">
                <h3 className="text-lg text-[#3A2D1F] font-semibold mb-1">{product.title}</h3>
                <p className="text-lg text-[#3A2D1F] lato hidden group-hover:block transition-opacity duration-300">
                  {product.description}
                </p>
              </div>
              <button className="cursor-pointer bg-soft-red text-md font-semibold text-white mt-4 bg-[#E34234] px-6 py-2 rounded-r-lg hover:bg-dark-brown transition-colors">
                {product.cta}
              </button>
            </div>
          ))}
        </div>
        <button className="cursor-pointer block lg:hidden md:hidden bg-soft-red text-center text-md font-semibold text-white mt-4 bg-[#E34234] px-6 py-2 rounded-md hover:bg-dark-brown transition-colors">
            View All
          </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;