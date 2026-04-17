import React from 'react';
import { SectionId, TeamMember } from '../types';
import { TEAM, SOCIAL_INSTAGRAM, COMPANY_EMAIL, OFFICES } from '../constants';
import { Mail, Instagram, MessageCircle, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="mb-16">
          <Logo color="#1A1A1A" className="h-32 mb-8" />
          <h2 className="text-4xl font-serif text-brand-dark mb-6 max-w-2xl">
            Soluciones inteligentes que <span className="text-brand-gold italic">mueven el futuro.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Desarrollamos y suministramos productos que transforman la industria y mejoran la infraestructura en Argentina.
          </p>
        </div>

        {/* 3 columnas asimétricas: Equipo(3) | Oficinas(3) | Formulario(5) */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-10 mb-16 pb-16 border-b border-gray-200">
          {/* Col 1: Equipo + Contacto + Redes */}
          <div className="md:col-span-3">
            <p className="text-brand-gold font-sans font-bold tracking-[0.2em] text-xs uppercase mb-6">Equipo</p>
            <div className="space-y-6 mb-10">
              {TEAM.map((member: TeamMember, idx) => (
                <div key={idx}>
                  <h4 className="text-base font-bold text-brand-dark">{member.name}</h4>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              ))}
            </div>

            <p className="text-brand-gold font-sans font-bold tracking-[0.2em] text-xs uppercase mb-6">Contacto</p>
            <div className="mb-6">
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-3 text-gray-600 text-sm hover:text-brand-gold transition-colors">
                <Mail size={16} className="text-brand-gold" />
                <span>{COMPANY_EMAIL}</span>
              </a>
            </div>

            <div>
              <h5 className="font-bold text-brand-dark text-sm mb-3">Síguenos</h5>
              <div className="flex gap-3">
                <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
                  <Instagram size={16} />
                </a>
                <span className="w-9 h-9 bg-[#25D366] text-white rounded-full flex items-center justify-center cursor-default">
                  <MessageCircle size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Oficinas */}
          <div className="md:col-span-3">
            <p className="text-brand-gold font-sans font-bold tracking-[0.2em] text-xs uppercase mb-6">Oficinas</p>
            <div className="space-y-6">
              {OFFICES.map((office, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">{office.country}</h4>
                    <p className="text-gray-600 text-sm">{office.address}</p>
                    <p className="text-gray-500 text-sm">{office.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Formulario */}
          <div className="md:col-span-5 bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif text-brand-dark mb-6">Contáctanos</h3>
            <form className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Nombre</label>
                <input type="text" className="bg-white border-b border-gray-300 p-2 text-sm focus:outline-none focus:border-brand-gold" placeholder="Juan Pérez" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Teléfono</label>
                <input type="tel" className="bg-white border-b border-gray-300 p-2 text-sm focus:outline-none focus:border-brand-gold" placeholder="+54 ..." />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email</label>
                <input type="email" className="bg-white border-b border-gray-300 p-2 text-sm focus:outline-none focus:border-brand-gold" placeholder="email@ejemplo.com" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Mensaje</label>
                <textarea rows={3} className="bg-white border-b border-gray-300 p-2 resize-none text-sm focus:outline-none focus:border-brand-gold" placeholder="Estoy interesado en..." />
              </div>
              <button type="button" className="bg-brand-dark text-white px-6 py-3 w-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FADMYL. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-dark">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-dark">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
