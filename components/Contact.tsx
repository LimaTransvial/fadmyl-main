import React from 'react';
import { SectionId, TeamMember } from '../types';
import { TEAM, COMPANY_LOCATION, COMPANY_PHONE, SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK, COMPANY_EMAIL } from '../constants';
import { Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  const whatsappLink = `https://wa.me/549${COMPANY_PHONE}`;

  return (
    <footer id={SectionId.CONTACT} className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column: Info */}
          <div>
            <Logo color="#1A1A1A" className="h-32 mb-8" />
            <h2 className="text-4xl font-serif text-brand-dark mb-6">
              Soluciones inteligentes que <br /> <span className="text-brand-gold italic">mueven el futuro.</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-md">
              Desarrollamos y suministramos productos que transforman la industria y mejoran la infraestructura en Catamarca y todo el país.
            </p>

            <div className="space-y-8">
              {/* Team Members */}
              {TEAM.map((member: TeamMember, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark font-serif font-bold text-xl">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark">{member.name}</h4>
                    <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">{member.role}</p>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-brand-dark transition-colors">
                        <Phone size={14} />
                        <span>+54 9 {member.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* General Company Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark">
                    <Mail size={20} />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-brand-dark">Email de Contacto</h4>
                    <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-600 hover:text-brand-gold transition-colors block">
                        {COMPANY_EMAIL}
                    </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h5 className="font-bold text-brand-dark mb-4">Síguenos</h5>
              <div className="flex gap-4">
                <a href={SOCIAL_FACEBOOK} target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
                  <Facebook size={18} />
                </a>
                <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
                  <Instagram size={18} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#25D366] text-white border border-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Map Removed) */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif text-brand-dark mb-8">Contáctanos</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Nombre</label>
                  <input type="text" className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold" placeholder="Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Teléfono</label>
                  <input type="tel" className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold" placeholder="+54 ..." />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email</label>
                <input type="email" className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold" placeholder="email@ejemplo.com" />
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Mensaje</label>
                <textarea rows={4} className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold resize-none" placeholder="Estoy interesado en..." />
              </div>
              <button type="button" className="bg-brand-dark text-white px-8 py-4 w-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
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
// import React from 'react';
// import { SectionId, TeamMember } from '../types';
// import { TEAM, COMPANY_LOCATION, COMPANY_PHONE, SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK, COMPANY_EMAIL } from '../constants';
// import { Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
// import { Logo } from './Logo';

// export const Contact: React.FC = () => {
//   const whatsappLink = `https://wa.me/549${COMPANY_PHONE}`;

//   return (
//     <footer id={SectionId.CONTACT} className="bg-white pt-24 pb-12">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
//           {/* Left Column: Info */}
//           <div>
//             <Logo color="#1A1A1A" className="h-12 mb-8" />
//             <h2 className="text-4xl font-serif text-brand-dark mb-6">
//               Soluciones inteligentes que <br /> <span className="text-brand-gold italic">mueven el futuro.</span>
//             </h2>
//             <p className="text-gray-600 mb-10 max-w-md">
//               Desarrollamos y suministramos productos que transforman la industria y mejoran la infraestructura en Catamarca y todo el país.
//             </p>

//             <div className="space-y-8">
//               {/* Team Members */}
//               {TEAM.map((member: TeamMember, idx) => (
//                 <div key={idx} className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark font-serif font-bold text-xl">
//                     {member.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-brand-dark">{member.name}</h4>
//                     <p className="text-brand-gold text-sm uppercase tracking-wider mb-1">{member.role}</p>
//                     {member.phone && (
//                       <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-brand-dark transition-colors">
//                         <Phone size={14} />
//                         <span>+54 9 {member.phone}</span>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               {/* General Company Email */}
//               <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
//                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark">
//                     <Mail size={20} />
//                 </div>
//                 <div>
//                     <h4 className="text-lg font-bold text-brand-dark">Email de Contacto</h4>
//                     <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-600 hover:text-brand-gold transition-colors block">
//                         {COMPANY_EMAIL}
//                     </a>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12">
//               <h5 className="font-bold text-brand-dark mb-4">Síguenos</h5>
//               <div className="flex gap-4">
//                 <a href={SOCIAL_FACEBOOK} target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
//                   <Facebook size={18} />
//                 </a>
//                 <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
//                   <Instagram size={18} />
//                 </a>
//                 <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#25D366] text-white border border-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all">
//                   <MessageCircle size={18} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Contact Form (Map Removed) */}
//           <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
//             <h3 className="text-2xl font-serif text-brand-dark mb-8">Contáctanos</h3>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Nombre</label>
//                   <input type="text" className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold" placeholder="Juan Pérez" />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Teléfono</label>
//                   <input type="tel" className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold" placeholder="+54 ..." />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email</label>
//                 <input type="email" className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold" placeholder="email@ejemplo.com" />
//               </div>
//               <div className="flex flex-col gap-2">
//                  <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Mensaje</label>
//                 <textarea rows={4} className="bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-brand-gold resize-none" placeholder="Estoy interesado en..." />
//               </div>
//               <button type="button" className="bg-brand-dark text-white px-8 py-4 w-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
//                 Enviar Mensaje
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//           <p>&copy; {new Date().getFullYear()} FADMYL. Todos los derechos reservados.</p>
//           <div className="flex gap-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-brand-dark">Política de Privacidad</a>
//             <a href="#" className="hover:text-brand-dark">Términos de Uso</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };