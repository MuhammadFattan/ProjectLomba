import React from "react";

const SearchBar = ({ query, setQuery, isFocused, setIsFocused, handleClear }) => {
  return (
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
  );
};

export default SearchBar;
