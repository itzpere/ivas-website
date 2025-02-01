"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import { Kalnia } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const kalnia = Kalnia({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
  });

export const useImageDimensions = (imageContainerId: string) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById(imageContainerId);
      if (container) {
        setWidth(container.offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [imageContainerId]);

  return { width };
};

const Hero = () => {
  const { width } = useImageDimensions("image-container");
  const textSize = width ? `${width / 4 - 2}px` : "100px";
  return (
    <section className="container mx-auto px-6 py-4">
      <div className="grid grid-cols-2 gap-4 sm:gap-8">
        <div className="flex justify-end">
          <div
            id="image-container"
            className="relative w-full max-w-[400px] aspect-[400/540]"
          >
            <h2 className="absolute top-[-9%] left-0 w-full flex z-10 pointer-events-none tracking-widest">
              <span
                className="font-['Climate_Crisis'] text-[#FBF4DB] tracking-[.05em]"
                style={{ fontSize: textSize }}
              >
                PORT
              </span>
              <span
                className="font-['Climate_Crisis'] text-orange-400 tracking-[.05em]"
                style={{ fontSize: textSize }}
              >
                FOLIO
              </span>
            </h2>
            <Image
              src="/images/iva.png"
              alt="Hero Image"
              fill
              className="rounded-lg object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <div className="w-full max-w-[400px] space-y-2 sm:space-y-6 pt-[min(10vw,4rem)]">
            <h1
              className={`${kalnia.className} text-[min(6vw,3rem)] font-normal text-left`}
            >
              Hi! I'm <br />
              Iva Minić
            </h1>
            <div className="flex justify-start pt-4">
              <Link
                href="https://www.linkedin.com/in/iva-mini%C4%87-1705b4303/"
                className="flex items-center justify-between px-4 py-0.5 bg-[#FC8F54] rounded-[55px] shadow-[3px_3px_7.8px_rgba(170,84,134,0.25)] hover:bg-[#fd9e6d] transition-colors duration-300"
              >
                <span className="font-['Bricolage_Grotesque'] font-medium text-[min(4vw,1.125rem)] sm:text-lg pr-2 tracking-[0.09em] text-[#FBF4DB]">
                  Download
                </span>
                <Download className="w-4 h-4 text-[#FBF4DB]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
