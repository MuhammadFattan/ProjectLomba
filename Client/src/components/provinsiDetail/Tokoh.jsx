import React, { useEffect, useState } from "react";
import { provinsi } from "../../assets/Asset";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppContext } from "../../contexts/AppContext";

const tokoh = () => {
  const { isDarkMode } = useAppContext();
  const { path } = useParams();
  const currentProvinsi = provinsi.find(
    (p) => p.path.toLowerCase() === path.toLowerCase()
  );

  const [curr, setCurr] = useState(0);

  // Auto slide pakai setInterval (jalan hanya kalau ada gambar)
  useEffect(() => {
    if (!currentProvinsi?.tokohImg || currentProvinsi.tokohImg.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurr((prevCurr) =>
        prevCurr === currentProvinsi.tokohImg.length - 1 ? 0 : prevCurr + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentProvinsi?.tokohImg?.length]);

  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? currentProvinsi.tokohImg.length - 1 : prevCurr - 1
    );
  };

  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === currentProvinsi.tokohImg.length - 1 ? 0 : prevCurr + 1
    );
  };

  if (
    !currentProvinsi?.tokohDesc &&
    (!currentProvinsi?.tokohImg || currentProvinsi.tokohImg.length === 0)
  ) {
    return null;
  }

  function formatLabel(path) {
    // fetch nama file tanpa path
    const name = path.split("/").pop().replace(/\.[^/.]+$/, "");
    // ubah underscore jadi spasi
    const withSpaces = name.replace(/_/g, " ");
    // kapitalisasi tiap awal kata
    return withSpaces.replace(/\b\w/g, (c) => c.toUpperCase());
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 border-white text-white': 'bg-white border-gray-200'} rounded-lg border p-4 sm:p-6 mt-4 max-w-5xl mx-auto`}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Content */}
        {currentProvinsi?.tokohDesc && (
          <div className="flex-1 order-2 md:order-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              tokoh
            </h2>
            <p className="leading-relaxed text-justify text-sm sm:text-base">
              {currentProvinsi.tokohDesc}
            </p>
          </div>
        )}

        {/* Right Image Slider */}
        {currentProvinsi?.tokohImg?.length > 0 && (
          <div className="flex-1 order-1 md:order-1">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-48 sm:h-64 lg:h-80">
                <div
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {currentProvinsi.tokohImg.map((item, index) => (
                    <div key={index} className="relative w-full h-full flex-shrink-0">
                      <img
                        src={item}
                        alt={`tokoh ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm md:text-xl px-4 py-2 rounded-md shadow-md">{formatLabel(item)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default tokoh;
