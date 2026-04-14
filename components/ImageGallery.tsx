import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { GALLERY_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageGallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={SectionId.GALLERY} className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-brand-gold font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-4">
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Nuestros Proyectos
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          
          {/* Images */}
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <div className={`transition-all duration-700 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{img.title}</h3>
                    <p className="text-brand-gold font-sans tracking-wider uppercase text-sm">{img.subtitle}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-brand-gold w-8' : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};