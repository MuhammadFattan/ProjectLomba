import React from "react";
import { assets } from "../assets/Asset";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useAppContext } from "../contexts/AppContext";

const MainBanner = () => {
  const { isDarkMode } = useAppContext();
  return (
    <div className="relative w-full h-screen md:h-[600px] lg:h-[700px] overflow-hidden my-10">
      {/* Banner Image */}
      <img
        src={isDarkMode ? assets.banner_dark_mode : assets.banner_light_mode}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover hidden md:block transition"
      />

      {/* Mobile Banner Image */}
      <img src={isDarkMode ? assets.banner_dark_mode_mobile : assets.banner_light_mode_mobile} alt="banner_mobile" className="transition absolute inset-0 w-full object-cover block md:hidden" />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 hidden md:block"></div>
      <div className="absolute inset-0 bg-black/30 block md:hidden"></div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center md:items-start justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center md:text-left max-w-md md:max-w-xl lg:max-w-3xl leading-tight mb-4 drop-shadow-lg">
          Jelajahi keindahan serta keunikan Negara Indonesia
        </h1>

        {/* Subtitle - Optional */}
        <p className="text-white/90 text-base md:text-lg text-center md:text-left max-w-md md:max-w-xl mb-8 drop-shadow">
          Temukan pesona alam, budaya, dan kekayaan Indonesia yang menakjubkan
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 font-medium">
          <Link
            to="/jelajahi"
            className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-lg">Jelajahi Sekarang</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements - Optional */}
      <div className={` absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${isDarkMode ? 'from-gray-900' : 'from-white'} to-transparent pointer-events-none`}></div>
    </div>
  );
};

export default MainBanner;
