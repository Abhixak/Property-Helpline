import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Our Projects",
    "Contact",
  ];

  return (
    <nav className="sticky bg-[#FAF9F6] top-0 z-20 !px-6 !py-4">
      <div className="flex bg-white !px-6 !py-4 md:!py-2 rounded-xl items-center justify-between">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-16 sm:h-20 lg:h-26" />

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4 text-blue-900 text-[1.2em] font-medium">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="hover:text-[#A78E75] cursor-pointer !px-3 !py-2 transition"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Animated Hamburger Icon */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 180, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1.2, opacity: 1 }}
                  exit={{ rotate: -180, scale: 0.5, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <X size={30} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1.2, opacity: 1 }}
                  exit={{ rotate: 180, scale: 0.5, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Menu size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden !mt-2 w-50 !p-4 flex flex-col rounded-xl text-blue-900 gap-4 text-lg font-medium absolute right-10 bg-white items-center shadow-lg"
          >
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer border-b w-full text-center !pb-2"
              >
                {link}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
