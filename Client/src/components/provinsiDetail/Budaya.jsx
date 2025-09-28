import React, { useEffect, useRef, useState } from "react";
import { provinsi } from "../../assets/asset";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Budaya = () => {
  const { path } = useParams();
  const currentProvinsi = provinsi.find(
    (p) => p.path.toLowerCase() === path.toLowerCase()
  );

  const [curr, setCurr] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide function
  const resetAutoSlide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      next();
    }, 5000);
  };

  // Navigation functions
  const prev = () => {
    setCurr(curr === 0 ? currentProvinsi.budayaImg.length - 1 : curr - 1);
  };

  const next = () => {
    setCurr(curr === currentProvinsi.budayaImg.length - 1 ? 0 : curr + 1);
  };

  // Auto slide effect
  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [curr]);

  // Handle manual navigation
  const handleManualNav = (direction) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (direction === 'prev') {
      prev();
    } else {
      next();
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Budaya</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {currentProvinsi.budayaDesc}
          </p>
        </div>

        {/* Right Image Slider */}
        <div className="flex-1">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            {/* Image Container */}
            <div className="relative h-64 lg:h-80">
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {currentProvinsi.budayaImg.map((item, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={item}
                      alt={`Budaya ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => handleManualNav("prev")}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>

              <button
                onClick={() => handleManualNav("next")}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>

              {/* Indicator titik */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {currentProvinsi.budayaImg.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                      }
                      setCurr(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === curr
                        ? "bg-white"
                        : "bg-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="text-center text-sm text-gray-500 mt-2">
            {curr + 1} / {currentProvinsi.budayaImg.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budaya;
