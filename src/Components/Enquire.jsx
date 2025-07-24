import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MakeCallButton from "./CallBtn";

const EnquiryForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2ax3kz",
        "template_ori9uhs",
        formRef.current,
        "pQqSTFuOf-O4iXuH-"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="bg-white rounded-xl min-w-70 max-w-200 flex justify-center items-center !px-3 !py-6"
    >
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-3xl font-bold !mb-8">
          Quick{" "}
          <span className="text-red-600 underline underline-offset-4">
            Enquiry
          </span>
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border !p-3 rounded outline-none w-full"
            pattern="^[A-Za-z\s]+$"
            title="Name should contain only letters and spaces"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border !p-3 rounded outline-none w-full"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <div className="flex w-full">
            <input
              type="text"
              name="countryCode"
              className="border border-r-0 !p-3 rounded-l outline-none bg-white w-28"
              list="countryCodes"
              placeholder="+"
              required
            />
            <datalist id="countryCodes">
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+1">🇺🇸 USA (+1)</option>
            </datalist>

            <input
              type="tel"
              name="phone"
              placeholder="Phone / Mobile"
              className="border !p-3 rounded-r outline-none w-full"
              pattern="^[0-9]{10}$"
              title="Enter valid 10-digit mobile number"
              maxLength="10"
              required
            />
          </div>

          <select
            name="service"
            className="border !p-3 rounded outline-none bg-white w-full"
            defaultValue=""
            required
          >
            <option value="" disabled hidden>
              Select a Service
            </option>
            <option>Sell Property</option>
            <option>Buy Property</option>
            <option>Re-Sale Property</option>
            <option>Consultation</option>
            <option>Others</option>
          </select>

          <textarea
            name="message"
            placeholder="Leave a Message for us"
            className="border !p-3 rounded outline-none md:col-span-2 !mt-2 w-full"
            rows={4}
          ></textarea>

          <div className="md:col-span-2 !mt-4 text-lg font-semibold flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button
              type="submit"
              className="bg-red-700 text-white !px-6 !py-2 rounded hover:bg-red-800 transition w-full md:w-auto"
            >
              Send Message
            </button>
            <MakeCallButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
