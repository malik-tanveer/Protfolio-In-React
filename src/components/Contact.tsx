import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
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
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#0b0f17] text-white py-32 px-8 md:px-20 flex flex-col md:flex-row-reverse items-center gap-12 relative overflow-hidden min-h-screen">

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a1a]/20 via-[#0b0f17]/10 to-[#001a1a]/20 blur-3xl"></div>


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
      </div>
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 z-10 bg-[#0f1624]/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-cyan-500/30 w-full max-w-xl space-y-5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,180,216,0.3)]"
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
          className="w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)] transition-transform duration-300"
        >
          Send Message
        </button>
      </form>


    </div>
  );
};

export default Contact;
