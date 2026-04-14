import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Eco House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-brand-gold font-sans font-bold tracking-[0.2em] text-sm md:text-base mb-4 uppercase animate-fade-in-up">
          Catamarca • Argentina
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight animate-fade-in-up delay-100">
          El Futuro de la <br />
          <span className="italic">Construcción Modular</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Soluciones sustentables, diseño premium y montaje rápido para industria y turismo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button 
                onClick={() => document.getElementById(SectionId.MODELS)?.scrollIntoView({ behavior: 'smooth'})}
                className="px-8 py-3 bg-white text-gray-900 font-sans font-semibold tracking-wide hover:bg-gray-200 transition-colors"
            >
                VER CATÁLOGO
            </button>
            <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth'})}
                className="px-8 py-3 border border-white text-white font-sans font-semibold tracking-wide hover:bg-white/10 transition-colors"
            >
                CONTACTAR
            </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};