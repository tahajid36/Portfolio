import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const FrontendTitle = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    const split = new SplitText(element, {
      type: "words",
      wordsClass: "word",
    });

    gsap.fromTo(
      split.words,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "back.out",
        duration: 2,
        repeat: -1,          // infinite loop
        repeatDelay: 1,    // wait before restarting
        yoyo: true,         // restart from beginning
      }
    );
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-24">
      <h1
        ref={textRef}
        className="text-5xl md:text-7xl text-blue-400 font-bold opacity-100"
      >I'm Tahajid Ahmed <br />
        A Front-End Developer
      </h1>
    </div>
  );
};

export default FrontendTitle;
