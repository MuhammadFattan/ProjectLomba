import React, { useState } from "react";
import { provinsi } from "../assets/Asset";
import { useNavigate } from "react-router-dom";

const Provinsi = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="py-12 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Jelajahi Provinsi Indonesia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan keindahan dan keragaman budaya dari berbagai provinsi di
            Indonesia
          </p>
        </div>

        {/* search bar */}
        <div
          className={`my-10 relative group transition-all duration-300 ease-in-out ${
            isFocused
              ? "transform -translate-y-1 shadow-2xl"
              : "shadow-lg hover:shadow-xl"
          }`}
        >
          {/* search icon */}
          <div
            className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
              isFocused || query
                ? "text-blue-500 scale-100"
                : "text-gray-400 group-hover:text-gray-600"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* input field */}
          <input
            type="text"
            placeholder="Cari..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full h-16 px-16 text-lg font-light bg-transparent border-none outline-none placeholder-gray-400 transition-all duration-300 ease-in-out ${
              isFocused ? "text-gray-800 placeholder-gray-500" : "text-gray-700"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* clear button */}
          {query && (
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={handleClear}
                className={`p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-100 active:scale-95 text-gray-400 hover:text-gray-600 ${
                  isFocused ? "text-blue-500 hover:text-blue-600" : ""
                }`}
                type="button"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {provinsi
            .filter((provinsi) => provinsi.nama.toLowerCase().includes(query))
            .map((provinsi) => (
              <li
                key={provinsi.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
                onClick={() => navigate(provinsi.path)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform scale-110 group-hover:scale-100"
                  style={{ backgroundImage: `url(${provinsi.image})` }}
                ></div>

                {/* Fallback gradient for loading/error */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex-grow">
                    <div className="w-12 h-1 bg-blue-500 rounded-full mb-4 group-hover:bg-white transition-colors duration-300"></div>
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3">
                      {provinsi.nama}
                    </h2>
                    <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed line-clamp-4">
                      {provinsi.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Pelajari Lebih Lanjut
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                      <svg
                        className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                <div className="absolute top-6 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-150 transition-all duration-500"></div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Provinsi;
