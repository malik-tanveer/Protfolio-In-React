import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Palette,
  Gauge,
  BrainCircuit,
  Users,
Rocket,
Cpu,
ShieldCheck,
  Code2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    icon: TrendingUp,
    text: "Hands-on experience building real-world web applications and solving practical problems."
  },
  {
    icon: ShieldCheck,
    text: "Strong focus on responsive UI, clean UX, accessibility, and modern web standards."
  },
  {
    icon: Rocket,
    text: "Performance-focused development with fast load times, smooth interactions, and scalable solutions."
  },
  {
    icon: Cpu,
    text: "Working with Python, NumPy, Pandas, and exploring AI & Machine Learning for data-driven solutions."
  },
  {
    icon: Users,
    text: "Collaborative and reliable when working on team projects, client requirements, and real-world products."
  },
  {
    icon: ShieldCheck,
    text: "Experienced across the full development process, from frontend interfaces to backend APIs and databases."
  },
];

export default function HireMe() {
  const secRef = useRef(null);
  const imgRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(imgRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: secRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: secRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".hm-pt",
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.5,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
          }
        }
      );

      // subtle float animation
      gsap.to(imgRef.current, {
        y: -6,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });

    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} className="w-full px-5 py-12 md:py-16 max-w-[1100px] mx-auto">

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* ── LEFT CONTENT ── */}
        <div ref={rightRef} className="flex-1 flex flex-col justify-center">

          {/* ✅ Pill FIXED */}
          <div className="inline-flex w-fit items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#001f5c]/15 bg-[#001f5c]/5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
            <span className="text-[10.5px] text-[#001f5c]/60 tracking-[0.2em] uppercase">
              Hire Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[#0a0f2c] font-black leading-tight mb-4"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)" }}>
            Build Smart. <br />
            <span className="text-[#001f5c]">Ship Real Results.</span>
          </h2>

          {/* Description */}
          <p className="text-[#0a0f2c]/55 text-[13.5px] leading-relaxed mb-6 max-w-[480px]">
            I'm <strong>Tanveer</strong>, a developer focused on building modern web
            applications with clean UI, smooth user experience, and scalable architecture.
          </p>

          {/* Points */}
          <div className="flex flex-col gap-3 mb-8">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="hm-pt flex items-start gap-3">
                  <Icon size={15} className="text-[#001f5c] mt-0.5" />
                  <p className="text-[13px] text-[#0a0f2c]/55">{p.text}</p>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-xl bg-[#0a0f2c] text-white hover:bg-[#001f5c] transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        <div
          ref={imgRef}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] mx-auto">
            <img
              src="/unnamed.jpg"
              alt="Tanveer"
              className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              draggable={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
}