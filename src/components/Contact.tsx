import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send("service_yvmnabr", "template_59c1u8i", formData, "KGCAozw0toGIzG0tq")
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#050b17] text-white py-24 px-8 md:px-20 flex flex-col md:flex-row-reverse items-center gap-12 min-h-screen relative overflow-hidden">
      {/* Gradient background with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-800/10 to-pink-900/10 blur-3xl"></div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 z-10 bg-[#0b1221]/80 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-cyan-500/20 w-full max-w-xl space-y-5 border border-cyan-800/30"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Send a Message
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#0a1428] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#0a1428] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#0a1428] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#0a1428] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all h-32 resize-none"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-[1.02] transition-transform duration-200 shadow-md"
        >
          Send Message 
        </button>
      </form>

      {/* Info Section */}
      <div
        className="md:w-1/2 text-center md:text-left z-10"
        data-aos="fade-right"
      >
        <h2 className="text-5xl font-extrabold mb-4">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
          Have a question or want to collaborate? Drop me a message — I’ll reply
          as soon as possible!
        </p>

        {/* Contact Info */}
        <div className="space-y-3">
          <p className="flex justify-center md:justify-start items-center gap-3 text-white">
            <MdEmail className="text-2xl text-cyan-400" />
            <a
              href="mailto:Youloos477@gmail.com"
              className="hover:text-cyan-400 transition-all"
            >
              Youloos477@gmail.com
            </a>
          </p>
          <p className="flex justify-center md:justify-start items-center gap-3 text-white">
            <BiPhone className="text-2xl text-cyan-400" />
            <a
              href="tel:+92357048768"
              className="hover:text-cyan-400 transition-all"
            >
              +92 357048768
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-8 flex-wrap">
          {[
            FaGithub,
            FaLinkedin,
            FaInstagram,
            FaTwitter,
            FaDiscord,
            FaTelegramPlane,
            FaWhatsapp,
          ].map((Icon, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-3xl transition-transform transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
