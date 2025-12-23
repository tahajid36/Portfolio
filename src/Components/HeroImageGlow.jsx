import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import myImg from "../assets/Adobe Express - file (1).png";

const HeroImageGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    gsap.set(glow, { xPercent: -50, yPercent: -50 });

    const moveGlow = (e) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center overflow-visible">
      
      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -z-10
        w-[320px] h-[320px]
        bg-blue-500/30 rounded-full blur-[120px]
        pointer-events-none"
      />

      {/* Ambient glow */}
      <div
        className="absolute 
        w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]
        bg-[radial-gradient(circle,_rgba(0,160,255,0.35)_0%,_rgba(0,0,0,0)_70%)]
        blur-3xl opacity-70
        animate-pulse-slow"
      />

      {/* Image container */}
      <div className="relative z-10 group 
                      w-[420px] sm:w-[450px] lg:w-[600px] 
                      transition-all duration-500 ease-out">

        <img
          src={myImg}
          alt="Tahajid Ahmed"
          className="w-full h-auto 
                     rounded-xl
                     drop-shadow-[0_25px_50px_rgba(0,80,255,0.45)]
                     transition-transform duration-500
                     group-hover:scale-[1.035]
                     select-none"
        />

        {/* Foreground contrast mask */}
        <div className="absolute inset-0 
                        rounded-xl 
                        bg-gradient-to-t from-black/30 via-transparent to-transparent
                        pointer-events-none"
        />
      </div>
    </div>
  );
};

export default HeroImageGlow;
