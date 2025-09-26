import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { assets } from "../assets/Asset";

const socialLinks = [
  {
    href: "https://www.instagram.com/si-f",
    icon: <FaInstagram />,
    label: "Instagram",
    hover: "hover:bg-[#8134AF]",
  },
  {
    href: "https://www.tiktok.com/@si-f",
    icon: <FaTiktok />,
    label: "Tiktok",
    hover: "hover:bg-[#000000]",
  },
];

const categories = ["Programming", "Web Development", "UI/UX"];

const Footer = () => {
  return (
    <footer>
      {/* Bagian atas */}
      <div className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <img className="h-50" src={assets.logo} alt="" />
          <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            aliquam id tenetur suscipit neque aliquid perferendis porro fugiat!
          </p>
        </div>

        {/* Social icons */}
        <div className="max-w-7xl mx-auto px-6 py-5 flex gap-4 justify-center">
          {socialLinks.map(({ href, icon, label, hover }, index) => (
            <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white hover:scale-110 transition duration-300 ease-in-out ${hover}`}
            >
                {icon}
            </a>
            ))}
        </div>

        {/* Credit */}
        <div className="border-t border-[#3B1A7A]">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            Dibuat oleh tim Zzz
          </div>
        </div>
      </div>

      {/* Bagian bawah */}
      <div
        className="bg-sky-950 pt-24 pb-12 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex flex-wrap">
            {/* Kontak */}
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">ZAN</h2>
              <h1 className="font-bold text-2xl mb-2">Hubungi kami</h1>
              <p>Fauzan Aziman</p>
              <p>Jl, Opi Jakabaring</p>
              <p>Palembang</p>
            </div>

            {/* Kategori */}
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h1 className="font-semibold text-xl text-white mb-5">
                Kategori Tulisan
              </h1>
              <ul className="text-slate-300">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#"
                      className="inline-block text-base hover:text-teal-400 mb-3"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tautan */}
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h1 className="font-semibold text-xl text-white mb-5">Tautan</h1>
              <ul className="text-slate-300">
                {[
                  { href: "#home", text: "Beranda" },
                  { href: "#about", text: "Tentang Saya" },
                  { href: "#portofolio", text: "Portofolio" },
                  { href: "#clients", text: "Clients" },
                  { href: "#blog", text: "Blog" },
                  { href: "#contact", text: "Contact" },
                ].map(({ href, text }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="inline-block text-base hover:text-teal-400 mb-3"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dibuat Menggunakan */}
          <div className="w-full px-4">
            <div className="flex font-bold text-base text-white pb-5 justify-center">
              <h1>Dibuat Menggunakan :</h1>
            </div>
            <div
              className="flex flex-wrap items-center justify-center gap-3"
              data-aos="fade-up"
            >
              {/* Tech stack icons */}
              {/* HTML */}
              <a
                href="https://html.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HTML5"
                className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white hover:scale-110 hover:bg-orange-500 transition duration-300 ease-in-out"
              >
                <svg
                  role="img"
                  width="24"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>HTML5</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718
                  10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33
                  4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </a>

              {/* Tailwind */}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tailwind CSS"
                className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white hover:scale-110 hover:bg-sky-500 transition duration-300 ease-in-out"
              >
                {/* SVG Tailwind */}
                <svg
                  role="img"
                  width="24"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8
                  c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,
                  6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,
                  14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,
                  4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,
                  2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
                  C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </a>

              {/* JS */}
              <a
                href="https://javascript.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JavaScript"
                className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white hover:scale-110 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out"
              >
                {/* SVG JS */}
                <svg
                  role="img"
                  width="24"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14
                  -.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9
                  1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089
                  c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244
                  3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83
                  1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248
                  c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855
                  -.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675
                  3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054
                  0-4.109 0-6.179l.004-.056z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
