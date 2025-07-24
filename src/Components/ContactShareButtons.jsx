import React, { useState, useRef, useEffect } from "react";
import { HiShare } from "react-icons/hi";
import { IoLogoWhatsapp, IoMdContacts } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import clsx from "clsx"; // optional: for cleaner class management

const ContactShareButtons = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch (err) {
        alert("Failed to copy link.");
      }
    }
  };

  const handleContact = () => {
    setShowContactOptions((prev) => !prev);
  };

  const handleCall = () => {
    window.location.href = "tel:+919216399808";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I would like to connect with you.");
    window.open(`https://wa.me/919216399808?text=${message}`, "_blank");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowContactOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-4 !my-6">
      <button
        onClick={handleShare}
        className="bg-blue-600 text-center text-white cursor-pointer !px-4 !py-2 rounded hover:bg-blue-700 flex items-center gap-2"
      >
        <HiShare />
        Share
      </button>

      <div className="relative">
        <button
          ref={buttonRef}
          onClick={handleContact}
          className="bg-green-600 text-white cursor-pointer !px-4 !py-2 rounded hover:bg-green-700 flex items-center gap-2"
        >
          <IoMdContacts />
          Contact
        </button>

        {/* Smooth dropdown */}
        <div
          ref={dropdownRef}
          className={clsx(
            "absolute top-full !mt-2 bg-white border rounded shadow w-56 z-10 overflow-hidden transition-all duration-300 ease-in-out",
            {
              "opacity-100 translate-y-0 visible p-4 space-y-2": showContactOptions,
              "opacity-0 -translate-y-2 invisible h-0 p-0": !showContactOptions,
            }
          )}
        >
          <button
            onClick={handleCall}
            className="block w-full text-left flex justify-center items-center gap-4 !px-2 !py-1 hover:bg-gray-100"
          >
            📞 Make a Call
          </button>
          <button
            onClick={handleWhatsApp}
            className="block w-full text-left flex justify-center items-center gap-4 !px-2 !py-1 hover:bg-gray-100"
          >
            <IoLogoWhatsapp className="text-green-600" /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactShareButtons;
