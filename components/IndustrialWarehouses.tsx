import React from 'react';
import { SectionId } from '../types';
import { WAREHOUSE_CONTENT } from '../constants';
import { Truck, ShieldCheck, Hammer, Sun, BatteryCharging, Zap, CheckCircle2 } from 'lucide-react';

export const IndustrialWarehouses: React.FC = () => {
  return (
    <section id={SectionId.WAREHOUSES} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-brand-gold font-sans font-bold tracking-[0.2em] text-sm uppercase block mb-4">
            Infraestructura Industrial
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-6">
            {WAREHOUSE_CONTENT.title}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {WAREHOUSE_CONTENT.subtitle}
          </p>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            {WAREHOUSE_CONTENT.description}
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {WAREHOUSE_CONTENT.commitments.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 text-2xl">
                {item.icon === 'engineering' && <ShieldCheck size={32} />}
                {item.icon === 'assembly' && <Hammer size={32} />}
                {item.icon === 'truck' && <Truck size={32} />}
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Energy Alternatives Banner */}
        <div className="bg-brand-dark rounded-3xl p-8 md:p-16 text-white mb-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif mb-4">Alternativas Energéticas</h3>
                    <p className="text-gray-400 max-w-xl">
                    Optimizá tu inversión con soluciones que reducen costos operativos y bajan el impacto ambiental.
                    </p>
                </div>
                <div className="bg-brand-green/20 border border-brand-green/50 px-6 py-4 rounded-xl flex items-center gap-3">
                    <Zap className="text-brand-green" size={24} />
                    <span className="font-bold text-brand-green">Ahorre hasta 65% en energía</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WAREHOUSE_CONTENT.energyOptions.map((opt, idx) => (
                <div key={idx} className={`rounded-xl p-6 border transition-all duration-300 ${opt.highlight ? 'bg-white/10 border-brand-gold/50' : 'bg-transparent border-white/20'}`}>
                   <div className="mb-4 text-brand-gold">
                        {idx === 0 ? <BatteryCharging size={28} className="opacity-50"/> : idx === 1 ? <Sun size={28} /> : <Zap size={28} />}
                   </div>
                  <h4 className="text-lg font-bold mb-3">{opt.title}</h4>
                  <p className="text-sm text-gray-300">{opt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wall Types & Success Case Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Wall Types List */}
            <div>
                <h3 className="text-3xl font-serif text-brand-dark mb-8">Tipos de Cerramiento</h3>
                <div className="space-y-6">
                    {WAREHOUSE_CONTENT.wallTypes.map((type, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="mt-1 flex-shrink-0">
                                <CheckCircle2 className="text-brand-gold" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark text-lg">{type.title}</h4>
                                <p className="text-gray-600 text-sm">{type.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <button 
                        onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
                        className="px-8 py-3 bg-brand-dark text-white font-sans font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                    >
                        Solicitar Presupuesto
                    </button>
                </div>
            </div>

            {/* Success Case Card */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                    src={WAREHOUSE_CONTENT.successCase.imageUrl} 
                    alt="Galpón Solar Catamarca" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded w-fit mb-4 uppercase tracking-wider">Caso de Éxito</span>
                    <h3 className="text-white font-serif text-2xl md:text-3xl mb-2">{WAREHOUSE_CONTENT.successCase.title}</h3>
                    <p className="text-brand-gold font-bold mb-4 flex items-center gap-2">
                        <MapPinIcon /> {WAREHOUSE_CONTENT.successCase.location}
                    </p>
                    <p className="text-white/90 text-sm mb-4">
                        {WAREHOUSE_CONTENT.successCase.description}
                    </p>
                     <div className="inline-block border-l-4 border-brand-green pl-4">
                        <p className="text-white font-bold">{WAREHOUSE_CONTENT.successCase.highlight}</p>
                     </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);