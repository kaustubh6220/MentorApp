// Home.js
"use client"; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === carouselData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carouselData.length - 1 : slide - 1);
  };

  const carouselData = [
    { src: '/assets/images/adt.jpeg', alt: 'Slide 1' },
    { src: '/assets/images/adtulogo.jpeg', alt: 'Slide 2' },
    // Add more slides as needed
  ];

  // Function to switch slides automatically after a timeout
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the duration here (3000 milliseconds = 3 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slide]); // Re-run effect when slide changes

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-4">MIT SCHOOL OF COMPUTING</h1>
      <h2 className="text-lg font-medium text-center mb-6">Rajbaug, Loni-Kalbhor, Pune</h2>
      <div className="flex flex-col items-center mb-8">
        <Image src={'/assets/itbuilding.jpg'} alt={'itbuilding'} width={750} height={400} />
        {/* Carousel */}
        <div className="relative mt-4 w-full">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
            &lt;
          </div>
          {carouselData.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={item.alt}
              className={idx === slide ? 'block w-full' : 'hidden'}
              style={{ height: '400px' }} // Adjust height to match the image
            />
          ))}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
            &gt;
          </div>
        </div>
      </div>

      <div className="md:flex gap-5 bg-gray-300 mt-6 p-8 rounded-lg">
        <div className="bg-gray-500 text-white font-semibold flex flex-col items-center justify-center p-4 rounded-lg">
          <h1 className="text-lg mb-2">...inspiring</h1>
          <h2 className="text-lg mb-2">journey from</h2>
          <h3 className="text-lg mb-2">knowledge </h3>
          <h4 className="text-lg">to wisdom !!!</h4>
        </div>

        <div className="mt-5 font-semibold text-gray-700 flex flex-col items-center">
          <Image src={'/assets/design.png'} alt="design" width={200} height={50} />
          <h1 className="text-xl text-dark-1 mb-4">Vision</h1>
          <p className="text-lg text-gray-600 mb-4">"Our University is in pursuit of Art, Knowledge and Science to culminate Wisdom"</p>
          <hr className="w-1/2 mb-4"/>
          <h4 className="text-xl text-dark-1 mb-2">Mission</h4>
          <ul className="flex flex-col items-center">
            <li className="text-gray-600 mb-1">Creating global employability</li>
            <li className="text-gray-600 mb-1">Unleashing Potential of Students</li>
            <li className="text-gray-600 mb-1">Building Entrepreneurship</li>
            <li className="text-gray-600 mb-1">Emphasis on Promoting Innovation</li>
            <li className="text-gray-600 mb-1">Synthesis of Art, Design and Technology in Academics</li>
          </ul>
          <Image src={'/assets/design1.png'} alt="design" width={200} height={50} className="mt-4" />
        </div>
      </div>
    </section>
  );
}
