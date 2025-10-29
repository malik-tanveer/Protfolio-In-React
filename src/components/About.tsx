import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="about-container py-32 px-8 bg-[#0b0f17] relative overflow-hidden"
      id="about"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a1a]/60 via-[#0b0f17] to-[#001a1a]/60 opacity-80"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left - Image */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-[3px] border-[#00b4d8] transition-all duration-500">
            <img
              src="197722550.jfif"
              alt="Tanveer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00] mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm <span className="text-[#7fff00] font-semibold">Tanveer</span>, a
            passionate{" "}
            <span className="text-[#00b4d8] font-semibold">
              Full Stack MERN Developer
            </span>{" "}
            who loves turning complex problems into elegant, scalable digital
            solutions. From designing stunning interfaces to building secure,
            high-performance backends — I strive to deliver impactful web
            experiences that connect technology with creativity.
          </p>

          {/* Core Expertise */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00] mb-4">
              Core Expertise
            </h3>
            <p className="text-gray-400 mb-6">
              Building responsive UIs, real-time APIs, authentication systems,
              and RESTful services with modern technologies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React.js",
                "React Native",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "Firebase",
                "PHP",
                "Java",
                "Tailwind CSS",
                "Sass",
                "Bootstrap",
                "Postman",
                "Git & GitHub",
                "Figma",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#001a1a]/60 text-[#7fff00] border border-[#00b4d8]/40 rounded-lg hover:scale-105 transition-all duration-300 text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#7fff00] mb-3">
              Databases
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["MongoDB", "MySQL", "SQLite3"].map((db) => (
                <span
                  key={db}
                  className="px-4 py-1 bg-[#001a1a]/60 text-[#00b4d8] border border-[#7fff00]/40 rounded-lg hover:scale-105 transition-all duration-300 font-semibold"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
