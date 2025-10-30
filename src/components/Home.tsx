import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
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
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-16 py-32 sm:py-40 bg-gradient-to-b from-[#020617] via-[#0b0f17] to-[#001a1a] overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/10 via-transparent to-[#7fff00]/10 blur-3xl"></div>

      {/* Left Side - Text */}
      <div
        className="relative z-10 w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        data-aos="fade-right"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 leading-tight drop-shadow-[0_0_15px_rgba(0,255,200,0.3)]">
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

        <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
          Passionate about building high-performance web apps with modern
          technologies — crafting interactive UIs, designing scalable backends.
          <br />
          <span className="text-cyan-400 font-semibold">React</span>,{" "}
          <span className="text-green-400 font-semibold">Node.js</span>, and{" "}
          <span className="text-pink-400 font-semibold">MongoDB</span> are my playground.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center lg:justify-start w-full sm:w-auto">
          <button
            onClick={handleDownload}
            className="px-6 py-3 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-[#00b4d8] to-[#7fff00] rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(127,255,0,0.5)] transition-transform duration-300"
            data-aos="zoom-in"
          >
            Download Resume
          </button>

          <a
            href="#contact"
            className="px-6 py-3 text-sm sm:text-base font-semibold text-white border-2 border-[#00b4d8] rounded-lg hover:bg-[#00b4d8]/30 hover:text-[#7fff00] transition-all duration-300 text-center"
            data-aos="zoom-in"
          >
            Let's Collaborate
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="relative z-10 mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-1/2"
        data-aos="fade-left"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#00b4d8]/40 
                  transform rotate-3 hover:scale-105 hover:rotate-0 transition-all duration-500">
          <img
            src="unnamed.jpg"
            alt="Malik Tanveer - Full Stack Developer"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      </div>

    </section>
  );
}

export default Home;
