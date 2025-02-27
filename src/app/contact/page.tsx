"use client";
import React from "react";
import { useContainerDimensions } from "./hooks";

export default function Contact() {
  const { fontSize, topOffset } = useContainerDimensions("contact-container");
  
  return (
    <section
      className="relative w-full max-w-2xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      id="contact-container"
    >
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
                <p className="text-base sm:text-lg lg:text-2xl break-all">
                  miniciva163@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-['Climate_Crisis'] text-xl sm:text-2xl lg:text-[32px] leading-[141%] tracking-[0.04em] mb-2">
                  Social Media
                </h3>
                <p className="text-sm sm:text-md">
                  Follow me or get in touch via social media:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg lg:text-2xl">
                  <li>
                    <span className="font-bold">Instagram:</span>{" "}
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
                    <span className="font-bold">LinkedIn:</span>{" "}
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
            <form className="flex flex-col gap-4 self-end w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 px-4 
        bg-[#FBF4DB]
        rounded-[20px]
        text-black
        font-bricolage
        focus:outline-none
        focus:bg-[rgba(251,244,219,1)]
        placeholder:font-['Bricolage_Grotesque']
        placeholder:text-lg
        placeholder:font-bold
        placeholder:leading-[33.84px]
        placeholder:tracking-[0.04em]
        placeholder:text-left
        placeholder-black
        [text-underline-position:from-font]
        [text-decoration-skip-ink:none]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 
        bg-[#FBF4DB]
        rounded-[20px]
        text-black
        font-bricolage
        focus:outline-none
        focus:bg-[rgba(251,244,219,1)]
        placeholder:font-['Bricolage_Grotesque']
placeholder:text-lg        placeholder:font-bold
        placeholder:leading-[33.84px]
        placeholder:tracking-[0.04em]
        placeholder:text-left
        placeholder-black
        [text-underline-position:from-font]
        [text-decoration-skip-ink:none]"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full py-3 px-4 
        bg-[#FBF4DB]
        rounded-[20px]
        text-black
        font-bricolage
        resize-none
        focus:outline-none
        focus:bg-[rgba(251,244,219,1)]
        placeholder:font-['Bricolage_Grotesque']
placeholder:text-lg        placeholder:font-bold
        placeholder:leading-[33.84px]
        placeholder:tracking-[0.04em]
        placeholder:text-left
        placeholder-black
        [text-underline-position:from-font]
        [text-decoration-skip-ink:none]"
              />

              <button
                type="submit"
                className="w-full py-3 sm:py-4 px-4
        bg-[#FBF4DB]
        shadow-[4px_8px_4px_rgba(0,0,0,0.25)]
        sm:shadow-[6px_13px_5.7px_rgba(0,0,0,0.25)]
        rounded-[32px] sm:rounded-[49px]
        hover:bg-[rgba(251,244,219,1)]
        transition-colors"
              >
                <span
                  className="
        font-['Bricolage_Grotesque']
        font-extrabold
        text-base sm:text-2xl lg:text-[36px]
        leading-none
        tracking-[0.04em]
        text-[#AA5486]
        whitespace-nowrap
        block
        w-full
        text-center"
                >
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>

        <p className="font-bricolage px-4 sm:px-8 py-2 font-extrabold text-sm sm:text-lg leading-[141%] tracking-[0.04em] text-white mt-6 lg:mt-12">
          Let's Work Together! If you're interested in working with me, you can
          fill out the contact form on my website, and I'll get back to you as
          soon as possible.
        </p>
      </div>
    </section>
  );
}
