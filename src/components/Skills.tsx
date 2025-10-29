import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

/* 🌐 FRONTEND SKILLS */
const frontendSkills = [
  { name: "HTML5", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript (ES6+)", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", percent: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", percent: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", percent: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", percent: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", percent: 90, icon: "tailwindcss.svg" },
  { name: "Bootstrap", percent: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Sass", percent: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Figma", percent: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

/* ⚙️ BACKEND SKILLS */
const backendSkills = [
  { name: "Node.js", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", percent: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", percent: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", percent: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQLite3", percent: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "PHP", percent: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", percent: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Socket.io", percent: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
  { name: "API Development", percent: 70, icon: "https://cdn-icons-png.flaticon.com/512/1605/1605350.png" },
  { name: "Firebase", percent: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "JWT Auth", percent: 70, icon: "https://cdn-icons-png.flaticon.com/512/6398/6398030.png" },
];

/* 🧰 TOOLS & PLATFORM */
const tools = [
  { name: "Git & GitHub", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", percent: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "n8n Automation", percent: 70, icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
  { name: "Postman", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Docker", percent: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", percent: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Netlify", percent: 85, icon: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },
  { name: "Figma", percent: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Firebase Console", percent: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const renderBar = (skill, color) => (
    <div
      key={skill.name}
      className="flex items-center gap-3 mb-4 sm:mb-3 w-full"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-6 h-6 sm:w-5 sm:h-5 object-contain"
      />
      <span className="w-32 sm:w-28 text-sm sm:text-xs font-medium text-gray-200 truncate">
        {skill.name}
      </span>
      <div className="flex-1 h-2 bg-[#1a1f2e] rounded overflow-hidden">
        <motion.div
          className={`h-full rounded ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percent}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );

  return (
    <div
      id="skills"
      className="bg-[#0b0f17] text-white py-24 px-6 sm:px-4 relative overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a1a]/60 via-[#0b0f17] to-[#001a1a]/60 opacity-80"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00] drop-shadow-[0_0_15px_rgba(0,255,200,0.3)]">
          My Skills
        </h1>
        <p className="text-gray-300 mt-3 text-sm sm:text-xs">
          A blend of creativity, logic, and technical expertise.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {/* Frontend */}
        <motion.div
          data-aos="fade-up"
          className="p-6 rounded-2xl bg-[#0f1624]/80 border border-[#00b4d8]/30 
          hover:shadow-[0_0_40px_rgba(127,255,0,0.3)] transition-all duration-500"
        >
          <h2 className="text-2xl sm:text-xl font-bold text-[#7fff00] mb-4 text-center">
            Frontend
          </h2>
          {frontendSkills.map((s) => renderBar(s, "bg-[#00b4d8]"))}
        </motion.div>

        {/* Backend */}
        <motion.div
          data-aos="fade-up"
          className="p-6 rounded-2xl bg-[#0f1624]/80 border border-[#00b4d8]/30 
          hover:shadow-[0_0_40px_rgba(127,255,0,0.3)] transition-all duration-500"
        >
          <h2 className="text-2xl sm:text-xl font-bold text-[#7fff00] mb-4 text-center">
            Backend
          </h2>
          {backendSkills.map((s) => renderBar(s, "bg-[#7fff00]"))}
        </motion.div>

        {/* Tools */}
        <motion.div
          data-aos="fade-up"
          className="p-6 rounded-2xl bg-[#0f1624]/80 border border-[#00b4d8]/30 
          hover:shadow-[0_0_40px_rgba(127,255,0,0.3)] transition-all duration-500"
        >
          <h2 className="text-2xl sm:text-xl font-bold text-[#7fff00] mb-6 text-center">
            Tools & Environment
          </h2>
          {tools.map((s) => renderBar(s, "bg-[#00b4d8]"))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
