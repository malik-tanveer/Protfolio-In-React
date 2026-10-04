import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { num: "6+", label: "Projects" },
  { num: "2+", label: "Internships" },
  { num: "1", label: "Years Exp" }
];

const TAGS = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Supabase",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Python",
  "NumPy",
  "Pandas",
"ML"
];


export default function About() {
  const secRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);
  const t1Ref = useRef(null);
  const t2Ref = useRef(null);
  const bioRef = useRef(null);
  const tagsRef = useRef(null);
  const stRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: -8, ease: "none",
        scrollTrigger: { trigger: secRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 },
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(imgRef.current, { x: -50, opacity: 0, scale: 0.96 }, { x: 0, opacity: 1, scale: 1, duration: 1 })
        .fromTo(lineRef.current, { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, duration: 0.8 }, "-=0.6")
        .fromTo(t1Ref.current, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(t2Ref.current, { y: 40, opacity: 0, skewY: 3 }, { y: 0, opacity: 1, skewY: 0, duration: 0.75 }, "-=0.35")
        .fromTo(bioRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(tagsRef.current?.children ?? [], { y: 14, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, stagger: 0.05, duration: 0.38, ease: "back.out(1.6)" }, "-=0.35")
        .fromTo(stRef.current?.children ?? [], { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.45 }, "-=0.3")
        .fromTo(btnRef.current?.children ?? [], { y: 14, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.45, ease: "back.out(1.4)" }, "-=0.25");

      gsap.to(imgRef.current, { y: -6, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2 });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
    .ab-corner { position:absolute; width:26px; height:26px; border-color:#001f5c; border-style:solid; pointer-events:none; }
    .ab-corner-tl { top:-6px; left:-6px; border-width:2px 0 0 2px; border-radius:4px 0 0 0; }
    .ab-corner-br { bottom:-6px; right:-6px; border-width:0 2px 2px 0; border-radius:0 0 4px 0; }
    @keyframes abpulse { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4)} 50%{box-shadow:0 0 0 5px rgba(34,197,94,0)} }
  `}</style>

      <section ref={secRef} className="w-full px-5 py-10 md:py-14 max-w-[1100px] mx-auto">

        <div
          ref={t1Ref}
          className="inline-flex items-center gap-2 mb-20 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
          <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">
            About Me
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12">

          <div
  ref={imgRef}
  className="relative flex-shrink-0 mx-auto lg:mx-0 w-full max-w-[320px] lg:max-w-[340px]"
  style={{ opacity: 0 }}
>
  <div className="ab-corner ab-corner-tl" />
  <div className="ab-corner ab-corner-br" />

  <img
    src="/unnamed.jpg"
    alt="Tanveer"
    className="
      w-full 
      object-cover 
      shadow-xl 
      rounded-xl
      h-[260px] 
      sm:h-[300px] 
      md:h-[340px] 
      lg:h-[420px]
    "
  />

  <div
    className="absolute left-3 bottom-3 flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px]"
    style={{ background: "rgba(255,255,255,0.90)", border: "1px solid rgba(34,197,94,0.22)" }}
  >
    <span
      className="w-1.5 h-1.5 rounded-full bg-green-500"
      style={{ animation: "abpulse 2s ease-in-out infinite" }}
    />
    <span className="text-green-700 tracking-[0.15em] uppercase">
      Available
    </span>
  </div>
</div>

          <div
            ref={lineRef}
            className="hidden lg:block flex-shrink-0 self-stretch"
            style={{ width: 1, background: "rgba(0,31,92,0.08)", scaleY: 0 }}
          />

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">

            <h2
              ref={t2Ref}
              className="text-[#0a0f2c] font-black leading-[0.92] mb-5"
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(2rem,4.5vw,3.4rem)",
                letterSpacing: "-0.022em",
                opacity: 0,
              }}
            >
              Tanveer
            </h2>

            {/* Bio */}
            <p
              ref={bioRef}
              className="leading-relaxed mb-6 text-[#0a0f2c]/52 max-w-full lg:max-w-[460px]"
              style={{ fontSize: "clamp(0.85rem,1.4vw,0.95rem)", opacity: 0 }}
            >
              I’m Tanveer, a Full-Stack Developer and AI & ML enthusiast passionate about building modern, responsive, and real-world digital solutions. I work with React, Next.js, Node.js, Python, NumPy, Pandas, MongoDB, and Supabase. From full-stack web development to AI, machine learning, and automation, I build practical solutions that turn ideas into impactful products.

            </p>


            <div ref={tagsRef} className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7">
              {TAGS.map(t => (
                <span
                  key={t}
                  className="text-[10.5px] px-3 py-1 rounded-full border border-[#001f5c]/10 bg-[#001f5c]/3 text-[#0a0f2c]/48 hover:bg-[#001f5c]/7 hover:border-[#001f5c]/22 hover:text-[#001f5c] transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div ref={stRef} className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div>
                    <div className="font-bold text-[#0a0f2c]" style={{ fontSize: "1.25rem" }}>
                      {s.num}
                    </div>
                    <div className="text-[9px] uppercase mt-1 text-[#0a0f2c]/32 font-mono">
                      {s.label}
                    </div>
                  </div>

                  {i < STATS.length - 1 && (
                    <div className="hidden lg:block w-px h-8 bg-[#001f5c]/9" />
                  )}
                </div>
              ))}
            </div>

   
            <div ref={btnRef} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold bg-[#0a0f2c] text-white hover:bg-[#001f5c]"
              >
                Hire Me <ArrowRight size={13} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}