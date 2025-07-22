import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../data/propertyData.json';
import Nav from '../Components/Nav';
// import Projects from '../Components/Projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => String(p.id) === String(id));

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
    <div className="!px-6 !py-10 max-w-6xl !mx-auto">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-blue-800 !mb-4">
        {property.title}
      </h1>

      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="w-full max-h-[500px] object-contain rounded-xl shadow-md !mb-6"
        />
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between !mb-6">
        <p className="text-2xl font-semibold text-green-700">
          ₹ {property.price}
        </p>
        <p className="text-lg text-gray-700">
          📍 {property.location}
        </p>
      </div>

      {property.description && (
        <p className="text-gray-700 leading-relaxed !mb-6">
          {property.description}
        </p>
      )}

      {property.gallery && property.gallery.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 !mb-6">
          {property.gallery.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>
      )}

      <div className="bg-gray-100 rounded-xl !p-6 shadow-inner">
        <ul className="space-y-2 text-gray-800 text-md">
          {property.bedrooms && <li><strong>Bedrooms:</strong> {property.bedrooms}</li>}
          {property.bathrooms && <li><strong>Bathrooms:</strong> {property.bathrooms}</li>}
          {property.area && <li><strong>Area:</strong> {property.area} sq.ft</li>}
          {property.type && <li><strong>Type:</strong> {property.type}</li>}
          {property.amenities && property.amenities.length > 0 && (
            <li><strong>Amenities:</strong> {property.amenities.join(', ')}</li>
          )}
          {property.possession && <li><strong>Possession:</strong> {property.possession}</li>}
        </ul>
      </div>
    </div>
    {/* <Projects/> */}
    </>
  );
};

export default ProjectDetails;
