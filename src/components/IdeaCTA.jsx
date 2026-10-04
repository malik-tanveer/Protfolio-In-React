import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function IdeaCTA() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full px-5 py-20 flex justify-center items-center"
    >
      <div className="relative w-full max-w-[900px] rounded-3xl p-10 text-center overflow-hidden">

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">

          <h2 className="cta-item text-[#0a0f2c] font-black leading-tight"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              letterSpacing: "-.03em"
            }}
          >
            Got an idea worth building? <br />
            <span className="text-[#001f5c]">
              Let’s turn it into something real.
            </span>
          </h2>

          <p className="cta-item text-[#0a0f2c]/55 max-w-[500px] text-[14px] leading-relaxed">
            I help turn ideas into fast, scalable, and real-world web applications.
            From planning to deployment everything handled.
          </p>

          <a
            href="#contact"
            className="cta-item inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[14px] font-semibold text-white bg-gradient-to-r from-[#0a0f2c] to-[#001f5c] hover:scale-105 transition-all duration-300 shadow-lg no-underline"
          >
            Start a Project <ArrowRight size={16} />
          </a>

        </div>
      </div>
    </section>
  );
}