import React from "react";
import { Link } from "react-router-dom";
import propertyData from "../data/propertyData.json";

const getRandomProperties = (data, count = 4) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const PropertySuggestions = () => {
  const randomProperties = getRandomProperties(propertyData, 3); // change to 4 if desired

  return (
    <div className="!mt-10 !px-4">
      <h2 className="text-2xl font-bold text-red-800 !mb-4">Similar Properties</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {randomProperties.map((property) => (
          <Link
            key={property.id}
            to={`/project/${property.id}`}
            className="w-[250px] border rounded-lg shadow-lg !p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover rounded-md !mb-2"
            />
            <h3 className="text-lg font-semibold text-center text-blue-800">
              {property.title}
            </h3>
            <p className="text-sm text-gray-600 text-center line-clamp-3">
              {property.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertySuggestions;
