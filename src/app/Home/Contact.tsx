import React from "react";
import { useState, useEffect } from "react";

interface DynamicSizing {
    fontSize: string;
    topOffset: string;
  }
  
  export const useContainerDimensions = (containerId: string): DynamicSizing => {
    const [dimensions, setDimensions] = useState<DynamicSizing>({
      fontSize: "64px",
      topOffset: "-4rem",
    });
  
    useEffect(() => {
      const container = document.getElementById(containerId);
      if (!container) return;
  
      const updateDimensions = (width: number, height: number) => {
        const fontSize = width / 11;
        // Calculate topOffset as percentage of container height
        const topOffset = fontSize / 1.4 + (height * 0.018); 
        
        setDimensions({
          fontSize: `${fontSize}px`,
          topOffset: `${topOffset}px`,
        });
      };
  
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          updateDimensions(
            entry.contentRect.width,
            entry.contentRect.height
          );
        }
      });
  
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }, [containerId]);
  
    return dimensions;
  };
const Contact = () => {
  const { fontSize, topOffset } = useContainerDimensions("contact-container");

  return (
    <section className="relative w-full max-w-2xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="contact-container">
      <h2
        className="relative [-webkit-text-stroke:0.5px_#FFFFFF] w-full text-center font-['Climate_Crisis'] tracking-[0.09em] text-[#AA5486] z-10 mb-6"
        style={{ fontSize, top: topOffset }}
      >
        Contact Me!
      </h2>

      <div className="w-full bg-[#AA5486] rounded-[40px] sm:rounded-[68px] p-4 sm:p-8 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* CONTACT */}
          <div className="w-full lg:w-1/2 bg-[rgba(251,244,219,0.22)] rounded-[28px] sm:rounded-[40px] p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 sm:gap-6 text-white">
              <div>
                <h3 className="font-['Climate_Crisis'] text-xl sm:text-2xl lg:text-[32px] leading-[141%] tracking-[0.04em] mb-2">
                  Email
                </h3>
                <p className="text-sm sm:text-md">You can reach me at:</p>
                <p className="text-base sm:text-lg lg:text-2xl break-all">miniciva163@gmail.com</p>
              </div>
              
              <div>
                <h3 className="font-['Climate_Crisis'] text-xl sm:text-2xl lg:text-[32px] leading-[141%] tracking-[0.04em] mb-2">
                  Social Media
                </h3>
                <p className="text-sm sm:text-md">Follow me or get in touch via social media:</p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg lg:text-2xl">
                  <li>
                    <span className="font-bold">Instagram:</span>{' '}
                    <a 
                      href="https://instagram.com/miniciva" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @miniciva
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">LinkedIn:</span>{' '}
                    <a 
                      href="https://linkedin.com/in/iva-minic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Iva Minić
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LOVE YOU GUYS AND BUTTON */}
          <div className="w-full lg:w-1/2 grid grid-rows-[auto_1fr] lg:grid-rows-[1fr_auto] gap-4 sm:gap-8">
            <p className="font-bricolage text-base sm:text-lg lg:text-2xl leading-[141%] tracking-[0.04em] text-white">
              <span className="font-extrabold">I'd love to hear from you! </span> <br />
              Whether you're interested in collaborating on a design project, 
              have any questions, or just want to chat, feel free to get in touch.
            </p>

            <button className="
              w-full py-3 sm:py-4 px-4
              bg-[rgba(251,244,219,0.86)]
              shadow-[4px_8px_4px_rgba(0,0,0,0.25)]
              sm:shadow-[6px_13px_5.7px_rgba(0,0,0,0.25)]
              rounded-[32px] sm:rounded-[49px]
              hover:bg-[rgba(251,244,219,1)]
              transition-colors
              self-end
            ">
              <span className="
                font-['Bricolage_Grotesque']
                font-extrabold
                text-base sm:text-2xl lg:text-[36px]
                leading-none
                tracking-[0.04em]
                text-[#AA5486]
                whitespace-nowrap
                block
                w-full
                text-center
              ">
                Send me a Message!
              </span>
            </button>
          </div>
        </div>

        <p className="font-bricolage px-4 sm:px-8 py-2 font-extrabold text-sm sm:text-lg leading-[141%] tracking-[0.04em] text-white mt-6 lg:mt-12">
          Let's Work Together! If you're interested in working with me, you can fill out the contact form 
          on my website, and I'll get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default Contact;