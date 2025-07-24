import React, { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineContacts } from "react-icons/md";

const ContactWhatsapp = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [positionAbove, setPositionAbove] = useState(false);
  const [hideText, setHideText] = useState(false);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const hideTextTimer = useRef(null); // Store the timer ID

  // Start or reset the hide timer — only for small/medium screens
  const startHideTimer = () => {
    clearTimeout(hideTextTimer.current);

    if (window.innerWidth < 1024) {
      hideTextTimer.current = setTimeout(() => setHideText(true), 10000);
    } else {
      setHideText(false); // Always show text on large screens
    }
  };

  const handleContact = () => {
    setShowContactOptions((prev) => !prev);

    // Show text again and restart hide timer if needed
    setHideText(false);
    startHideTimer();
  };

  const handleCall = () => {
    window.location.href = "tel:9216399808";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I would like to connect with you.");
    window.open(`https://wa.me/919216399808?text=${message}`, "_blank");
  };

  // Initial hide timer on component mount
  useEffect(() => {
    startHideTimer();
    return () => clearTimeout(hideTextTimer.current);
  }, []);

  // Calculate position (above/below)
  useEffect(() => {
    if (showContactOptions && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = 120;
      setPositionAbove(spaceBelow < dropdownHeight);
    }
  }, [showContactOptions]);

  // Close dropdown when clicking outside
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

    if (showContactOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showContactOptions]);

  return (
    <div className="fixed bottom-6 right-6 inline-block z-50">
      <button
        ref={buttonRef}
        onClick={handleContact}
        className="bg-green-600 text-white cursor-pointer !px-4 !py-2 rounded-full hover:bg-green-700 flex items-center justify-center gap-2"
      >
        <MdOutlineContacts />
        {!hideText && <span>Contact Us</span>}
      </button>

      {showContactOptions && (
        <div
          ref={dropdownRef}
          className={`absolute ${
            positionAbove ? "bottom-full !mb-2 right-1" : "top-full !mt-2"
          } bg-white border rounded shadow !p-4 w-56 z-50 space-y-2`}
        >
          <button
            onClick={handleCall}
            className="block w-full flex justify-center gap-2 items-center !px-2 !py-1 hover:bg-gray-100"
          >
            📞 Make a Call
          </button>
          <button
            onClick={handleWhatsApp}
            className="block w-full flex justify-center gap-2 items-center !px-2 !py-1 hover:bg-gray-100"
          >
            <IoLogoWhatsapp className="text-green-600" />
            Chat on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactWhatsapp;
