import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: "HTML5",       slug: "html5",          color: "#e34f26" },
  { name: "CSS3",        slug: "css3",            color: "#1572b6" },
  { name: "JavaScript",  slug: "javascript",      color: "#f7df1e" },
  { name: "TypeScript",  slug: "typescript",      color: "#3178c6" },
  { name: "React",       slug: "react",           color: "#61dafb" },
  { name: "Next.js",     slug: "nextdotjs",       color: "#000000" },
  { name: "Vue.js",      slug: "vuedotjs",        color: "#4FC08D" },
  { name: "Tailwind",    slug: "tailwindcss",     color: "#06b6d4" },
  { name: "GSAP",        slug: "greensock",       color: "#88ce02" },
  { name: "Three.js",    slug: "threedotjs",      color: "#049ef4" },
  { name: "Node.js",     slug: "nodedotjs",       color: "#339933" },
  { name: "Express.js",  slug: "express",         color: "#404040" },

  // Python & Data Science
  { name: "Python",      slug: "python",           color: "#3776ab" },
  { name: "NumPy",       slug: "numpy",            color: "#013243" },
  { name: "Pandas",      slug: "pandas",           color: "#150458" },
  { name: "Matplotlib",  slug: "matplotlib",       color: "#11557c" },
  { name: "Scikit-learn",slug: "scikitlearn",      color: "#F7931E" },

  { name: "PHP",         slug: "php",              color: "#777bb4" },
  { name: "Java",        slug: "openjdk",          color: "#437291" },
  { name: "MongoDB",     slug: "mongodb",          color: "#47a248" },
  { name: "MySQL",       slug: "mysql",            color: "#4479a1" },
  { name: "Firebase",    slug: "firebase",         color: "#ffca28" },
  { name: "Supabase",    slug: "supabase",         color: "#3ecf8e" },
  { name: "Docker",      slug: "docker",           color: "#2496ed" },
  { name: "Git",         slug: "git",              color: "#f05032" },
  { name: "GitHub",      slug: "github",           color: "#181717" },
];

function SkillsBg() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const W = el.offsetWidth, H = el.offsetHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0, 0);
    el.appendChild(renderer.domElement);
    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, W, H, 0, -1, 1);
    const dots   = [];
    const colors = SKILLS.map(s => s.color);
    for (let i = 0; i < 38; i++) {
      const mesh = new THREE.Mesh(
        new THREE.CircleGeometry(2 + Math.random() * 3, 8),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(colors[i % colors.length]), transparent: true, opacity: 0.13 + Math.random() * 0.1 })
      );
      mesh.position.set(Math.random() * W, Math.random() * H, 0);
      mesh.userData = { vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 };
      scene.add(mesh); dots.push(mesh);
    }
    const ro = new ResizeObserver(() => {
      const w = el.offsetWidth, h = el.offsetHeight;
      renderer.setSize(w, h); camera.right = w; camera.top = h; camera.updateProjectionMatrix();
    });
    ro.observe(el);
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      dots.forEach(d => {
        d.position.x += d.userData.vx; d.position.y += d.userData.vy;
        if (d.position.x < -10 || d.position.x > el.offsetWidth  + 10) d.userData.vx *= -1;
        if (d.position.y < -10 || d.position.y > el.offsetHeight + 10) d.userData.vy *= -1;
      });
      renderer.render(scene, camera);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
  return <div ref={ref} className="absolute inset-0 z-0" />;
}

export default function Skills() {
  const secRef   = useRef(null);
  const pillRef  = useRef(null);
  const titleRef = useRef(null);
  const gridRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = (el, y = 0) => gsap.fromTo(el, { y, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      anim(pillRef.current, -16);
      anim(titleRef.current, 30);

      const cards = gridRef.current?.querySelectorAll(".sk-card");
      if (cards?.length) {
        gsap.fromTo(cards,
          { y: 40, opacity: 0, scale: 0.88 },
          { y: 0, opacity: 1, scale: 1, stagger: { each: 0.04, from: "random" },
            duration: 0.55, ease: "back.out(1.4)",
            scrollTrigger: { trigger: gridRef.current, start: "top 86%", toggleActions: "play none none none" } }
        );
        cards.forEach((card, i) => {
          gsap.to(card, { y: `+=${4 + (i % 3) * 2}`, duration: 1.8 + (i % 5) * 0.4,
            ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.1 });
        });
      }
    }, secRef);
    return () => ctx.revert();
  }, []);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    gsap.to(e.currentTarget, { rotateY: x * 14, rotateX: -y * 14, scale: 1.08, duration: 0.3, ease: "power2.out", transformPerspective: 600 });
  };
  const onLeave = (e) => {
    gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.5, ease: "elastic.out(1,0.5)" });
  };

  return (
    <section ref={secRef} className="relative w-full px-5 py-4 max-w-[1100px] mx-auto">

      <SkillsBg />

      <div className="relative z-10">

        <div className="mb-8">
          <div ref={pillRef} className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
            <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">my toolkit</span>
          </div>
          <h2 ref={titleRef} className="text-[#0a0f2c] font-black leading-none"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", letterSpacing: "-.025em", opacity: 0 }}>
            Skills &amp; Tech
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(82px, 1fr))" }}>
          {SKILLS.map((s) => {
            const hex = s.color.replace("#", "");
            return (
              <div
                key={s.name}
                className="sk-card flex flex-col items-center gap-2 py-4 px-2 rounded-2xl border border-[#001f5c]/7 bg-white/75 cursor-default will-change-transform transition-[border-color,box-shadow] duration-200"
                style={{ "--ic": s.color }}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{ background: `color-mix(in srgb, ${s.color} 10%, transparent)` }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}/${hex}`}
                    alt={s.name}
                    width={26} height={26}
                    loading="lazy"
                    className="object-contain block transition-transform duration-200"
                    onError={(e) => { e.currentTarget.style.opacity = "0.25"; }}
                  />
                </div>
                <span className="text-[9.5px] text-[#0a0f2c]/45 text-center leading-tight transition-colors duration-200">
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .sk-card:hover { border-color: var(--ic) !important; box-shadow: 0 6px 24px color-mix(in srgb, var(--ic) 20%, transparent); }
        .sk-card:hover .w-11 { background: color-mix(in srgb, var(--ic) 18%, transparent) !important; }
        .sk-card:hover img { transform: scale(1.12); }
        .sk-card:hover span { color: rgba(10,15,44,0.75) !important; }
      `}</style>

    </section>
  );
}