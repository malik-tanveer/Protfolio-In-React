import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Swal from "sweetalert2";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ID = "service_cvxfzwg";
const TEMPLATE_ID = "template_905qs9o";
const PUBLIC_KEY = "no9hJ83Dzdi4GLLto";

export default function Contact() {
  const secRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: secRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.12,
          scrollTrigger: { trigger: secRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  const onChange = (e) => setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!fields.name || !fields.email || !fields.message) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields",
        text: "Please fill all inputs",
      });
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: fields.name,
        from_email: fields.email,
        subject: fields.subject,
        message: fields.message,
      }, PUBLIC_KEY);

      setStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });

      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
        text: "Thanks for reaching out. I will get back to you soon.",
        confirmButtonText: "Got it",
        confirmButtonColor: "#001f5c",
        background: "#ffffff",
        color: "#0a0f2c",
        iconColor: "#22c55e",
        showClass: {
          popup: "animate__animated animate__fadeInUp"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown"
        }
      });
    } catch {
      setStatus("error");

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Your message could not be sent. Please try again.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#001f5c",
        background: "#ffffff",
        color: "#0a0f2c",
        iconColor: "#ef4444",
        showClass: {
          popup: "animate__animated animate__fadeInUp"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown"
        }
      });
    }
  };
  return (
    <section ref={secRef} className="w-full px-5 py-8 md:py-12 max-w-[1100px] mx-auto">

  {/* Pill */}
  <div className="inline-flex items-center gap-2 mb-8 md:mb-10 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono">
    <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
    <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">
      get in touch
    </span>
  </div>

  <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

    {/* ── Left ── */}
    <div
      ref={leftRef}
      className="flex flex-col gap-8 w-full lg:max-w-[420px]"
      style={{ opacity: 0 }}
    >

      {/* Heading */}
      <div>
        <h2
          className="text-[#0a0f2c] font-black leading-tight mb-3"
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.8rem,3.5vw,2.7rem)",
          }}
        >
          <span className="text-[#001f5c]">Let’s make it real.</span>
        </h2>

        <p className="text-[#0a0f2c]/48 text-[13.5px] leading-relaxed">
          If you have an idea, a project, or need a developer for your team, feel free to reach out.
        </p>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#001f5c]/6 flex items-center justify-center">
            <Mail size={15} className="text-[#001f5c]" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#0a0f2c]/35 uppercase">
              Email
            </p>
            <a href="mailto:mtanveerdev.33@gmail.com" className="text-[13px]">
              mtanveerdev.33@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#001f5c]/6 flex items-center justify-center">
            <MapPin size={15} className="text-[#001f5c]" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#0a0f2c]/35 uppercase">
              Location
            </p>
            <p className="text-[13px]">Karachi, Pakistan</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex gap-3 pt-2">
          <a href="https://github.com/malik-tanveer" target="_blank"
            className="w-9 h-9 rounded-lg border border-[#001f5c]/10 flex items-center justify-center hover:bg-[#001f5c] hover:text-white">
            <Github size={15} />
          </a>

          <a href="https://www.linkedin.com/in/malik-tanveer-8bbaa13b2" target="_blank"
            className="w-9 h-9 rounded-lg border border-[#001f5c]/10 flex items-center justify-center hover:bg-[#001f5c] hover:text-white">
            <Linkedin size={15} />
          </a>
        </div>

      </div>
    </div>

    {/* ── Form ── */}
    <div ref={formRef} className="w-full" style={{ opacity: 0 }}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-mono text-[#0a0f2c]/40 uppercase">
              Name
            </label>
            <input
              name="name"
              value={fields.name}
              onChange={onChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-[#001f5c]/10"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-mono text-[#0a0f2c]/40 uppercase">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={fields.email}
              onChange={onChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-[#001f5c]/10"
            />
          </div>

        </div>

        {/* Subject */}
            <label className="text-[11px] font-mono text-[#0a0f2c]/40 uppercase">
              Subject
            </label>
        <input
          name="subject"
          value={fields.subject}
          onChange={onChange}
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-xl border border-[#001f5c]/10"
        />

        {/* Message */}
            <label className="text-[11px] font-mono text-[#0a0f2c]/40 uppercase">
              Message
            </label>
        <textarea
          name="message"
          value={fields.message}
          onChange={onChange}
          rows={5}
          placeholder="Message"
          className="w-full px-4 py-3 rounded-xl border border-[#001f5c]/10"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0a0f2c] text-white"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>
  );
}