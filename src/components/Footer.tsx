import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaDev,
} from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050b17] text-gray-300 py-10 border-t border-cyan-700/30 overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-800/10 to-pink-900/20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center space-y-5 px-6 text-center">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a
            href="https://github.com/malik-tanveer"
            target="_blank"
            className="hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/malik-tanveer-342388349"
            target="_blank"
            className="hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/malikTanveer321"
            target="_blank"
            className="hover:text-sky-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/youloos477"
            target="_blank"
            className="hover:text-pink-400 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1Ba9h4vMW1/"
            target="_blank"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://discord.com/"
            target="_blank"
            className="hover:text-indigo-400 transition-transform transform hover:scale-110"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            className="hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://wa.me/92357048768"
            target="_blank"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            className="hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://dev.to/"
            target="_blank"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaDev />
          </a>
          <a
            href="mailto:Youloos477@gmail.com"
            className="hover:text-rose-400 transition-transform transform hover:scale-110"
          >
            <SiGmail />
          </a>
        </div>

        {/* Name / Tagline */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Malik Tanveer — Full Stack (MERN) Developer
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Building Modern Web Experiences with Passion ⚡
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-3">
          © 2025 All Rights Reserved | Crafted with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
