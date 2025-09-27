import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center mt-8 flex-wrap">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md transition-all ${
            page === currentPage
              ? "bg-[#CC2936] text-white"
              : "bg-white border border-gray-200 hover:bg-gray-100/70"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
