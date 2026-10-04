import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { X, Menu, Github, Linkedin, Mail } from "lucide-react";
import * as THREE from "three";

const LEFT_LINKS = [
  { name: "About",      id: "about"      },
  { name: "Skills",     id: "skills"     },
  { name: "Projects",   id: "projects"   },
  { name: "Experience", id: "experience" },
];
const RIGHT_LINKS = [
  { name: "Services", id: "services"  },
  { name: "Hire Me",  id: "whyhireme" },
  { name: "Let’s Build", id: "LetsBuild" },
  { name: "Contact",  id: "contact"   },
];
const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const SOCIALS = [
  { icon: Github,   href: "https://github.com/malik-tanveer",                    label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/malik-tanveer-8bbaa13b2/", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:mtanveerdev.33@gmail.com",                      label: "Email"    },
];

function NavCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0xffffff, 0);
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 50);
    camera.position.z = 4;
    const resize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      camera.aspect = w / h; camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);
    const COUNT = 90;
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      pos[i*3]   = (Math.random()-0.5)*18;
      pos[i*3+1] = (Math.random()-0.5)*3;
      pos[i*3+2] = (Math.random()-0.5)*2;
      const navy = Math.random() > 0.5;
      col[i*3] = navy ? 0 : 0.07; col[i*3+1] = navy ? 31/255 : 0.07; col[i*3+2] = navy ? 92/255 : 0.07;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.2 }));
    scene.add(pts);
    let raf;
    const tick = () => { raf = requestAnimationFrame(tick); pts.rotation.y += 0.0007; renderer.render(scene, camera); };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); renderer.dispose(); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".nav-pill",
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", delay: 0.1 }
    );
    gsap.fromTo(".nl",
      { y: -8, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  useEffect(() => {
    const sb = sidebarRef.current;
    const ov = overlayRef.current;
    if (!sb || !ov) return;
    if (open) {
      sb.style.display = "flex";
      ov.style.display = "block";
      gsap.fromTo(ov, { opacity: 0 }, { opacity: 1, duration: 0.28 });
      gsap.fromTo(sb, { x: "100%" }, { x: "0%", duration: 0.42, ease: "power3.out" });
      gsap.fromTo(".sl", { x: 20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.05, duration: 0.32, ease: "power3.out", delay: 0.2 });
    } else {
      gsap.to(sb, { x: "100%", duration: 0.35, ease: "power3.in", onComplete: () => { sb.style.display = "none"; } });
      gsap.to(ov, { opacity: 0, duration: 0.22, onComplete: () => { ov.style.display = "none"; } });
    }
  }, [open]);

  const close = () => setOpen(false);
  const onEnter = (e) => gsap.to(e.currentTarget, { y: -2, duration: 0.15 });
  const onLeave = (e) => gsap.to(e.currentTarget, { y:  0, duration: 0.15 });

  return (
    <>
      <style>{`
        .nl::after { content:''; position:absolute; left:0; bottom:-3px; width:0; height:1.5px; background:#001f5c; transition:width .25s ease; }
        .nl:hover::after { width:100%; }
      `}</style>

      {/* ── Navbar ── */}
      <nav className="nav-pill" style={{
        position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
        width: "88%", maxWidth: 1120, zIndex: 9999,
      }}>
        <div style={{
          position: "relative", display: "flex", alignItems: "center",
          height: 68, borderRadius: 999, overflow: "hidden",
          background: "rgba(227,227,227,0.22)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.30)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,31,92,0.10)",
        }}>
          <NavCanvas />

          {/* ── Mobile layout: logo left, burger right ── */}
          {/* Logo — always left on mobile, center on desktop */}
          <div className="flex lg:hidden items-center z-10" style={{ paddingLeft: 40 }}>
            <img src="/logo2.png" alt="MT" 
              style={{ height: 62, width: "auto", maxWidth: 110, objectFit: "contain" }}
              onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "block"; }}
            />
            <span style={{ display: "none", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "#0a0f2c", letterSpacing: "0.15em" }}>MT</span>
          </div>

          {/* Spacer pushes burger to right on mobile */}
          <div className="flex-1 lg:hidden" />

          {/* Burger — mobile only, right side */}
          <button type="button" onClick={() => setOpen(true)}
            className="lg:hidden z-10 flex items-center justify-center w-9 h-9 rounded-lg text-[#0a0f2c]"
            style={{ marginRight: 32, background: "rgba(0,0,0,0.06)", border: "none", cursor: "pointer", flexShrink: 0 }}>
            <Menu size={20} />
          </button>

          {/* ── Desktop layout: left links | center logo | right links ── */}
          {/* Left links */}
          <ul className="hidden lg:flex items-center justify-end gap-6 list-none m-0 p-0 z-10" style={{ flex: 1, paddingRight: 32 }}>
            {LEFT_LINKS.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  className="nl text-[13px] font-semibold text-[#0a0f2c] hover:text-[#001f5c] relative inline-block transition-colors duration-200 tracking-wide no-underline">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Center logo desktop */}
          <div className="hidden lg:flex items-center justify-center z-10" style={{ paddingLeft: 16, paddingRight: 16 }}>
            <img src="/logo2.png" alt="MT"
              style={{ height: 72, width: "auto", maxWidth: 120, objectFit: "contain" }}
              onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
            />
            <div style={{ display: "none", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 12, background: "#0a0f2c" }}>
              <span style={{ color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "0.15em" }}>MT</span>
            </div>
          </div>

          {/* Right links */}
          <ul className="hidden lg:flex items-center justify-start gap-6 list-none m-0 p-0 z-10" style={{ flex: 1, paddingLeft: 32 }}>
            {RIGHT_LINKS.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  className="nl text-[13px] font-semibold text-[#0a0f2c] hover:text-[#001f5c] relative inline-block transition-colors duration-200 tracking-wide no-underline">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Overlay — full screen, no gaps ── */}
      <div ref={overlayRef} onClick={close} style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 10000, background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(2px)", display: "none",
      }} />

      {/* ── Sidebar — full height, no gaps ── */}
      <div ref={sidebarRef}

       style={{
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    zIndex: 10001,
    width: "clamp(240px, 72vw, 280px)",
    display: "none",
    flexDirection: "column",

    /* 🔥 glass bg like footer */
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px) saturate(180%)",

    borderLeft: "1px solid rgba(255,255,255,0.2)",

    /* 🔥 stronger curve from left */
    borderRadius: "32px 0 0 32px",

    boxShadow: "-12px 0 60px rgba(0,0,0,0.18)",
  }}
      >

        {/* Top: logo + close */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <img src="/logo2.png" alt="MT"
            style={{ height: 72, width: "auto", maxWidth: 96, objectFit: "contain" }}
            onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "block"; }}
          />
          <span style={{ display: "none", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: "0.15em" }}>MT</span>

          <button type="button" onClick={close}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.08)", border: "none", cursor: "pointer", color: "#fff" }}>
            <X size={16} />
          </button>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Links — bottom of middle */}
        <div style={{ padding: "0 16px 16px" }}>
          {ALL_LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={close}
              className="sl flex items-center gap-3 no-underline"
              style={{
                padding: "11px 12px", borderRadius: 12, marginBottom: 2,
                fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.75)",
                transition: "background 0.15s, color 0.15s", display: "flex",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
            >
              {/* <span style={{ width: 12, height: 1.5, background: "rgba(255,255,255,0.3)", flexShrink: 0, borderRadius: 2 }} /> */}
              {l.name}
            </a>
          ))}
        </div>

        {/* Social footer */}
        <div style={{ padding: "16px 20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ fontSize: 9.5, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
            Find me on
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0a0f2c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
              >
                <Icon size={15} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}