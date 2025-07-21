import React from "react";
import Logo from "../../public/logo.png"; // Make sure this path works after build; consider using `/logo.png` if it's in public

const Nav = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 shadow-md z-10 !px-8 !py-4 bg-white">
      <img src={Logo} alt="Logo" className="h-24" />

      <ul className="flex gap-2 text-black text-[1.2em]">
        <li className="hover:text-gray-500 cursor-pointer hover:border-b relative !py-4 !px-2">Home</li>
        <li className="hover:text-gray-500 cursor-pointer hover:border-b relative !py-4 !px-2">About</li>
        <li className="hover:text-gray-500 cursor-pointer hover:border-b relative !py-4 !px-2">Our Projects</li>
        <li className="hover:text-gray-500 cursor-pointer hover:border-b relative !py-4 !px-2">Our Services</li>
        <li className="hover:text-gray-500 cursor-pointer hover:border-b relative !py-4 !px-2">Contact</li>
        <li className="hover:text-gray-500 cursor-pointer hover:border-b relative !py-4 !px-2">SignUp/SignIn</li>
      </ul>
    </div>
  );
};

export default Nav;
