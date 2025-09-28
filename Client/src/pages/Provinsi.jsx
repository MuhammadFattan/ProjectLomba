import React, { useState, useEffect, useRef } from "react";
import { provinsi } from "../assets/Asset";
import SearchBar from "../components/SearchBar";
import ProvinsiCard from "../components/ProvinsiCard";
import Pagination from "../components/Pagination";

const Provinsi = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  // atur postsPerPage berdasarkan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPostPerPage(4); // mobile (sm)
      } else {
        setPostPerPage(8); // default desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClear = () => {
    setQuery("");
    setCurrentPage(1);
  };

  const filteredProvinsi = provinsi.filter((prov) =>
    prov.nama.toLowerCase().includes(query.toLowerCase())
  );

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredProvinsi.slice(firstPostIndex, lastPostIndex);

  console.log("currentPage:", currentPage);
  console.log("firstPostIndex:", firstPostIndex, "lastPostIndex:", lastPostIndex);
  console.log("currentPosts:", currentPosts.map(p => p.nama));

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
        <SearchBar
          query={query}
          setQuery={setQuery}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          handleClear={handleClear}
        />

        {/* daftar provinsi */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentPosts.length > 0 ? (
            currentPosts.map((prov) => (
              <ProvinsiCard key={prov.id} provinsi={prov} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Provinsi tidak ditemukan.
            </p>
          )}
        </ul>

        {/* pagination */}
        <Pagination
          totalPosts={filteredProvinsi.length}
          postsPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Provinsi;
