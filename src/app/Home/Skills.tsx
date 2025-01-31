import React from "react";
import { useState, useEffect } from "react";
import FigmaIcon from "../components/figmaIcon";
import IllustratorIcon from "../components/illustratorIcon";
import LightroomIcon from "../components/lightRoomIcon";
import PhotoshopIcon from "../components/photoshopIcon";

import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500"],
});

interface DynamicSizing {
  fontSize: string;
  topOffset: string;
}

export const useContainerDimensions = (containerId: string): DynamicSizing => {
  const [dimensions, setDimensions] = useState<DynamicSizing>({
    fontSize: "96px",
    topOffset: "-8rem",
  });

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const updateDimensions = (width: number) => {
      //ratio
      const fontSize = width / 4.5;
      const topOffset = -(fontSize * 1.1);
      setDimensions({
        fontSize: `${fontSize}px`,
        topOffset: `${topOffset}px`,
      });
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateDimensions(entry.contentRect.width);
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [containerId]);

  return dimensions;
};
const Skills = () => {
  const { fontSize, topOffset } = useContainerDimensions("skills-container");
  return (
    <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 lg:ml-auto lg:mr-24 lg:px-12 px-4 sm:px-12 py-24">
      <div id="skills-container" className="relative w-full">
      <h2
          className="absolute -top-32 w-full font-['Climate_Crisis'] tracking-[0.09em] text-[#CE9CAC] z-10"
          style={{ fontSize, top: topOffset }}
        >
          Skills
        </h2>

        {/* Main Container */}
        <div className="relative w-full bg-[rgba(170,84,134,0.55)] rounded-[40px] sm:rounded-[81px] pt-16 sm:pt-20 lg:pt-24 p-4 sm:p-8">
          {/* Icons Container */}
          <div className="w-full px-4 max-w-[500px] aspect-[4/1] mx-auto bg-[rgba(255,255,255,0.33)] rounded-[20px] sm:rounded-[37px] flex items-center justify-center gap-6 sm:gap-12">
          <div className="w-12 lg:w-16 aspect-square relative hover:scale-110 transition-transform">
          <FigmaIcon />
            </div>
            <div className="w-12 lg:w-16 aspect-square relative hover:scale-110 transition-transform">
            <IllustratorIcon />
            </div>
            <div className="w-12 lg:w-12 aspect-square relative hover:scale-110 transition-transform">
            <LightroomIcon />
            </div>
            <div className="w-12 lg:w-12 aspect-square relative hover:scale-110 transition-transform">

              <PhotoshopIcon />
            </div>
          </div>

          {/* Skills Description */}
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-8 px-4 sm:px-8">
            <p
              className={`${bricolage.className} text-sm sm:text-base lg:text-xl tracking-[0.05em] text-[#FBF4DB] leading-[1.6]`}
            >
              <span className="font-['Climate_Crisis'] tracking-[0.1em]">
                Design Tools{" "}
              </span>
              : Figma, Adobe Photoshop, Adobe Illustrator, Adobe Light Room
            </p>
            <p
              className={`${bricolage.className} text-sm sm:text-base lg:text-xl tracking-[0.05em] text-[#FBF4DB] leading-[1.6]`}
            >
              <span className="font-['Climate_Crisis'] tracking-[0.1em]">
                Web Design{" "}
              </span>
              : Basic HTML and CSS, UI Design, Responsive Design
            </p>
            <p
              className={`${bricolage.className} text-sm sm:text-base lg:text-xl tracking-[0.05em] text-[#FBF4DB] leading-[1.6]`}
            >
              <span className="font-['Climate_Crisis']  tracking-[0.1em]">
                Branding & Graphic Design{" "}
              </span>
              : Logo Design, Brand Identity Creation, Social Media Design
            </p>
            <p
              className={`${bricolage.className} text-sm sm:text-base lg:text-xl tracking-[0.05em] text-[#FBF4DB] leading-[1.6]`}
            >
              <span className="font-['Climate_Crisis']  tracking-[0.1em]">
                UI/UX Design{" "}
              </span>
              : User Research, Prototyping, Wireframing, Information
              Architecture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
