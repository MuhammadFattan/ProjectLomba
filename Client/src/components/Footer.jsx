import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer>
            <div className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                    <div className="flex items-center space-x-3 mb-6">
                        LOGO
                    </div>
                    <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquam id tenetur suscipit neque aliquid perferendis porro fugiat! Et facilis exercitationem sint est perferendis cumque veritatis laudantium labore, aliquid repellat!
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white hover:scale-110 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out">
                        <a href="www.instagram.com/si-f">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white hover:scale-110 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out">
                        <a href="ww.tiktok.com/si-f">
                            <FaTiktok />
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#3B1A7A]">
                    <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                        Dibuat oleh tim Zzz
                    </div>
                </div>
            </div>

            <div class="bg-sky-950 pt-24 pb-13 relative overflow-hidden" data-aos="fade-up">
                <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
                    <div class="flex flex-wrap mx-auto px-6 lg:px-12 max-w-6xl">

                    <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 class="font-bold text-4xl text-white mb-5">ZAN</h2>
                        <h1 class="font-bold text-2xl mb-2">Hubungi kami</h1>
                        <p>Fauzan Aziman</p>
                        <p>Jl, Opi Jakabaring</p>
                        <p>Palembang</p>
                    </div>

                    <div class="w-full px-4 mb-12 md:w-1/3">
                        <h1 class="font-semibold text-xl text-white mb-5">Kategori Tulisan</h1>
                        <ul class="text-slate-300">
                        <li><a href="#" class="inline-block text-base hover:text-teal-400 mb-3">Programming</a></li>
                        <li><a href="#" class="inline-block text-base hover:text-teal-400 mb-3">Programming</a></li>
                        <li><a href="#" class="inline-block text-base hover:text-teal-400 mb-3">Programming</a></li>
                        </ul>
                    </div>

                    <div class="w-full px-4 mb-12 md:w-1/3">
                        <h1 class="font-semibold text-xl text-white mb-5">Tautan</h1>
                        <ul class="text-slate-300">
                        <li><a href="#home" class="inline-block text-base hover:text-teal-400 mb-3">Beranda</a></li>
                        <li><a href="#about" class="inline-block text-base hover:text-teal-400 mb-3">Tentang Saya</a></li>
                        <li><a href="#portofolio" class="inline-block text-base hover:text-teal-400 mb-3">Portofolio</a></li>
                        <li><a href="#clients" class="inline-block text-base hover:text-teal-400 mb-3">Clients</a></li>
                        <li><a href="#blog" class="inline-block text-base hover:text-teal-400 mb-3">Blog</a></li>
                        <li><a href="#contact" class="inline-block text-base hover:text-teal-400 mb-3">Contact</a></li>
                        </ul>
                    </div>
                    </div>

                    <div class="w-full px-4">
                    <div class="flex font-bold text-base text-white pb-5 justify-center">
                        <h1>Dibuat Menggunakan :</h1>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-3" data-aos="fade-up">

                        <a href="https://html.com" target="_blank"
                        class="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
                                hover:scale-110 hover:bg-orange-500 hover:text-white 
                                transition duration-300 ease-in-out">

                        <svg role="img" width="24" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>HTML5</title>
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718
                            10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33
                            4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                        </svg>
                        </a>

                        <a href="https://tailwindcss.com" target="_blank"
                        class="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
                                hover:scale-110 hover:bg-sky-500 hover:text-white
                                transition duration-300 ease-in-out">

                        <svg role="img" width="24" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

                        <a href="https://JavaScript.com" target="_blank"
                        class="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
                                hover:scale-110 hover:bg-yellow-400 hover:text-black
                                transition duration-300 ease-in-out">

                        <svg role="img" width="24" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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