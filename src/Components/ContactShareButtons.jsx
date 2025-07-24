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
      // Fallback: Copy to clipboard
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

  return (
    <div className="flex gap-4 !my-6">
      <button
        onClick={handleShare}
        className="bg-blue-600 text-center text-white cursor-pointer !px-4 !py-2 rounded hover:bg-blue-700"
      ><HiShare />Share
      </button>

      <div className="relative">
        <button
          onClick={handleContact}
          className="bg-green-600 text-white cursor-pointer !px-4 !py-2 rounded hover:bg-green-700"
        ><IoMdContacts />
          Contact
        </button>

        {showContactOptions && (
          <div className="absolute top-full !mt-2 bg-white border rounded shadow !p-4 w-48 z-10">
            <button
              onClick={handleEmail}
              className="block w-full text-left !px-2 !py-1 hover:bg-gray-100"
            >
              📧 Write an Email
            </button>
            <button
              onClick={handleCall}
              className="block w-full text-left !px-2 !py-1 hover:bg-gray-100"
            >
              📞 Make a Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactShareButtons;
