import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  name: string;
  details: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  projects: Project[];
  icon: string;
}

const Experience: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const experiences: ExperienceItem[] = [
    {
      company: "Skytech Internship",
      role: "Frontend Developer Intern",
      duration: "Dec 2024 - Feb 2025",
      description:
        "Built 3 real-world projects while interning at Skytech using React, Tailwind CSS, and Bootstrap. Gained experience in UI design and component-based development.",
      projects: [
        {
          name: "SkyMart",
          details:
            "Developed a modern e-commerce UI with cart, filters, and search functionality.",
        },
        {
          name: "Apartment Management System",
          details: "Created a portal for managing tenant and rental information.",
        },
        {
          name: "Skytech Company Website",
          details:
            "Designed and built a responsive website for showcasing the company.",
        },
      ],
      icon: "Skytech.",
    },
    {
      company: "Bootpress Project",
      role: "Frontend Developer",
      duration: "Feb 2025 - Apr 2025",
      description:
        "Led the frontend of an AI-powered platform using React, Firebase Auth, and Tailwind. Integrated AI interaction features and responsive layouts.",
      projects: [
        {
          name: "Bootpress AI Platform",
          details:
            "Built an AI-integrated interface where users can interact with generated content in real-time.",
        },
      ],
      icon: "Bootpress.",
    },
    {
      company: "Personal Projects",
      role: "Full-Stack Developer",
      duration: "May 2025 - July 2025",
      description:
        "Worked independently on full-stack and frontend projects to apply core development skills, solve real-world problems, and enhance UI/UX.",
      projects: [
        {
          name: "LMS - Learning Management System",
          details:
            "Built a full-stack LMS using React, Node.js, MongoDB, and JWT Auth, including roles, courses, and secure routing.",
        },
        {
          name: "Blog App (Frontend)",
          details:
            "A React-based blog UI that fetches data from a public API, featuring dynamic routing, search, and filtering.",
        },
      ],
      icon: "Projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1a] to-[#020617] text-white py-20 px-6 flex flex-col items-center">
      <h1
        data-aos="fade-up"
        className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]"
      >
        Experience
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.slice(0, 2).map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,200,255,0.1)] hover:shadow-[0_0_50px_rgba(0,200,255,0.3)] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-2xl opacity-30"></div>
            <h2 className="text-3xl font-bold text-cyan-400 relative z-10">
              {exp.company}
            </h2>
            <h3 className="text-xl font-semibold text-pink-400 relative z-10">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-400 italic relative z-10">
              {exp.duration}
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed relative z-10">
              {exp.description}
            </p>
            <ul className="mt-4 space-y-3 relative z-10">
              {exp.projects.map((project, projIndex) => (
                <li
                  key={projIndex}
                  className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition duration-300"
                >
                  <span className="font-bold text-cyan-300">
                    {project.name}:
                  </span>{" "}
                  {project.details}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl mt-12 mx-auto">
        <div
          data-aos="fade-up"
          className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,200,255,0.1)] hover:shadow-[0_0_50px_rgba(255,0,255,0.3)] transition-all duration-500"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-2xl opacity-30"></div>
          <h2 className="text-3xl font-bold text-cyan-400 relative z-10">
            {experiences[2].company}
          </h2>
          <h3 className="text-xl font-semibold text-pink-400 relative z-10">
            {experiences[2].role}
          </h3>
          <p className="text-sm text-gray-400 italic relative z-10">
            {experiences[2].duration}
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed relative z-10">
            {experiences[2].description}
          </p>
          <ul className="mt-4 space-y-3 relative z-10">
            {experiences[2].projects.map((project, projIndex) => (
              <li
                key={projIndex}
                className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition duration-300"
              >
                <span className="font-bold text-cyan-300">
                  {project.name}:
                </span>{" "}
                {project.details}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
