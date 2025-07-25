import React, { useState } from "react";
import VideoPlot from "/Assets/ResalePropertyData/PLOT.mp4";
import resaleData from "../data/ResaleData.json";

// Dynamic image loader
const loadImage = (filename) => {
  return `/Assets/ResalePropertyData/${filename}`;
};

const Resale = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewAll, setViewAll] = useState({
    flats: false,
    houses: false,
    plots: false,
  });
  const isMobile = window.innerWidth <= 768;

  const flats = resaleData.filter((item) => item.type === "Flat");
  const houses = resaleData.filter((item) => item.type === "House");
  const plots = resaleData.filter((item) => item.type === "Plot");

  const renderPropertyCard = (property) => {
    const { images, title, location } = property;
    let firstImage = null;

    if (Array.isArray(images)) {
      firstImage = images[0] ? loadImage(images[0].split("/").pop()) : null;
    } else if (typeof images === "string" && images.trim() !== "") {
      firstImage = loadImage(images.split("/").pop());
    }

    return (
      <div
        key={property.id}
        onClick={() => setSelectedProperty(property)}
        className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer !p-2"
      >
        {firstImage && (
          <img
            src={firstImage}
            alt={title}
            className="rounded-lg w-full h-40 object-cover"
          />
        )}
        <h3 className="text-sm font-semibold !mt-2">{title}</h3>
        <p className="text-xs text-gray-600">{location}</p>
      </div>
    );
  };

  const renderSection = (title, data, key) => {
    const itemsToShow = isMobile && !viewAll[key] ? data.slice(0, 2) : data;
    return (
      <div className="!mt-6">
        <h2 className="text-xl font-bold !mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {itemsToShow.map((item) => renderPropertyCard(item))}
        </div>
        {isMobile && data.length > 2 && !viewAll[key] && (
          <button
            onClick={() => setViewAll((prev) => ({ ...prev, [key]: true }))}
            className="text-blue-600 !mt-2 block"
          >
            View More
          </button>
        )}
      </div>
    );
  };

  const getWhatsAppMessage = (property) => {
    const {
      title,
      location,
      description,
      bhk,
      area,
      storey,
      facing,
      facilities,
      price,
    } = property;

    const message = `Hi, I'm interested in this property:

🏠 *${title}*
📍 Location: ${location}
💬 Description: ${description}
🛏️ BHK: ${bhk || "N/A"}
📐 Area: ${area || "N/A"}
🏢 Storey: ${storey || "N/A"}
🧭 Facing: ${facing || "N/A"}
💰 Price: ${price || "Contact for price"}
🛠️ Facilities: ${facilities?.join(", ") || "N/A"}

Please share more details.`;

    return encodeURIComponent(message);
  };

  return (
    <>
      <div className="!px-6 !mt-4">
        <video
          src={VideoPlot}
          autoPlay
          muted
          loop
          className="rounded-xl w-full h-auto"
        />
      </div>

      <div className="!px-6">
        <h2 className="text-[20px] font-bold sm:text-[25px] md:text-[30px] xl:text-[35px] !p-2 rounded-xl !mt-6 text-red-700">
          RESALE PROPERTIES
        </h2>
        <div className="bg-blue-50 !px-4 !py-3 rounded-xl !mt-2">
          {renderSection("Flats", flats, "flats")}
          {renderSection("Houses", houses, "houses")}
          {renderSection("Plots", plots, "plots")}
        </div>
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 !p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-xl w-full overflow-y-auto max-h-[90vh] !p-4 relative">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-2 right-4 font-bold text-xl cursor-pointer text-red-500 hover:text-red-700"
            >
              ✕
            </button>

            <h2 className="text-xl text-red-700 font-bold !mb-2">
              {selectedProperty.title}
            </h2>
            {selectedProperty.price && (
              <p className="text-lg text-green-600">
                <strong>Price:</strong> {selectedProperty.price}
              </p>
            )}
            <p className="text-sm text-gray-600 !mb-2">
              <strong>Location:</strong> {selectedProperty.location}
            </p>
            <p className="text-sm text-gray-600 !mb-2">
              <strong>Description:</strong> {selectedProperty.description}
            </p>
            {selectedProperty.bhk && (
              <p className="text-sm text-gray-600">
                <strong>BHK:</strong> {selectedProperty.bhk}
              </p>
            )}
            {selectedProperty.area && (
              <p className="text-sm text-gray-600">
                <strong>Area:</strong> {selectedProperty.area}
              </p>
            )}
            {selectedProperty.storey && (
              <p className="text-sm text-gray-600">
                <strong>Storey:</strong> {selectedProperty.storey}
              </p>
            )}
            {selectedProperty.facing && (
              <p className="text-sm text-gray-600">
                <strong>Facing:</strong> {selectedProperty.facing}
              </p>
            )}
            {selectedProperty.facilities?.length > 0 && (
              <p className="text-sm text-gray-600 !mb-2">
                <strong>Facilities:</strong>{" "}
                {selectedProperty.facilities.join(", ")}
              </p>
            )}

            {/* Modal Images */}
            {selectedProperty.images &&
              (Array.isArray(selectedProperty.images) ? (
                <div className="grid grid-cols-2 gap-2 !mt-4">
                  {selectedProperty.images.map((img, idx) => {
                    const imagePath = loadImage(img.split("/").pop());
                    return (
                      imagePath && (
                        <img
                          key={idx}
                          src={imagePath}
                          alt="property"
                          className="rounded-lg w-full h-32 object-cover"
                        />
                      )
                    );
                  })}
                </div>
              ) : selectedProperty.images.trim() !== "" ? (
                <img
                  src={loadImage(selectedProperty.images.split("/").pop())}
                  alt="property"
                  className="rounded-lg w-full h-48 object-contain !mt-4"
                />
              ) : null)}

            <div className="flex flex-col sm:flex-row gap-4 !mt-6">
              <a
                href="tel:+919216399808"
                className="bg-blue-600 text-white text-center rounded-lg !px-4 !py-2 w-full hover:bg-blue-700 transition"
              >
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/919216399808?text=${getWhatsAppMessage(
                  selectedProperty
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white text-center rounded-lg !px-4 !py-2 w-full hover:bg-green-700 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resale;
