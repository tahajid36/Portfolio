import { useEffect } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  useEffect(() => {
    const follower = document.querySelector(".mouse-follower");
    if (!follower) return;

    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const move = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="mouse-follower fixed top-0 left-0 -z-10
      w-[260px] h-[260px]
      bg-blue-500/20 blur-[110px] rounded-full
      pointer-events-none"
    />
  );
};

export default MouseFollower;
