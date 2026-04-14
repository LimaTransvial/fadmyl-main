import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
          <Logo color={isScrolled ? "#1A1A1A" : "#FFFFFF"} className="h-20 text-brand-dark" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { label: 'Modelos', id: SectionId.MODELS },
            { label: 'Galpones', id: SectionId.WAREHOUSES },
            { label: 'Galería', id: SectionId.GALLERY },
            { label: 'IA Advisor', id: SectionId.AI_ADVISOR },
            { label: 'Contacto', id: SectionId.CONTACT },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-brand-gold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className={`px-6 py-2 border transition-all duration-300 ${
              isScrolled
                ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-brand-dark'
            }`}
          >
            COTIZAR
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center space-y-6">
          <button onClick={() => scrollToSection(SectionId.MODELS)} className="text-gray-800 font-medium tracking-widest uppercase">Modelos</button>
          <button onClick={() => scrollToSection(SectionId.WAREHOUSES)} className="text-gray-800 font-medium tracking-widest uppercase">Galpones</button>
          <button onClick={() => scrollToSection(SectionId.GALLERY)} className="text-gray-800 font-medium tracking-widest uppercase">Galería</button>
          <button onClick={() => scrollToSection(SectionId.AI_ADVISOR)} className="text-gray-800 font-medium tracking-widest uppercase">IA Advisor</button>
          <button onClick={() => scrollToSection(SectionId.CONTACT)} className="text-gray-800 font-medium tracking-widest uppercase">Contacto</button>
        </div>
      )}
    </nav>
  );
};
// import React, { useState, useEffect } from 'react';
// import { Logo } from './Logo';
// import { Menu, X } from 'lucide-react';
// import { SectionId } from '../types';

// export const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: SectionId) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <div className="cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
//           <Logo color={isScrolled ? "#1A1A1A" : "#FFFFFF"} className="h-10 text-brand-dark" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 items-center">
//           {[
//             { label: 'Modelos', id: SectionId.MODELS },
//             { label: 'Galpones', id: SectionId.WAREHOUSES },
//             { label: 'Galería', id: SectionId.GALLERY },
//             { label: 'IA Advisor', id: SectionId.AI_ADVISOR },
//             { label: 'Contacto', id: SectionId.CONTACT },
//           ].map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-brand-gold ${
//                 isScrolled ? 'text-gray-800' : 'text-white'
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}
//           <button
//             onClick={() => scrollToSection(SectionId.CONTACT)}
//             className={`px-6 py-2 border transition-all duration-300 ${
//               isScrolled
//                 ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
//                 : 'border-white text-white hover:bg-white hover:text-brand-dark'
//             }`}
//           >
//             COTIZAR
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? (
//             <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
//           ) : (
//             <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center space-y-6">
//           <button onClick={() => scrollToSection(SectionId.MODELS)} className="text-gray-800 font-medium tracking-widest uppercase">Modelos</button>
//           <button onClick={() => scrollToSection(SectionId.WAREHOUSES)} className="text-gray-800 font-medium tracking-widest uppercase">Galpones</button>
//           <button onClick={() => scrollToSection(SectionId.GALLERY)} className="text-gray-800 font-medium tracking-widest uppercase">Galería</button>
//           <button onClick={() => scrollToSection(SectionId.AI_ADVISOR)} className="text-gray-800 font-medium tracking-widest uppercase">IA Advisor</button>
//           <button onClick={() => scrollToSection(SectionId.CONTACT)} className="text-gray-800 font-medium tracking-widest uppercase">Contacto</button>
//         </div>
//       )}
//     </nav>
//   );
// };