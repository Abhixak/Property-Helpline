import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ResaleForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      countryCode: form.countryCode.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    };

    emailjs
      .send(
        "service_h2ax3kz",
        "template_ori9uhs",
        formData,
        "pQqSTFuOf-O4iXuH-"
      )
      .then(
        () => {
          alert("Property details sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-white rounded-xl max-w-4xl !mx-auto !my-8 !px-6 !py-10">
      <h2 className="text-3xl font-bold text-center !mb-6">
        Quick <span className="text-red-600 underline">Enquiry</span>
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border !p-3 rounded outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border !p-3 rounded outline-none"
          required
        />

        <div className="flex gap-2">
          <input
            type="text"
            name="countryCode"
            value="+91"
            disabled
            className="border !p-3 rounded outline-none w-15 bg-gray-100 text-gray-700"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border !p-3 rounded outline-none flex-1"
            pattern="[0-9]{10}"
            title="Enter valid 10-digit number"
            required
          />
        </div>

        <select
          name="service"
          className="border !p-3 rounded outline-none"
          required
        >
          <option value="">Select Service</option>
          <option value="Sell Property">Sell Property</option>
          <option value="Buy Property">Buy Property</option>
          <option value="Resale Property">Resale Property</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Describe your property"
          className="border !p-3 rounded outline-none"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold !py-2 rounded transition"
        >
          Submit Details
        </button>
      </form>
    </section>
  );
};

export default ResaleForm;
