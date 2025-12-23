import React from "react";
import HeroImageGlow from "./HeroImageGlow";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import ServiceCard from "./ServiceCard";
import AnimatedTextReveal from "./AnimatedTextReveal";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <main className="relative ">
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-29  items-center mx-auto pt-32 pb-16 lg:pt-0 lg:pb-0">
            
            {/* LEFT CONTENT */}
            <div className="text-center  lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                HELLO,
              </p>
              <div className="relative inline-block">
                <AnimatedTextReveal/>
              </div>

              <p className="max-w-lg mx-auto lg:mx-0 text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12">
              Junior Frontend Developer specializing in building responsive, user-friendly interfaces using React.js. Skilled in component-based architecture, state management, UI/UX fundamentals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12">
                
          
                 {/* SOCIAL ICONS */}
                 <div className="space-y-7">
                 <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                    FIND ME ON
                  </p>

                  <div className="flex items-center space-x-3">
                    {/* Instagram */}
                    <a
                      href="https://www.linkedin.com/in/tahajid-ahmed/"
                      className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800/60 rounded-full text-gray-600 dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <GrLinkedin/>
                    </a>

                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800/60 rounded-full text-gray-600 dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <FaGithub/>
                    </a>
                  </div>
                </div>
                <div>
                <Link to={'https://docs.google.com/document/d/1ftwRdVl6lw_OXDqe11-t7QrcfnRqm_nA5CTqmguUOrA/export?format=pdf'}>
      <button className="btn-md btn btn-primary">
        Download Resume
      </button>
      </Link>
      
                </div>
                </div>

    
        
              </div>
            </div>

            {/* IMAGE RIGHT SIDE */}
            <div className="relative  order-first lg:order-last ">
             <HeroImageGlow></HeroImageGlow>
            </div>
          </div>
        </div>
      </div>

     
    </main>
  );
};





export default HeroSection;
