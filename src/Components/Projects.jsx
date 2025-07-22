import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import properties from "../data/propertyData.json";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % properties.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const updateButtonVisibility = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 300;
    if (direction === "left") {
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    setTimeout(updateButtonVisibility, 350);
  };

  useEffect(() => {
    updateButtonVisibility();
  }, []);

  const activeProperty = properties[activeIndex];

  return (
    <div className="!px-6 !py-10 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-800 !mb-10">
        Our Projects
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Active Property Detail Box */}
        <motion.div
          key={activeProperty.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white !p-6 rounded-xl shadow-xl"
        >
          <img
            src={activeProperty.image}
            alt={activeProperty.title}
            className="w-full h-64 object-cover rounded-xl !mb-5"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {activeProperty.title}
          </h2>
          <p className="text-gray-600 !mt-3 leading-relaxed">
            {activeProperty.description}
          </p>
        </motion.div>

        {/* Scrollable Grid with Arrows */}
        <div className="relative">
          {showLeft && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md !p-2 rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateButtonVisibility}
            className="overflow-x-auto bg-blue-50 !p-2 rounded-xl scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            <div
              className="grid grid-rows-3 auto-cols-[minmax(200px,_1fr)] gap-4 grid-flow-col !p-2"
              style={{ minWidth: "fit-content" }}
            >
              {properties.map((property, index) => (
                <div
                  key={property.id}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[200px] flex items-center gap-4 border rounded-lg !p-3 shadow-md transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "border-blue-600 bg-blue-50 scale-[1.02]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="truncate">
                    <h3 className="text-md font-semibold truncate">
                      {property.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showRight && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md !p-2 rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
