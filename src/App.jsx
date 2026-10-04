import { useEffect, useRef, useState, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import Gateway from "./components/Gateway";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import IdeaCTA from "./components/IdeaCTA";
import Hire_me from "./components/Hire_me";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function PortfolioBg({ bgMode }) {
  const ref = useRef(null);
  const modeRef = useRef(bgMode);
  modeRef.current = bgMode;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 9;

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    scene.background = new THREE.Color(0xfafafa);

    const grid = new THREE.Group();
    grid.position.z = -4;
    const HALF = 20, STEP = 2.2;

    for (let v = -HALF; v <= HALF; v += STEP) {
      const op = Math.round(v / STEP) % 4 === 0 ? 0.18 : 0.09;
      grid.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-HALF, v, 0), new THREE.Vector3(HALF, v, 0),
        ]),
        new THREE.LineBasicMaterial({ color: 0x001f5c, transparent: true, opacity: op })
      ));
      grid.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(v, -HALF, 0), new THREE.Vector3(v, HALF, 0),
        ]),
        new THREE.LineBasicMaterial({ color: 0x001f5c, transparent: true, opacity: op })
      ));
    }
    scene.add(grid);

    const mkBlob = (color, op, x, y, z, r = 5.5) => {
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.CircleGeometry(r, 48), mat);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return mesh;
    };
    const lBlob = mkBlob(0x3b82f6, 0.07, -11, 1, -2);
    const rBlob = mkBlob(0x001f5c, 0.09, 11, -1, -2);
    const lInner = mkBlob(0x60a5fa, 0.10, -11, 1, -1.5, 2.2);
    const rInner = mkBlob(0x001f5c, 0.13, 11, -1, -1.5, 2.2);

    const BUBBLE_DATA = [
      { x: -8, y: 3, r: 0.18, c: 0x3b82f6, op: 0.22 },
      { x: -6, y: -2, r: 0.12, c: 0x001f5c, op: 0.28 },
      { x: -9, y: -1, r: 0.22, c: 0x60a5fa, op: 0.18 },
      { x: 7, y: 2, r: 0.15, c: 0x001f5c, op: 0.24 },
      { x: 9, y: -2, r: 0.20, c: 0x3b82f6, op: 0.20 },
      { x: 6, y: 3, r: 0.10, c: 0x001f5c, op: 0.30 },
      { x: -4, y: 4, r: 0.08, c: 0x3b82f6, op: 0.25 },
      { x: 4, y: -3, r: 0.14, c: 0x60a5fa, op: 0.22 },
      { x: -7, y: 1, r: 0.09, c: 0x001f5c, op: 0.20 },
      { x: 8, y: 1, r: 0.11, c: 0x3b82f6, op: 0.18 },
    ];
    const bubbles = BUBBLE_DATA.map(({ x, y, r, c, op }) => {
      const mesh = new THREE.Mesh(
        new THREE.CircleGeometry(r, 24),
        new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: op, depthWrite: false })
      );
      mesh.position.set(x, y, -1);
      scene.add(mesh);
      return { mesh, ox: x, oy: y, spd: 0.3 + Math.random() * 0.5, ph: Math.random() * Math.PI * 2 };
    });

    const COUNT = 120;
    const pPos = new Float32Array(COUNT * 3);
    const pCol = new Float32Array(COUNT * 3);
    const PCOLS = [[0, 31 / 255, 92 / 255], [59 / 255, 130 / 255, 246 / 255], [0.08, 0.08, 0.12]];

    for (let i = 0; i < COUNT; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 36;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      const c = PCOLS[Math.floor(Math.random() * 3)];
      pCol[i * 3] = c[0]; pCol[i * 3 + 1] = c[1]; pCol[i * 3 + 2] = c[2];
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
    const pts = new THREE.Points(pGeo,
      new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.5 })
    );
    scene.add(pts);

    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const BG_COLORS = {
      light: new THREE.Color(0xfafafa),
      warm: new THREE.Color(0xfdf6ee),
      cool: new THREE.Color(0xeef3fd),
      dark: new THREE.Color(0x0d1117),
    };

    let raf;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Smoothly update bg color based on bgMode
      const target = BG_COLORS[modeRef.current] ?? BG_COLORS.light;
      scene.background.lerp(target, 0.04);

      pts.rotation.z = t * 0.012;
      pts.position.x = Math.sin(t * 0.15) * 0.3;
      grid.rotation.z = Math.sin(t * 0.2) * 0.004;

      lBlob.material.opacity = lInner.material.opacity = 0.07 + Math.sin(t * 0.8) * 0.025;
      rBlob.material.opacity = rInner.material.opacity = 0.09 + Math.sin(t * 0.65) * 0.028;
      lBlob.position.y = lInner.position.y = 1 + Math.sin(t * 0.5) * 0.8;
      rBlob.position.y = rInner.position.y = -1 + Math.cos(t * 0.45) * 0.8;

      bubbles.forEach(({ mesh, ox, oy, spd, ph }) => {
        mesh.position.x = ox + Math.sin(t * spd + ph) * 0.4;
        mesh.position.y = oy + Math.cos(t * spd * 0.7 + ph) * 0.3;
      });

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

function Loader({ onDone }) {
  const loaderRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    gsap.timeline()
      .fromTo(loaderRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35 })
      .to(counterRef.current, {
        innerText: 100, duration: 1.4, ease: "power2.inOut", snap: { innerText: 1 },
        onUpdate() {
          counterRef.current.innerText = Math.round(parseFloat(counterRef.current.innerText)) + "%";
        },
      }, "<")
      .fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.4, ease: "power2.inOut" }, "<"
      )
      .fromTo(textRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 }, "-=1")
      .to({}, { duration: 0.25 })
      .to(loaderRef.current, { yPercent: -100, duration: 0.85, ease: "power4.inOut", onComplete: onDone });
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#fafafa]" style={{ opacity: 0 }}>
      <div className="mb-7 text-center">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=JetBrains+Mono:wght@400&display=swap');`}</style>
        <span className="text-[#0a0f2c] font-extrabold tracking-[0.22em] select-none"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,6vw,3rem)" }}>
          MT
        </span>
        <div ref={textRef} style={{ opacity: 0, marginTop: 8 }}>
          <span className="text-[#001f5c]/40 tracking-[0.28em] uppercase text-[10px]"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}>
            loading portfolio
          </span>
        </div>
      </div>
      <div className="w-44 h-px bg-black/10 rounded-full overflow-hidden">
        <div ref={lineRef} className="h-full bg-[#001f5c] rounded-full" style={{ scaleX: 0, transformOrigin: "left" }} />
      </div>
      <span ref={counterRef} className="mt-3 text-[#0a0f2c]/25 text-[11px] tracking-widest"
        style={{ fontFamily: "'JetBrains Mono',monospace" }}>
        0%
      </span>
    </div>
  );
}

function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);
  const navRef = useRef(null);

  const handleLoaderDone = useCallback(() => {
    setLoading(false);
    requestAnimationFrame(() => {
      // Navbar slides down
      gsap.fromTo(navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      // First visible sections stagger in
      gsap.fromTo(
        mainRef.current?.querySelectorAll("section") ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", delay: 0.2 }
      );
    });
  }, []);
  ``
  // ScrollTrigger — each section animates in on scroll
  useEffect(() => {
    if (loading) return;
    const sections = mainRef.current?.querySelectorAll("section") ?? [];
    sections.forEach((sec) => {
      gsap.fromTo(sec,
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sec, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [loading]);


  return (
    <>
      {loading && <Loader onDone={handleLoaderDone} />}

      {!loading && (
        <>
          <PortfolioBg bgMode="light" />
          <div className="relative" style={{ zIndex: 50, }}>
            <Navbar />
          </div>

          <main ref={mainRef} className="relative pt-24 space-y-32 pb-24" style={{ zIndex: 10 }}>
            <section id="about">      <About />      </section>
            <section id="skills">     <Skills />     </section>
            <section id="services">   <Services />   </section>
            <section id="projects">   <Projects />   </section>
            <section id="experience"> <Experience /> </section>
            <section id="whyhireme">  <Hire_me />    </section>
            <section id="Let’sBuild">  <IdeaCTA />    </section>
 
            <section id="contact">    <Contact />    </section>
          </main>

          <div className="relative" style={{ zIndex: 50 }}>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

function ResumeRedirect() {
  useEffect(() => { window.open("/resume.pdf", "_blank"); }, []);
  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gateway />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumeRedirect />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}