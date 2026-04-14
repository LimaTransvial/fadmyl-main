import React from 'react';
import { SectionId } from '../types';
import { MODELS } from '../constants';
import { Check } from 'lucide-react';

export const Catalog: React.FC = () => {
  return (
    <section id={SectionId.MODELS} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-4">
            Nuestro Portafolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
            Modelos Disponibles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODELS.map((model) => (
            <div key={model.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  {model.category}
                </div>
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-brand-dark mb-2">{model.name}</h3>
                {model.size && (
                  <p className="text-brand-gold font-medium mb-4">{model.size}</p>
                )}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                  {model.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {model.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
                  className="w-full py-3 border border-brand-dark text-brand-dark text-sm font-bold uppercase tracking-wider hover:bg-brand-dark hover:text-white transition-colors"
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};