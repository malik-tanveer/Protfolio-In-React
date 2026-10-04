import {
  Github,
  Linkedin,
  Send,
  Mail,
  ArrowRight
} from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { name: "Let’s Build", id: "LetsBuild" },
  { label: "Hire Me", href: "#whyhireme" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Full Stack Web Development",
  "Modern React Applications",
  "Backend API Development",
  "Responsive UI Design",
  "AI & ML Solutions",
  "Python & Data Science"
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20">

      <div className="h-[2px] w-full bg-[#001f5c]" />

      <div className="backdrop-blur-md bg-white/40 border-t border-[#001f5c]/10">

        <div className="max-w-[1100px] mx-auto px-5 py-14">


          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-14 text-center sm:text-left">
            <div>
              <h3 className="text-[#0a0f2c] font-bold text-[18px] mb-1">
                Let’s build something great
              </h3>
              <p className="text-[#0a0f2c]/50 text-[13px]">
                Have a project or idea? Let’s turn it into reality.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold bg-[#0a0f2c] text-white hover:bg-[#001f5c] hover:-translate-y-0.5 transition-all duration-200"
            >
              Let’s Work Together <ArrowRight size={14} />
            </a>
          </div>

       
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

       
            <div className="max-w-[300px] mx-auto sm:mx-0 text-center sm:text-left">
              <img src="/logo2.png" alt="logo" className="h-14 mb-5 mx-auto sm:mx-0" />

              <p className="text-[#0a0f2c]/60 text-[13.5px] leading-relaxed mb-6">
                I build modern, fast, and scalable web applications with clean UI,
                smooth user experience, and real-world performance in mind.
              </p>

            
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-[#001f5c]/70 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for freelance & collaborations
              </div>

              
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {[
                  { icon: <Github size={16} />, link: "https://github.com/malik-tanveer" },
                  { icon: <Linkedin size={16} />, link: "http://linkedin.com/in/malik-tanveer-8bbaa13b2/" },
                  { icon: <Send size={16} />, link: "https://t.me" },
                  { icon: <Mail size={16} />, link: "mailto:mtanveerdev.33@gmail.com" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    className="p-2.5 rounded-lg border border-[#001f5c]/10 text-[#001f5c]/60 hover:bg-[#001f5c] hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          
            <div className="text-center sm:text-left">
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#0a0f2c]/40 mb-6">
                Navigation
              </h4>

              <div className="grid grid-cols-2 gap-y-3 gap-x-6 max-w-[280px] mx-auto sm:mx-0">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[13.5px] text-[#0a0f2c]/60 hover:text-[#001f5c] transition hover:translate-x-1"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

        
            <div className="text-center sm:text-left">
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#0a0f2c]/40 mb-6">
                Services
              </h4>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
                {SERVICES.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-[#001f5c]/5 text-[#0a0f2c]/60 border border-[#001f5c]/10 hover:bg-[#001f5c] hover:text-white transition-all duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

     
          <div className="h-px bg-[#001f5c]/10 my-6" />

        
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-[#0a0f2c]/40 text-center sm:text-left">
            <p>© {year} tanveer.dev All rights reserved</p>
            <p>Designed & Developed by Tanveer</p>
          </div>

        </div>
      </div>
    </footer>
  );
}