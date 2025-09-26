import { useState } from "react";
import { assets } from "../assets/Asset";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-[#CC2936] text-[#F5F0F6] shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
        <NavLink to="/">
            <img className="h-20" src={assets.logo} alt="logo" />
        </NavLink>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-gray-500/80 transition" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="/provinsi">
            Provinsi
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Kontak
          </a>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="/provinsi" className="text-sm">
                Provinsi
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
