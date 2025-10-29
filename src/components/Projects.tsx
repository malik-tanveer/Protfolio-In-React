import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  click: string;
}

const projects: ProjectItem[] = [
  {
    title: "AI Web Application",
    description:
      "Bootpress is a Web app built using React.js, Tailwind CSS, and Bootstrap, with Firebase Authentication for secure Google sign-in. It combines modern AI technologies with access control.",
    imageUrl: "AI.jpg",
    altText: "AI Web Application",
    click: "https://bootpress-ai.vercel.app/",
  },
  {
    title: "E-Commerce Platform - SkyMart",
    description:
      "An e-commerce platform built with React, Tailwind CSS, and Bootstrap. It allows users to browse products, add to cart, and favorite items.",
    imageUrl: "skymart.png",
    altText: "E-Commerce Platform",
    click: "https://skytechmart.netlify.app/",
  },
  {
    title: "Apartment Management System",
    description:
      "A React-based system to manage apartments, tenants, and expenses with responsive UI and clean layout.",
    imageUrl: "apartment.jpg",
    altText: "Apartment Management System",
    click: "https://website-apartment-project.netlify.app/",
  },
  {
    title: "Data Converter Table",
    description:
      "React app where users can fill a form and view it in a live-updating table. Demonstrates state management & CRUD basics.",
    imageUrl: "D_Convertpng.png",
    altText: "Form to Table App",
    click: "https://firestore-crud-ts.web.app/",
  },
  {
    title: "GNews Blog App",
    description:
      "A blog-style React app that fetches live headlines using the GNews API. Clean, fast, and responsive UI.",
    imageUrl: "GNews.png",
    altText: "GNews Blog",
    click: "https://blog-app-100-project.vercel.app/",
  },
  {
    title: "Mini LMS (Learning Platform)",
    description:
      "A simple LMS built with React to list and organize YouTube learning courses in one place.",
    imageUrl: "LMS.png",
    altText: "Mini LMS",
    click: "https://protfolio-personal.vercel.app/",
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div
      id="projects"
      className="relative py-20 px-6 bg-[#0b0f17] text-white overflow-hidden"
    >
      {/* Background gradient (same theme as Home) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a1a]/60 via-[#0b0f17] to-[#001a1a]/60 opacity-80"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00]">
          My Projects
        </h1>
        <p className="text-gray-400 mt-3">
          Explore some of my best work built using modern technologies.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-2">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="group bg-[#0d141f]/80 backdrop-blur-xl border border-[#00b4d8]/20 rounded-2xl overflow-hidden hover:scale-[1.03] hover:border-[#7fff00]/40 transition-all duration-500"
          >
            <a href={project.click} target="_blank" rel="noopener noreferrer">
              {/* Image Section */}
              <div className="overflow-hidden w-full h-52 sm:h-56 md:h-60">
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00b4d8] to-[#7fff00] opacity-80"></div>
    </div>
  );
};

export default Projects;
