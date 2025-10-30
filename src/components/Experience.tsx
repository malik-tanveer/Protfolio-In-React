import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Code2, Rocket } from "lucide-react"; // icons

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
  icon: JSX.Element;
}

const Experience: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  const experiences: ExperienceItem[] = [
    {
      company: "Skytech Internship",
      role: "Frontend Developer Intern",
      duration: "Dec 2024 – Feb 2025",
      description:
        "Worked on real-world UI development projects using React, Tailwind, and Bootstrap. Learned teamwork, reusable components, and responsive layouts.",
      projects: [
        {
          name: "SkyMart",
          details:
            "Developed a modern e-commerce UI with cart, filters, and search functionality.",
        },
        {
          name: "Apartment Management System",
          details:
            "Created a portal for managing tenant and rental information efficiently.",
        },
        {
          name: "Skytech Company Website",
          details:
            "Built a responsive landing website showcasing company services.",
        },
      ],
      icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    },
    
    {
  company: "Personal Projects",
  role: "Full Stack Developer",
  duration: "May 2025 – Jul 2025",
  description:
    "Built advanced projects integrating React, Node.js, MongoDB, and Firebase. Focused on learning by solving practical UI/UX and backend challenges.",
  projects: [
    {
      name: "LMS Platform",
      details:
        "Full-stack LMS with authentication, course modules, and dashboard.",
    },
    {
      name: "Blog App",
      details:
        "Dynamic frontend app fetching live API data with search & filters.",
    },
    {
      name: "Expense Tracker App",
      details:
        "Track personal expenses with add/edit/delete functionality and charts for analytics.",
    },
    {
      name: "Micro Learning",
      details:
        "Short, interactive learning modules for quick skill acquisition.",
    },
    {
      name: "Event Management",
      details:
        "Manage events, RSVPs, and schedules with a user-friendly interface.",
    },
    {
      name: "Study Management",
      details:
        "Organize courses, study plans, and track progress efficiently.",
    },
  ],
  icon: <Rocket className="w-8 h-8 text-green-400" />,
}
  ];

  return (
    <div
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#0b0f17] to-[#001a1a] text-white py-24 px-6"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/10 via-transparent to-[#7fff00]/10 blur-3xl"></div>

      {/* Section Title */}
      <div data-aos="fade-up" className="text-center mb-20 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00] drop-shadow-[0_0_10px_rgba(0,180,216,0.5)]">
          Experience
        </h1>
        <p className="text-gray-400 mt-3 text-base sm:text-lg">
          My professional journey and key learning milestones.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Connector Line */}
            <div className="hidden md:block w-1 bg-gradient-to-b from-[#00b4d8] to-[#7fff00] h-60 rounded-full opacity-60"></div>

            {/* Experience Card */}
            <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:w-2/3 w-full shadow-[0_0_25px_rgba(0,180,216,0.2)] hover:shadow-[0_0_40px_rgba(127,255,0,0.3)] transition-all duration-500">
              <div className="absolute -top-6 left-6 bg-[#0b0f17] p-3 rounded-xl shadow-md border border-[#00b4d8]/40">
                {exp.icon}
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 mt-4">
                {exp.company}
              </h2>
              <h3 className="text-lg font-semibold text-[#7fff00] mt-1">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {exp.description}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.projects.map((p, i) => (
                  <li
                    key={i}
                    className="bg-white/10 p-3 rounded-xl border border-white/5 hover:bg-white/20 transition duration-300 text-sm"
                  >
                    <span className="font-semibold text-cyan-300">
                      {p.name}:
                    </span>{" "}
                    {p.details}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
