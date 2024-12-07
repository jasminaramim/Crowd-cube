import React, { useState } from 'react';
import LocalCommunity from '../images/7181480.jpg';
import SpreadWarmthandCare from '../images/4932153.jpg';
import BetheChange from '../images/happy-child-with-cardboard-wings-inspirational-phrase.jpg';
import { Typewriter } from 'react-simple-typewriter';  

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const slides = [
    {
      id: 1,
      image: LocalCommunity,
      title: "Empowering Local Communities",
      description: "Join hands to strengthen and uplift local communities with compassion and support.",
    },
    {
      id: 2,
      image: BetheChange,
      title: "Be the Change",
      description: "Your small efforts can bring about big transformations. Let's make a difference together.",
    },
    {
      id: 3,
      image: SpreadWarmthandCare,
      title: "Spread Warmth and Care",
      description: "Extend a helping hand this winter by sharing love and warmth with those in need.",
    },
  ];

  return (
    <div className="carousel lg:mt-20 mt-10 w-full relative h-[500px]">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`carousel-item relative w-full ${activeSlide === slide.id ? 'block' : 'hidden'}`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover rounded-lg"
            alt={`Slide ${slide.id}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-5">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {/* Typewriter Effect */}
              <Typewriter
                words={[slide.title]} 
                loop={1}                
                typeSpeed={100}        
                deleteSpeed={50}        
                delaySpeed={1000}      
              />
            </h2>
            <p className="text-lg lg:text-xl">{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle">❮</button>
        <button onClick={nextSlide} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

export default Banner;
