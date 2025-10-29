import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tanveer-FullStack-Resume.pdf";
    link.download = "Malik-Tanveer-FullStack-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container py-32 flex flex-col md:flex-row items-center justify-center px-8 bg-[#050b17] relative overflow-hidden">

      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a1a]/60 via-[#050b17] to-[#001a1a]/60 opacity-80"></div>

      {/* Left Side - Text Section */}
      <div className="md:w-1/2 text-center md:text-left z-10" data-aos="fade-right">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 leading-tight drop-shadow-[0_0_15px_rgba(0,255,200,0.3)]">
          Hi, I'm{" "}
          <TypeAnimation
            sequence={[
              "Tanveer ", 1500,
              "a Full Stack Developer", 1500,
              "a MERN Specialist", 1500,
              "a Creative Coder ", 1500,
            ]}
            wrapper="span"
            speed={50}
            className="text-[#7fff00] font-bold"
            repeat={Infinity}
          />
        </h1>

        <p className="mt-5 text-lg text-gray-300 max-w-lg">
          Passionate about building high-performance web apps with modern technologies — from crafting interactive UIs to designing scalable backends.
          <br />
          <span className="text-cyan-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Node.js</span>, and <span className="text-pink-400 font-semibold">MongoDB</span> are my playground.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center md:justify-start">
          <button
            onClick={handleDownload}
            className="px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#00b4d8] to-[#7fff00] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
          >
            Download Resume
          </button>

          <button
            className="px-6 py-3 font-semibold text-white border-2 border-[#00b4d8] rounded-lg hover:bg-[#00b4d8] hover:text-black transition-all duration-300"
            data-aos="zoom-in"
          >
            <a href="#contact">Let's Collaborate</a>
          </button>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative z-10" data-aos="fade-left">
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-[3px] border-[#00b4d8] shadow-[0_0_50px_rgba(0,180,216,0.4)] hover:shadow-[0_0_70px_rgba(127,255,0,0.6)] transition-all duration-500">
          <img
            src="197722550.jfif"
            alt="Malik Tanveer - Full Stack Developer"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Neon Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
}

export default Home;
