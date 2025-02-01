"use client";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "../components/menu";
import HomeIcon from "../components/homeIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {/* Background Overlay */}
    <div
      onClick={() => setIsOpen(false)}
      className={`
        fixed inset-0 bg-black/50 backdrop-blur-sm
        transition-all duration-500 ease-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        z-40
      `}
    />
      <header className="w-full bg-amber-100 shadow-md absolute top-0 z-50">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between text-gray-500">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg transition-all duration-300 ease-in-out w-[32px] h-[32px] sm:w-[64px] sm:h-[64px] hover:scale-110 active:scale-95"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <Menu />
          </button>

          {/* Centered Logo/Text */}
          <div className="flex justify-center items-center w-full">
            <p
              className="left-1/2 text-black font-bold font-['Bricolage_Grotesque'] whitespace-nowrap transition-transform duration-300 hover:scale-105"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 1.5rem)",
              }}
            >
              Freelance Designer & Web Designer
            </p>
          </div>

          <div className="" />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`
            absolute left-0 w-full bg-amber-100 
            transition-all duration-500 ease-out
            transform origin-top
            ${isOpen 
              ? "max-h-[500px] opacity-100 translate-y-0 shadow-lg pb-4" 
              : "max-h-0 opacity-0 -translate-y-4 invisible"
            }
          `}
        >
          <div className="bg-amber-100/95 pt-4">
            <Link
              href="/"
              className="absolute right-8 top-4 w-8 h-8 hover:scale-110 transition-all duration-300 ease-out"
            >
              <HomeIcon />
            </Link>
            <div className="container max-w-2xl mx-auto p-12 space-y-8 bg-[#AA5486CC] text-white text-xl rounded-2xl shadow-xl">
              {[
                { href: "/about-me", text: "About me" },
                { href: "/mwp", text: "My Working Process" },
                { href: "/projects", text: "Projects" },
                { href: "/contact", text: "Contact Me" }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transform transition-all duration-300 hover:text-pink-200 hover:translate-x-2"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: `translateY(${isOpen ? 0 : 20}px)`,
                    transition: `all 0.3s ease-out ${index * 0.1}s`
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
