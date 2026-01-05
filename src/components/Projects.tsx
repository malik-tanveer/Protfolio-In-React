import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Code, Github } from "lucide-react"; 

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Apartment Management System",
    description:
      "A complete apartment management platform for handling tenants, rent records, and utility tracking. Features include role-based workflow, structured data handling, and a clean, intuitive dashboard experience.",
    link: "https://website-apartment-project.netlify.app/",
    github: "https://github.com/malik-tanveer/Apartment-Website",
  },
  {
    title: "GNews Blog App",
    description:
      "A modern news and blog platform displaying live headlines with category-based filtering. Built with React and GNews API, focusing on fast rendering, clean UI, and smooth browsing experience.",
    link: "https://blog-app-100-project.vercel.app/",
    github: "https://github.com/malik-tanveer/Blog-App",
  },
  {
    title: "Mini LMS Platform",
    description:
      "A lightweight LMS designed for learning content and playlists. Includes structured lesson organization, modular components, and a user-friendly learning interface.",
    link: "#",
    github: "https://github.com/malik-tanveer/MERN_Stack_Project",
  },
  {
    title: "Movie App",
    description:
      "A sleek movie discovery app with trending, popular, and search functionality. Built with modern UI patterns, optimized API handling, and responsive design for a smooth user experience.",
    link: "https://movie-six-sand.vercel.app/",
    github: "https://github.com/malik-tanveer/Movie",
  },
  {
    title: "Web-Ramdan",
    description:
      "A Ramadan companion web app featuring prayer time tracking, daily reminders, and Islamic learning content — designed to support users with a meaningful daily workflow experience.",
    link: "https://web-ramdan.vercel.app/",
    github: "https://github.com/malik-tanveer/Web-Ramdan",
  },
  {
    title: "Micro-Learning Quiz Platform",
    description:
      "An interactive quiz platform that helps learners study through short, bite-sized quizzes. Includes progress-driven workflow, Firebase authentication, and real-time database support.",
    link: "https://micro-quiz-8c7fd.web.app",
    github: "https://github.com/malik-tanveer/Micro-Learning"
  },
  {
    title: "Expense Tracker Dashboard",
    description:
      "A finance tracking dashboard for managing daily expenses with charts and transaction insights. Focused on clean UX, real-time updates, and structured financial visualization.",
    link: "https://expense-tracker-5c.web.app/",
    github: "https://github.com/malik-tanveer/Expense-tracker-app"
  },
  {
    title: "Freelance Project Manager",
    description:
      "A project management tool for freelancers to organize clients, tasks, and deliverables. Designed with productivity-focused UI, modular components, and scalable Firebase backend.",
    link: "https://freelance-project-manage-c1.firebaseapp.com/",
    github: "https://github.com/malik-tanveer/Freelance_Project_Manager"
  },
  {
    title: "Event Planner App",
    description:
      "An event planning and scheduling web app for creating, organizing, and managing events efficiently. Includes real-time updates, structured event workflows, and modern UI design.",
    link: "https://event-spark-80.lovable.app/",
    github: "https://github.com/malik-tanveer/event-spark-80"
  }
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
