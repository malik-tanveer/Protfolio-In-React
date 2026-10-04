import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import * as THREE from "three";

const RESUME_URL = "/resume.pdf";

function useTyping(text, delay = 1.2) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        setOut(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, 52);
      return () => clearInterval(iv);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [text, delay]);
  return out;
}

function ThreeScene() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 9;

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const grid = new THREE.Group();
    grid.position.z = -4;
    const HALF = 20, STEP = 2.2;

    for (let v = -HALF; v <= HALF; v += STEP) {
      const accent = Math.round(v / STEP) % 4 === 0;
      const op = accent ? 0.18 : 0.09;

      // horizontal
      grid.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-HALF, v, 0), new THREE.Vector3(HALF, v, 0)]),
        new THREE.LineBasicMaterial({ color: 0x001f5c, transparent: true, opacity: op })
      ));
      // vertical
      grid.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(v, -HALF, 0), new THREE.Vector3(v, HALF, 0)]),
        new THREE.LineBasicMaterial({ color: 0x001f5c, transparent: true, opacity: op })
      ));
    }
    scene.add(grid);

    const mkBlob = (color, op, x, y, z, r = 5.5) => {
      const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.CircleGeometry(r, 48), m);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return mesh;
    };

    const lBlob = mkBlob(0x3b82f6, 0.07, -11, 1, -2);
    const rBlob = mkBlob(0x001f5c, 0.09, 11, -1, -2);
    const lInner = mkBlob(0x60a5fa, 0.10, -11, 1, -1.5, 2.2);
    const rInner = mkBlob(0x001f5c, 0.13, 11, -1, -1.5, 2.2);

    const COUNT = 120;
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const COLORS = [
      [0, 31 / 255, 92 / 255],       // navy
      [59 / 255, 130 / 255, 246 / 255], // blue
      [0.08, 0.08, 0.12],        // near-black
    ];
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      const c = COLORS[Math.floor(Math.random() * 3)];
      col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.5 }));
    scene.add(pts);

    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    let raf;
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      pts.rotation.z = t * 0.012;
      pts.position.x = Math.sin(t * 0.15) * 0.3;
      grid.rotation.z = Math.sin(t * 0.2) * 0.004;

      lBlob.material.opacity = lInner.material.opacity = 0.07 + Math.sin(t * 0.8) * 0.025;
      rBlob.material.opacity = rInner.material.opacity = 0.09 + Math.sin(t * 0.65) * 0.028;
      lBlob.position.y = lInner.position.y = 1 + Math.sin(t * 0.5) * 0.8;
      rBlob.position.y = rInner.position.y = -1 + Math.cos(t * 0.45) * 0.8;

      camera.position.x += (mx * 0.35 - camera.position.x) * 0.045;
      camera.position.y += (-my * 0.22 - camera.position.y) * 0.045;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }} />;
}

function TiltCard({ children, className, onClick, href }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    gsap.to(ref.current, { rotateY: dx * 12, rotateX: -dy * 12, scale: 1.03, duration: 0.28, ease: "power2.out", transformPerspective: 900 });
  };

  const onLeave = () => gsap.to(ref.current, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: "power3.out" });

  const props = { ref, onMouseMove: onMove, onMouseLeave: onLeave, className, style: { transformStyle: "preserve-3d" } };
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
    : <button onClick={onClick} {...props}>{children}</button>;
}

export default function Gateway() {
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const roleRef = useRef(null);
  const cardsRef = useRef(null);
  const typedRole = useTyping("Full Stack MERN Developer & AI/ML Learner", 1.1);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(wrapRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(tagRef.current, { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.4)
      .fromTo(aboutRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.68)
      .fromTo(nameRef.current, { y: 36, opacity: 0, skewY: 2 }, { y: 0, opacity: 1, skewY: 0, duration: 0.9 }, 0.52)
      .fromTo(roleRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.72)
      .fromTo(cardsRef.current, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.9);
  }, []);

  const goPortfolio = () => gsap.to(wrapRef.current, {
    opacity: 0, y: -30, duration: 0.5, ease: "power3.in",
    onComplete: () => navigate("/portfolio"),
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800;900&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .f-syne { font-family:'Syne',sans-serif; }
        .f-dm   { font-family:'DM Sans',sans-serif; }
        .f-mono { font-family:'JetBrains Mono',monospace; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .card-p:hover { border-color:#001f5c; box-shadow:0 10px 40px rgba(0,31,92,0.12),0 0 0 1px #001f5c; }
        .card-r { border:1.5px solid rgba(255,255,255,0.09); background:rgba(10,15,44,0.90); backdrop-filter:blur(12px); transition:border-color .2s,box-shadow .2s; cursor:pointer; text-decoration:none; }
        .card-r:hover { border-color:rgba(255,255,255,0.3); box-shadow:0 10px 40px rgba(0,0,0,0.3); }
        @media(max-width:560px) {
          .cards { flex-direction:column !important; }
        }
      `}</style>

      {/* Three.js fixed bg */}
      <ThreeScene />

      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#001f5c]" style={{ zIndex: 10 }} />

      <div
        ref={wrapRef}
        className="f-dm relative flex flex-col items-center justify-center min-h-screen w-full px-5 py-20"
        style={{ zIndex: 5, opacity: 0 }}
      >
        <div className="flex flex-col items-center text-center w-full max-w-[600px]">

          {/* Tag */}
          <div ref={tagRef} className="f-mono inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full"
            style={{ opacity: 0, border: "1px solid rgba(0,31,92,0.18)", background: "rgba(255,255,255,0.65)", backdropFilter: "blur(8px)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
            <span className="text-[11px] text-[#001f5c]/65 tracking-[0.22em] uppercase">portfolio {new Date().getFullYear()}</span>
          </div>

          {/* Name */}
          <h1 ref={nameRef} className="f-syne text-[#0a0f2c] font-black leading-[0.93] mb-3 select-none"
            style={{ fontSize: "clamp(2.8rem,9vw,5.2rem)", letterSpacing: "-0.025em", opacity: 0 }}>
            Tanveer
          </h1>
          <p ref={aboutRef} className="f-dm text-[#0a0f2c]/52 text-sm leading-relaxed mb-6 max-w-md">
            A Full-Stack Developer and AI & ML enthusiast building modern, scalable digital solutions — combining React, Next.js, Node.js, Python, and Data Science to create fast web experiences and intelligent applications.

          </p>

          {/* Typing role */}
          <p ref={roleRef} className="f-mono text-[#001f5c]/52 mb-10 cursor"
            style={{ fontSize: "clamp(0.7rem,1.8vw,0.86rem)", letterSpacing: "0.06em", opacity: 0 }}>
            {typedRole}
          </p>

       
          <div ref={cardsRef} className="cards w-full" style={{ opacity: 50, perspective: "1100px" }}>

            {/* Portfolio */}
            <TiltCard
              onClick={goPortfolio}
              className="relative max-w-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left cursor-pointer transition-all duration-500 group hover:-translate-y-2 hover:border-[#001f5c]/20"
            >
              {/* Top Right Arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#001f5c] group-hover:rotate-45">
                <span className="text-[#001f5c] group-hover:text-white text-lg">
                  ↗
                </span>
              </div>

              {/* Icon */}
              <div className="w-8 h-8 rounded-2xl bg-[#001f5c] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>

             
              <span className="inline-block rounded-full bg-[#001f5c]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#001f5c] mb-3">
                Explore
              </span>

              {/* Title */}
              <h3 className="f-syne text-xl font-bold text-[#0a0f2c] mb-2">
                Portfolio
              </h3>

              {/* Description */}
              <p className="f-dm text-sm leading-6 text-[#0a0f2c]/65">
                Explore my projects, technical skills, real-world experience, and the
                products I've designed & developed.
              </p>

              {/* Bottom CTA */}
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-200">
                <span className="text-sm font-semibold text-[#001f5c]">
                  View Portfolio
                </span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#001f5c]/5 to-transparent pointer-events-none" />
            </TiltCard>
          </div>

        </div>

        {/* Footer */}
        <p className="f-mono text-[9.5px] text-[#0a0f2c]/18 tracking-widest mt-10">tanveer.dev © {new Date().getFullYear()}</p>      </div>
    </>
  );
}