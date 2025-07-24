import React, { useState } from "react";
import { useParams } from "react-router-dom";
import properties from "../data/propertyData.json";
import Nav from "../Components/Nav";
import { AiFillFilePdf } from "react-icons/ai";
import AllProjects from "../Components/AllProjects";
import Footer from "../Components/Footer";
import ContactShareButtons from "../Components/ContactShareButtons";
// import PropertySuggestions from "../Components/PropertySuggestions";

const ProjectDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => String(p.id) === String(id));

  const allImages = [property?.image, ...(property?.images || [])];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const [showModal, setShowModal] = useState(false);

  if (!property) {
    return (
      <div className="!px-6 py-10 text-center text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="!px-6 rounded-xl !py-10 max-w-6xl !mx-auto bg-white">
        <h1 className="text-3xl md:text-4xl text-left !ml-3 font-bold text-blue-800 !mb-4">
          {property.title}
        </h1>
        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 !mb-6">
          {/* Left Section - Main Display Image */}
          <div
            className={`${
              allImages.length <= 1 ? "md:col-span-3" : "md:col-span-2"
            }`}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-[400px] object-contain bg-gray-900 rounded-xl"
            />
          </div>

          {/* Right Section - Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex md:flex-col gap-4">
              {/* Top Thumbnail */}
              {allImages[1] && (
                <img
                  src={allImages[1]}
                  onClick={() => setSelectedImage(allImages[1])}
                  alt="Thumbnail 1"
                  className="w-full h-[190px] object-cover rounded-lg cursor-pointer"
                />
              )}

              {/* Bottom Thumbnail or "+" */}
              <div
                className="relative cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                {allImages[2] ? (
                  <img
                    src={allImages[2]}
                    alt="More Images"
                    className="w-full h-[190px] object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-[190px] flex items-center justify-center border border-gray-300 rounded-lg text-4xl text-black">
                    <p className="bg-white !px-4 rounded-xl">+</p>
                  </div>
                )}

                <div className="absolute inset-0  rounded-lg flex items-center justify-center text-black text-xl font-bold">
                  <p className="bg-white !px-4 rounded-xl">+ See All</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal for All Images */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center !p-4">
            <div className="bg-white max-w-4xl w-full rounded-lg overflow-hidden">
              {/* Sticky Header with Close Button */}
              <div className="flex justify-between items-center !px-4 !py-3 border-b sticky top-0 z-10 bg-white">
                <h2 className="text-xl font-semibold">All Images</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-red-500 cursor-pointer text-3xl hover:text-red-700"
                >
                  &times;
                </button>
              </div>

              {/* Scrollable Images Section */}
              <div className="overflow-y-auto max-h-[80vh] !p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {allImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-full h-40 object-cover rounded-md cursor-pointer"
                      onClick={() => {
                        setSelectedImage(img);
                        setShowModal(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <ContactShareButtons />

        {/* Info Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:justify-between !mb-6 mt-6">
          <p className="text-2xl font-semibold text-green-700">
            ₹ {property.priceRange}
          </p>
          <p className="text-lg text-gray-700">📍 {property.location}</p>
        </div>

        {/*Long Description */}
        {property.longDesc && (
          <p className="text-gray-700 leading-relaxed !mb-6">
            <strong className="text-red-900">Description:</strong>{" "}
            {property.longDesc}
          </p>
        )}

        {/* Details List */}
        <div className="bg-gray-100 rounded-xl !p-6 shadow-inner">
          <ul className="space-y-2 text-gray-800 text-md">
            {property.bedrooms && (
              <li>
                <strong className="text-red-900">Bedrooms:</strong>{" "}
                {property.bedrooms}
              </li>
            )}
            {property.priceRange && (
              <li>
                <strong className="text-red-900">Price:</strong>{" "}
                {property.priceRange}
              </li>
            )}
            {property.area && (
              <li>
                <strong className="text-red-900">Area:</strong> {property.area}{" "}
                sq.ft
              </li>
            )}

            {property.type && (
              <li>
                <strong className="text-red-900">Type:</strong> {property.type}
              </li>
            )}
            {property.status && (
              <li>
                <strong className="text-red-900">Status:</strong>{" "}
                {property.status}
              </li>
            )}
            {property.bhk && (
              <li>
                <strong className="text-red-900">BHK:</strong> {property.bhk}
              </li>
            )}
            {property.amenities && property.amenities.length > 0 && (
              <li>
                <strong className="text-red-900">Amenities:</strong>{" "}
                {property.amenities.join(", ")}
              </li>
            )}
          </ul>
        </div>

        {/* Facilities Table */}
        {property.facilities && property.facilities.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-red-800 !my-4">Facilities</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-blue-200 text-left">
                  <tr>
                    <th className="!px-4 !py-2">#</th>
                    <th className="!px-4 !py-2">Facility</th>
                  </tr>
                </thead>
                <tbody>
                  {property.facilities.map((item, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="!px-4 !py-2">{index + 1}</td>
                      <td className="!px-4 !py-2">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {property.specifications &&
          typeof property.specifications === "object" &&
          Object.keys(property.specifications).length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-red-800 !my-4">
                Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead className="bg-blue-200 text-left">
                    <tr>
                      <th className="!px-4 !py-2">Specification</th>
                      <th className="!px-4 !py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(property.specifications).map(
                      ([sectionTitle, specs], index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="!px-4 !py-2">{sectionTitle}</td>
                          <td className="!px-4 !py-2">
                            {typeof specs === "object" ? (
                              <ul className="list-disc ml-4">
                                {Object.entries(specs).map(
                                  ([key, value], idx) => (
                                    <li key={idx}>
                                      <strong>{key}:</strong> {value}
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              specs
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        {/* Download Brochure */}
        {property.brochure && (
          <div className="!mt-6">
            <h1 className="text-red-800 text-2xl font-bold">
              Download Brochure
            </h1>
            <a
              href={property.brochure}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 !px-4 !py-2 bg-blue-600 text-white text-[100px] !mt-4 rounded-md hover:bg-blue-700 transition"
            >
              <AiFillFilePdf />
            </a>
          </div>
        )}

        {/* Download Rate Card */}
        {property.rateCard && (
          <div className="!mt-6">
            <h1 className="text-red-800 text-2xl font-bold">
              Download Rate Card
            </h1>
            <a
              href={property.rateCard}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 !px-4 !py-2 bg-blue-600 text-white text-[100px] !mt-4 rounded-md hover:bg-green-700 transition"
            >
              <AiFillFilePdf />
            </a>
          </div>
        )}

        {/* Download Layout Plan */}
        {Array.isArray(property.layoutPlan) &&
          property.layoutPlan.length > 0 && (
            <div className="!mt-6">
              <h1 className="text-red-800 text-2xl font-bold !mb-4">
                Layout Plans
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {property.layoutPlan.map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="relative block border rounded-lg overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      src={img}
                      alt={`Layout Plan ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

        {/* Download Payment Plan */}
        {property.paymentPlan && (
          <div className="!mt-6">
            <h1 className="text-red-800 text-2xl font-bold !mb-4">
              Download Payment Plan
              {Array.isArray(property.paymentPlan) &&
              property.paymentPlan.length > 1
                ? "s"
                : ""}
            </h1>

            <div className="flex flex-wrap gap-4">
              {(Array.isArray(property.paymentPlan)
                ? property.paymentPlan
                : typeof property.paymentPlan === "string"
                ? [property.paymentPlan]
                : []
              ) // fallback if it's null, undefined, or unexpected
                .map((pdfUrl, index) => (
                  <a
                    key={index}
                    href={pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 !px-4 !py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-yellow-600 transition"
                  >
                    <AiFillFilePdf className="text-[100px]" />
                    Plan {index + 1}
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* <PropertySuggestions /> */}
      <Footer />
    </>
  );
};

export default ProjectDetails;
