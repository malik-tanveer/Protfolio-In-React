import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Server, Database, Layers, Paintbrush, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: Monitor,
    title: "Frontend Development",
    sub: "React · Next.js · Vue.js",
    desc: "Fast, responsive, and animated UIs. I build interfaces that look great and feel smooth pixel-perfect across every screen.",
    tags: ["React", "Next.js", "Vue.js", "Tailwind", "GSAP", "Three.js", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    sub: "Node.js · Express · REST",
    desc: "Production-ready backends with clean architecture. REST APIs, JWT auth, real-time features, and everything in between.",
    tags: ["Node.js", "Express.js", "REST API", "JWT", "Socket.io", "Nodemon"],
  },
  {
    icon: Database,
    title: "Database Integration",
    sub: "MongoDB · Supabase · Firebase",
    desc: "Schema design, queries, auth flows, and real-time data. I work with SQL and NoSQL whatever your project needs.",
    tags: ["MongoDB", "Supabase", "Firebase", "MySQL", "SQLite"],
  },
  {
    icon: Layers,
    title: "Full Stack & SaaS",
    sub: "MERN · Full Stack · End-to-End",
    desc: "From idea to live product. Frontend, backend, database, deployment one developer, complete ownership of the stack.",
    tags: ["MERN Stack", "Full Stack", "SaaS Apps", "Ecommerce", "Dashboards"],
  },
  {
    icon: Paintbrush,
    title: "UI/UX & Design",
    sub: "Figma · Design Systems · Animations",
    desc: "Figma to code. Clean design systems, smooth animations, and interfaces users enjoy not just use.",
    tags: ["Figma", "Responsive Design", "GSAP Animations"],
  },
];

function Card({ s, i }) {
  const ref  = useRef(null);
  const Icon = s.icon;

  useEffect(() => {
    gsap.fromTo(ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        delay: (i % 3) * 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none none" } }
    );
  }, []);

  return (
    <div ref={ref}
      className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-white border border-[#001f5c]/8 hover:border-[#001f5c]/18 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-default"
      style={{ opacity: 0 }}
    >

      {/* top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#001f5c]/6 group-hover:bg-[#001f5c] transition-all duration-300 flex-shrink-0">
          <Icon size={21} strokeWidth={1.7} className="text-[#001f5c] group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* title + sub */}
      <div>
        <h3 className="text-[1.02rem] font-bold text-[#0a0f2c] leading-snug tracking-tight mb-1">
          {s.title}
        </h3>
        <p className="text-[11px] text-[#001f5c]/45 font-mono tracking-wide">{s.sub}</p>
      </div>

      {/* desc */}
      <p className="text-[12.5px] text-[#0a0f2c]/48 leading-relaxed flex-1">
        {s.desc}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#001f5c]/6">
        {s.tags.map(t => (
          <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-[#001f5c]/4 text-[#001f5c]/50 border border-[#001f5c]/7 font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const secRef   = useRef(null);
  const pillRef  = useRef(null);
  const titleRef = useRef(null);
  const subRef   = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = (el, y = 0) => gsap.fromTo(el, { y, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      anim(pillRef.current, -16);
      anim(titleRef.current, 28);
      anim(subRef.current, 16);
      anim(stripRef.current, 24);
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} className="w-full px-5 py-8 md:py-12 max-w-[1100px] mx-auto">

  {/* Heading */}
  <div className="mb-10 md:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">

    <div>
      <div
        ref={pillRef}
        className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono"
        style={{ opacity: 0 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
        <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">
          what I do
        </span>
      </div>

      <h2
        ref={titleRef}
        className="text-[#0a0f2c] font-black leading-none"
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(1.9rem,4vw,2.8rem)",
          letterSpacing: "-.025em",
          opacity: 0,
        }}
      >
        Services
      </h2>

      <p
        ref={subRef}
        className="text-[#0a0f2c]/42 text-[13px] mt-2.5 max-w-full sm:max-w-sm"
        style={{ opacity: 0 }}
      >
        From idea to deployed product I handle the full stack.
      </p>
    </div>

    {/* Button */}
    <a
      href="#contact"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold bg-[#0a0f2c] text-white hover:bg-[#001f5c] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 no-underline w-full sm:w-auto"
    >
      Let's Work Together <ArrowRight size={13} />
    </a>
  </div>

  {/* Cards */}
  <div className="flex flex-col gap-5">

    {/* Top Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {SERVICES.map((s, i) => (
        <Card key={s.num} s={s} i={i} />
      ))}
    </div>


  </div>

  {/* Bottom strip */}
  <div
    ref={stripRef}
    className="mt-10 md:mt-12 p-5 md:p-7 rounded-2xl border border-[#001f5c]/8 bg-[#001f5c]/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6"
    style={{ opacity: 0 }}
  >
    <div>
      <p className="text-[#0a0f2c] font-bold text-[0.95rem] md:text-[1rem] mb-1">
        Got a project in mind?
      </p>
      <p className="text-[#0a0f2c]/45 text-[12.5px] md:text-[13px]">
        Available for freelance. Let's build something great.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold bg-[#0a0f2c] text-white hover:bg-[#001f5c] hover:-translate-y-0.5 transition-all duration-200 no-underline w-full sm:w-auto"
      >
        Contact Me
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-medium text-[#001f5c] border border-[#001f5c]/15 hover:bg-[#001f5c]/5 hover:-translate-y-0.5 transition-all duration-200 no-underline w-full sm:w-auto"
      >
        View Resume
      </a>
    </div>
  </div>

</section>
  );
}