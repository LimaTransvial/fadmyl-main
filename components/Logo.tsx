import React from 'react';

interface LogoProps {
  color?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-16 w-auto" }) => {
  return (
    <div className={`${className} flex items-center`}>
      <img 
        src="https://i.postimg.cc/6pqG5CwT/Whats-App-Image-2025-12-15-at-09-27-48.jpg" 
        alt="FADMYL" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
// import React from 'react';

// interface LogoProps {
//   color?: string;
//   className?: string;
// }

// export const Logo: React.FC<LogoProps> = ({ color = "currentColor", className = "w-10 h-10" }) => {
//   return (
//     <div className={`flex items-center gap-3 ${className}`}>
//       <svg
//         viewBox="0 0 100 100"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-full w-auto"
//       >
//         {/* Modular Cube / Hexagon Construction Icon */}
//         <path
//           d="M50 15 L85 35 V75 L50 95 L15 75 V35 L50 15 Z"
//           stroke={color}
//           strokeWidth="2"
//           opacity="0.2"
//         />
        
//         {/* Inner structural lines representing modules */}
//         <path
//           d="M50 15 V55 M50 55 L85 35 M50 55 L15 35"
//           stroke={color}
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
        
//         <path
//            d="M15 75 L50 95 L85 75"
//            stroke={color}
//            strokeWidth="3"
//            strokeLinecap="round"
//            strokeLinejoin="round"
//            opacity="0.6"
//         />

//         {/* Dot indicating 'Intelligence' or 'Point of focus' */}
//         <circle cx="50" cy="55" r="5" fill={color === "#ffffff" ? "#ffffff" : "#C5A059"} />
//       </svg>
//       <div className="flex flex-col justify-center">
//         <span className={`font-serif font-bold text-2xl leading-none tracking-widest text-[${color}]`}>
//           FADMYL
//         </span>
//         <span className={`font-sans text-[0.55rem] tracking-[0.25em] uppercase text-[${color}] opacity-80 mt-1`}>
//           Soluciones Inteligentes
//         </span>
//       </div>
//     </div>
//   );
// };