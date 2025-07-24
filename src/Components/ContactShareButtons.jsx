import React, { useState } from "react";
import { HiShare } from "react-icons/hi";
import { IoMdContacts } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ContactShareButtons = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const navigate = useNavigate();

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
    setShowContactOptions(true);
  };

  const handleEmail = () => {
    navigate("/contact");
  };

  const handleCall = () => {
    window.location.href = "tel:+919216399808";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I would like to connect with you.");
    window.open(`https://wa.me/919216399808?text=${message}`, "_blank");
  };

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
          onClick={handleContact}
          className="bg-green-600 text-white cursor-pointer !px-4 !py-2 rounded hover:bg-green-700 flex items-center gap-2"
        >
          <IoMdContacts />
          Contact
        </button>

        {showContactOptions && (
          <div className="absolute top-full !mt-2 bg-white border rounded shadow !p-4 w-56 z-10 space-y-2">
            <button
              onClick={handleCall}
              className="block w-full text-left !px-2 !py-1 hover:bg-gray-100"
            >
              📞 Make a Call
            </button>
            <button
              onClick={handleWhatsApp}
              className="block w-full text-left !px-2 !py-1 hover:bg-gray-100"
            >
              💬 Chat on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactShareButtons;
