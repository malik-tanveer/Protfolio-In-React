import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Code, Github } from "lucide-react"; 

interface Project {
  title: string;
  description: string;
  image: string; 
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "AI Web Application",
    description: "An AI-powered web app built using React, Tailwind, and Firebase Authentication with smooth UI/UX.",
    image: "AI.jpg",
    link: "https://bootpress-ai.vercel.app/",
    github: "https://github.com/malik-tanveer/AI-Web-App"
  },
  // {
  //   title: "E-Commerce Platform - SkyMart",
  //   description: "A stylish e-commerce platform featuring product browsing, favorites, and cart management.",
  //   image: "skymart.png",
  //   link: "https://skytechmart.netlify.app/",
  //   github: "#"
  // },
  {
    title: "Apartment Management System",
    description: "A complete system to manage tenants, rent, and utilities. Clean UI + intuitive dashboard.",
    image: "apartment.jpg",
    link: "https://website-apartment-project.netlify.app/",
    github: "#"
  },
  {
    title: "Data Converter Table",
    description: "React + Firestore CRUD app converting form data into live dynamic tables.",
    image: "D_Convertpng.png",
    link: "https://firestore-crud-ts.web.app/",
    github: "https://github.com/malik-tanveer/Data_Convert_Table"
  },
  {
    title: "GNews Blog App",
    description: "Live headlines with category filtering powered by GNews API and React.",
    image: "GNews.png",
    link: "https://blog-app-100-project.vercel.app/",
    github: "https://github.com/malik-tanveer/Blog-App"
  },
  {
    title: "Mini LMS Platform",
    description: "A small-scale LMS for YouTube tutorials with organized playlists and clean UI.",
    image: "LMS.png",
    link: "#",
    github: "https://github.com/malik-tanveer/MERN_Stack_Project",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing full-stack skills with animations and responsiveness.",
    image: "portfolio.png",
    link: "https://protfolio-personal.vercel.app/",
    github: "https://github.com/malik-tanveer/Protfolio-In-React",
  },
  {
    title: "Movie App",
    description: "A sleek movie browsing web app showing trending, popular, and search functionality.",
    image: "movie.png",
    link: "movie-six-sand.vercel.app/", // agar koi live demo hai to yaha daal do
    github: "https://github.com/malik-tanveer/Movie",
  },
  {
    title: "CryptoView",
    description: "Track cryptocurrencies live with price charts, trending coins, and market data.",
    image: "crypto.png",
    link: "crypto-view-ruddy.vercel.app", // live demo agar available hai
    github: "https://github.com/malik-tanveer/CryptoView",
  },
  {
    title: "Web-Ramdan",
    description: "A web app for Ramadan with prayer times, daily reminders, and inspirational content.",
    image: "ramdan.png",
    link: "web-ramdan.vercel.app", // live demo agar available hai
    github: "https://github.com/malik-tanveer/Web-Ramdan",
  },
];

const ProjectsGrid: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#0b0f17] to-[#001a1a] text-white py-24 px-6 sm:px-10 flex flex-col items-center">
      
      <h1
        data-aos="fade-up"
        className="text-5xl md:text-6xl font-extrabold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00]"
      >
        My Projects
      </h1>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(127,255,0,0.3)]"
          >
            <div className="absolute -top-6 left-6 bg-[#0b0f17] p-3 rounded-xl shadow-md border border-[#00b4d8]/40">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mt-4">{project.title}</h2>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">{project.description}</p>

            <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-md text-black bg-gradient-to-r from-[#00b4d8] to-[#7fff00] transition duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 border border-transparent hover:border-cyan-500/50 p-1 rounded transition"
                aria-label="View Code"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
