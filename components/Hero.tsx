import React, { useState, useEffect } from 'react';

const heroImages = [
  'https://i.ibb.co/bQ0J4M2/hero-1.jpg',
  'https://i.ibb.co/mX1x1bV/hero-2.jpg',
  'https://i.ibb.co/GcvYn4G/hero-3.jpg',
  'https://i.ibb.co/dKqYtG9/hero-4.jpg',
];


const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-64px)] bg-gray-800 text-white flex items-center justify-center text-center overflow-hidden">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block">TINUBU</span>
          <span className="block text-brand-yellow">PROJECT '27</span>
          <span className="block">SUPPORT GROUP</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 font-light">
          Motto: Mobilization for Victory
        </p>
      </div>
       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;