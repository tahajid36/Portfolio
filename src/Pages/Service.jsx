import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // FIX 1: Change gsap.from to gsap.fromTo for the title
      gsap.fromTo(
        ".service-title",
        { y: 30, opacity: 0 }, // FROM state (initial)
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" } // TO state (final)
      );

      // FIX 2: Change gsap.from to gsap.fromTo for the cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 }, // FROM state (initial)
        {
          opacity: 1, // Ensure the final opacity is 1
          y: 0, // Ensure the final y position is 0 (original position)
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        } // TO state (final)
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Responsive Websites",
      desc: "Fully responsive layouts optimized for mobile, tablet, and desktop.",
    },
    {
      title: "RESTful APIs",
      desc: "Designing and consuming clean & scalable APIs.",
    },
    {
      title: "Polished UI",
      desc: "Smooth, modern, and visually appealing user interfaces.",
    },
    {
      title: "Clean Code",
      desc: "Maintainable, modular, and efficient coding practices.",
    },
    {
      title: "Frontend Focused",
      desc: "Expertise in crafting fast & dynamic React applications.",
    },
    {
      title: "MERN Skills",
      desc: "MongoDB, Express.js, React.js, Node.js development capabilities.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-6 md:px-16 bg-white dark:bg-neutral-950"
    >
      <h2 className="service-title text-3xl md:text-4xl font-bold text-center mb-12">
        My Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-6 rounded-2xl shadow-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
