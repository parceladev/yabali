import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-16 px-8 py-4 shadow-md lg:px-16">
      <div>
        <a href="/" className="flex items-center gap-2">
          <img
            src="/src/assets/generals/logo/transparant-logo-yabali.png"
            className="w-14"
            alt="logo-navbar"
          />
          <h1 className="text-2xl font-bold uppercase">Yabali</h1>
        </a>
      </div>
      <div className="hidden lg:gap-14 lg:flex">
        <a href="/">Beranda</a>
        <a href="/user/profil">Profil</a>
        {/* <a href="/user/program">Program</a> */}
        <a href="/user/informasi">Informasi</a>
        <a href="/user/donasi">Donasi</a>
      </div>
      {/* <div className="flex items-center gap-4">
        <a
          href="/auth/sign-in"
          className="px-3 py-1 border border-green-500 rounded-md"
        >
          Sign In
        </a>
        <a
          href="/auth/sign-up"
          className="px-3 py-1 text-white bg-green-500 rounded-md"
        >
          Sign Up
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div> */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-[75%] lg:w-[30%] h-full bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-7 right-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center w-full h-full gap-16">
          <a href="/" className="block mt-10">
            Beranda
          </a>
          <a href="/user/profil" className="block mt-5">
            Profil
          </a>
          <a href="/user/program" className="block mt-5">
            Program
          </a>
          <a href="/user/informasi" className="block mt-5">
            Informasi
          </a>
          <a href="/user/donasi" className="block mt-5">
            Donasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
