import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library
import Logo from "../../public/logo.png"; // Adjust if needed

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Our Projects",
    "Our Services",
    "Contact",
    "SignUp/SignIn",
  ];

  return (
    <nav className="sticky top-0 z-20 bg-white !px-8 !py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <img src={Logo} alt="Logo" className="h-26" />

        {/* Right: Desktop Menu */}
        <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-4 text-[#1C1C2D] text-[1.2em] font-medium">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="hover:text-[#A78E75] cursor-pointer hover:border-b border-gray-400 !px-3 !py-2 transition"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Right: Hamburger Icon on Mobile */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden !mt-4 flex flex-col gap-4 text-black text-lg font-medium items-end">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="hover:text-gray-600 cursor-pointer border-b w-full text-center !pb-2"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
