import React from "react";
// Adjust the path if necessary:
import myImg from '../assets/Adobe Express - file (1).png' 

const HeroImageGlow = () => {
  // This component assumes you are using Tailwind CSS and have added the custom 
  // 'animate-pulse-slow' configuration to your tailwind.config.js file (or included it via CSS).

  return (
    <div className="relative w-full flex justify-center items-center p-4">
      
      {/* 1. Animated Glow Background */}
      <div
        className="absolute 
        w-[450px] h-[450px] lg:w-[650px] lg:h-[650px]
        bg-[radial-gradient(circle,_rgba(0,180,255,0.65)_0%,_rgba(0,0,0,0)_70%)]
        blur-3xl opacity-60
        animate-pulse-slow"
      />

      {/* 2. Image Container with Hover Effects */}
      <div className="relative z-10 group 
                      w-[480px] sm:w-[450px] lg:w-[650px] 
                      p-2 rounded-xl 
                      transition-all duration-500 ease-in-out">

        {/* 3. Image Element */}
        <img
          src={myImg}
          alt="Hero person"
          className="w-full h-auto 
                     relative z-10 
                     rounded-lg 
                     drop-shadow-2xl shadow-blue-500/50
                     transition-all duration-500 ease-in-out
                     group-hover:scale-[1.03] 
                     group-hover:brightness-110
                     select-none"
        />

        {/* Optional: Inner shadow/overlay on hover for more depth */}
        <div className="absolute inset-0 
                        rounded-lg 
                        bg-black/10 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity duration-500"
        />
      </div>
      
      {/* NOTE: Include this style block in your global CSS or in your tailwind.config.js 
        to ensure the 'animate-pulse-slow' class works correctly.
      */}
      {/*  */}
    </div>
  );
};

export default HeroImageGlow;