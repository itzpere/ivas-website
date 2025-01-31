"use client";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "../components/menu";
import HomeIcon from "../components/homeIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-amber-100 shadow-md absolute top-0 z-50">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between text-gray-500">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg transition-colors w-[32px] h-[32px] sm:w-[64px] sm:h-[64px]"
          >
            <Menu />
          </button>

          {/* Centered Logo/Text */}
          <div className="flex justify-center items-center w-full">
            <p
              className="left-1/2 text-black font-bold font-['Bricolage_Grotesque'] whitespace-nowrap"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 1.5rem)",
              }}
            >
              Freelance Designer & Web Designer
            </p>
          </div>

          {/* Spacer for flex alignment */}
          <div className="" />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`
        absolute left-0 w-full bg-amber-100 shadow-md 
        transition-all duration-500 ease-in-out py-8
        transform origin-top
        ${
          isOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 invisible"
        }
        `}
        >
          <div className="bg-amber-100 pt-4">
            <Link
              href="/"
              className="absolute right-8 top-4 w-8 h-8 hover:scale-110 transition-transform duration-200"
            >
              <HomeIcon />
            </Link>
            <div className="container max-w-2xl mx-auto p-12 space-y-8 bg-[#AA5486CC] text-white text-xl rounded-2xl">
              <Link
                href="/about-me"
                className="block hover:text-pink-200 transition-colors duration-300"
              >
                About me
              </Link>
              <Link
                href="/mwp"
                className="block hover:text-pink-200 transition-colors duration-300"
              >
                My Working Process
              </Link>
              <Link
                href="/projects"
                className="block hover:text-pink-200 transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block hover:text-pink-200 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
