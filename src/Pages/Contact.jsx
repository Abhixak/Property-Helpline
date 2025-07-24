import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/Enquire";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="!px-6">
        <h2 className="text-2xl bg-gray-100 !p-6 rounded-t-xl text-red-800 font-semibold">
          CONTACT
        </h2>
      </div>

      <div className="!px-6 !py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center justify-evenly">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.43837756576!2d76.74534417527643!3d30.677939688279174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec0f88a2d025%3A0x7888af2f001aa06!2sPinnacle%20Group!5e0!3m2!1sen!2sin!4v1753339823381!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-[70%] rounded-xl shadow-md"
        ></iframe>

        <EnquiryForm />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
