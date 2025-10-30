import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f17]/70 backdrop-blur-lg border-b border-cyan-700/20 px-6 py-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="T & S Logo.png"
            alt="Logo"
            className="w-28 h-auto transition-all duration-300 hover:scale-105"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-100 text-3xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={600}
                offset={-70}
                activeClass="text-white"
                className={`transition-all duration-300 cursor-pointer ${
                  activeTab === item.id ? "text-white" : "hover:text-cyan-400"
                }`}
                onSetActive={() => setActiveTab(item.id)}
              >
                {item.name}
              </Link>

              {activeTab === item.id && (
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 h-screen w-64 bg-[#0b0f17]/90 border-r border-cyan-700/20 py-10 px-8 z-40 shadow-2xl backdrop-blur-md"
          >
            <ul className="text-gray-200 text-xl space-y-8">
              {menuItems.map((item) => (
                <li key={item.id} className="relative">
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    activeClass="text-white"
                    className={`block transition-all duration-300 ${
                      activeTab === item.id ? "text-white" : "hover:text-cyan-400"
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    onSetActive={() => setActiveTab(item.id)}
                  >
                    {item.name}
                  </Link>

                  {activeTab === item.id && (
                    <motion.div
                      className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
