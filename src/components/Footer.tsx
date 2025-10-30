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
  // Icons + Links mapping
  const socialLinks: { icon: React.ElementType; url: string }[] = [
    { icon: FaGithub, url: "https://github.com/malik-tanveer" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/malik-tanveer-342388349" },
    { icon: FaTwitter, url: "https://x.com/malikTanveer321" },
    { icon: FaInstagram, url: "https://www.instagram.com/youloos477" },
    { icon: FaFacebookF, url: "https://www.facebook.com/share/1Ba9h4vMW1/" },
    { icon: FaDiscord, url: "discord.gg/https://discord.gg/trkPVKjY" },
    { icon: FaTelegramPlane, url: "http://t.me/Malikkhanawan" },
    { icon: FaWhatsapp, url: "https://wa.me/92357048768" },
    { icon: FaYoutube, url: "https://www.youtube.com/" },
    { icon: SiLeetcode, url: "https://www.leetcode.com/https://leetcode.com/u/kubuz2edzs" },
    // { icon: FaDev, url: "https://dev.to/" },
    { icon: SiGmail, url: "mailto:Youloos477@gmail.com" },
  ];

  return (
    <footer className="relative bg-[#0b0f17] text-gray-300 py-14 border-t border-cyan-700/20 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-800/10 to-pink-900/20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center space-y-5 px-6 text-center">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          {socialLinks.map(({ icon: Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Name / Tagline */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Malik Tanveer — Full Stack (MERN) Developer
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Building Modern Web Experiences with Passion
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
