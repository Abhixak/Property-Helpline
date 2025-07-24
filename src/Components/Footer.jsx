import propertyLogo from "/propertyLogo.png";

const Footer = () => {
  return (
    <div className="!px-6 !py-6">
      <div className="bg-white flex flex-col sm:flex-row items-center justify-evenly sm:gap-30 w-full rounded-xl shadow-inner !pl-6">
        <img
          src={propertyLogo}
          alt="Property Helpline"
          className="h-26"
        />
        <div className="text-center !py-6">
          <h3 className="text-lg font-semibold text-red-800 ">CONTACT US</h3>
          <div className="text-sm">
            <p>
              <strong className="text-red-800">Email:</strong>{" "}
              <a href="mailto:info@pinnacleinfra.co.in" className="text-blue-900 underline">
                info@pinnacleinfra.co.in
              </a>
            </p>
            <p>
              <strong className="text-red-800">Call:</strong>{" "}
              <a href="tel:+919216399808" className="text-blue-800 underline">
                +91-9216399808
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
