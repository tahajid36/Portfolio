import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  "React Js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "Framer Motion",
  "GSAP",
  "GitHub",
  "Node Js",
  "Express Js",
  "MongoDB",
  "Next Js",
];

const Skills = () => {
  const wrapperRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    // Duplicate boxes to create seamless infinite loop
    const wrapper = wrapperRef.current;
    const allBoxes = [...boxes];

    // Duplicate elements for smooth infinite loop
    allBoxes.forEach((box) => {
      const clone = box.cloneNode(true);
      wrapper.appendChild(clone);
      boxesRef.current.push(clone);
    });

    // Set initial xPercent positions
    gsap.set(boxesRef.current, (i) => ({
      xPercent: i * 100,
    }));

    // Calculate total width for animation
    const totalBoxes = boxesRef.current.length;

    // Continuous horizontal loop timeline
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(boxesRef.current, {
      xPercent: `-=${100 * totalBoxes / 2}`,
      duration: totalBoxes * 2, // adjust speed (higher number = slower)
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % (100 * totalBoxes / 2)),
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-[80px]">TECH STACKS</h1>
        <div
      ref={wrapperRef}
      className="wrapper flex items-center overflow-hidden w-4/5 h-64 relative mx-auto"
    >
      {skills.map((skill, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          className="box flex-shrink-0 h-4/5 w-1/5 min-w-[150px] p-1"
        >
          <div className="flex items-center justify-center w-full h-full text-2xl font-bold cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text border-3 border-transparent rounded-lg">
            <p>{skill}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
