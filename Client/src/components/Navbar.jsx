import { useState } from "react";
import { assets } from "../assets/Asset";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useAppContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 transition-colors shadow-[0px_4px_25px_0px_#0000000D] ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-700"
      }`}
    >
      <NavLink to="/" onClick={false}>
        <img
          className="h-50 pt-5"
          src={isDarkMode ? assets.logo_dark_mode : assets.logo_light_mode}
          alt="logo"
        />
      </NavLink>

      <ul className="md:flex hidden items-center gap-10">
        <li>
          <NavLink to="/" className={`${isDarkMode ? 'text-white' : 'text-primary'} font-medium transition-colors`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jelajahi"
            className={`${isDarkMode ? 'text-white' : 'text-primary'} font-medium transition-colors`}
          >
            Jelajahi
          </NavLink>
        </li>
        <li>
          <NavLink to="/tentang" className={`${isDarkMode ? 'text-white' : 'text-primary'} font-medium transition-colors`}>
            Tentang
          </NavLink>
        </li>
        <li>
          <NavLink to="/kontak" className={`${isDarkMode ? 'text-white' : 'text-primary'} font-medium transition-colors`}>
            Kontak
          </NavLink>
        </li>
      </ul>

      {/* Desktop Acions */}
      <div className="md:flex hidden item-center gap-4">
        {/* dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/200/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE VIEW */}

      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill={isDarkMode ? "#fff" : "#000"}
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          className={`mobile-menu absolute top-[70px] left-0 w-full p-6 md:hidden shadow-lg ${
            isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jelajahi"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                Jelajahi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tentang"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                Tentang
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                Kontak
              </NavLink>
            </li>
          </ul>

          {/* Mobile Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className={`flex items-center gap-2 mt-4 p-2 rounded-full  transition-all ${
              isDarkMode
                ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/200/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
