import { useEffect } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import creativia from '../assets/Creativia.png'
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Creativia Contest Platform",
    description:
      "Creativia A modern platform to create, discover, and participate in creative contests. Connect with designers, writers, and creators worldwide, and showcase your talent effortlessly.",
    image:
      "https://i.ibb.co.com/KcyYvQZW/Creativia.png",
    stack: ["React", "React Hook Form", "MongoDB", "Node.js", "gsap", "Express.js"],
    github: 'https://github.com/tahajid36/Creativia-client.git',
    livelink: 'https://creativia-web-54e57.web.app/'
  },
  {
    title: "Krishilink Agri Marketplace",
    description:
      "KrishiLink BD is a modern website where farmers,consumers,dealers can connect to each other in one place.",
    image:
      'https://i.ibb.co.com/qLbdg974/515905789-cc27e748-346b-4eb5-b30e-b44a14f519ce.png',
    stack: ["Node.js", "MongoDB", "Express.js", "React", "Framer"],
    livelink: 'https://krishilink-c85d4.web.app/',
    github: 'https://github.com/tahajid36/KrishiLink-Web.git'
    
  },
  {
    title: "GameVerse Game Library",
    description:
      "GameVerse is a Modern Library where you can get all your desired games in one place",
    image:
      "https://i.ibb.co.com/0VY2Bhh8/image.png",
    stack: ["React", "Firebase", "Swiper.js", 'Framer', 'Tailwind'],
    livelink: 'https://gameverse98.netlify.app/',
    github: 'https://github.com/tahajid36/GameVerse-Web.git'
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    gsap.from(".header-anim", {
      scrollTrigger: {
        trigger: ".header-anim",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    const cards = gsap.utils.toArray(".project-card");
    gsap.set(cards, { y: 50, opacity: 0 });

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        }),
    });

    gsap.to(".footer-anim", {
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "bottom 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
     <div className="mb-12">
     <h2 className="text-3xl text-center md:text-5xl font-bold mb-4">
          Featured Work
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto">
          A selection of projects focused on real-world problem solving,
          performance, and scalability.
        </p>
     </div>
      

      {/* Grid */}
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article className="project-card group bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl flex flex-col">
          <div className="aspect-video overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>
        
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
        
            <p className="text-sm text-text-muted mb-4">{project.description}</p>
        
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded-full bg-blue-500 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
        
            <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
              <Link to={project.livelink} className="flex-1 btn h-10 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition">
                Live Demo
              </Link>
              <Link to={project.github} className="flex-1 btn h-10 rounded-lg border border-gray-200 dark:border-gray-400 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Code
              </Link>
            </div>
          </div>
        </article>
        ))}
      </div>

      {/* Footer */}
      <div className="footer-anim opacity-0 translate-y-4 flex justify-center mt-16">
        <Link to={'https://github.com/tahajid36'} className="px-6 btn py-3 rounded-xl font-semibold bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          View more on GitHub
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
