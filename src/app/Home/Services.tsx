import React from "react";
import { Kalnia } from "next/font/google";

const kalnia = Kalnia({
  weight: ["400","600"],
  subsets: ["latin"],
  display: "swap",
});

const descriptions = [
  "I offer a range of graphic design services, including branding, logo design, and marketing materials like brochures and posters. Whether you need a new brand identity or refreshing visuals for your business, I'll work with you to ensure your brand stands out.",
  "I specialize in creating user-friendly and visually appealing websites, working alongside a programmer to ensure seamless functionality. I focus on the design and user experience while my colleague handles the technical aspects of web development.",
  "I create eye-catching visuals for social media platforms, including Instagram and Facebook, ensuring your content stands out and connects with your audience.",
  "I design interfaces that are both functional and intuitive, with a focus on user experience. I create prototypes, conduct user research, and deliver designs that engage and convert.",
];

const Services: React.FC = () => {
  return (
    <div className="max-w-5xl px-12 mx-auto">
      <section className="container mx-auto py-4">
        <h1
          className={`
          ${kalnia.className}
          text-5xl sm:text-7xl font-bold pb-0 sm:pb-12
          leading-[165.12px] tracking-[0.08em]
          text-left
          text-[#CE9CAC]
        `}
        >
          Services
        </h1>
      </section>

      {[
        "Graphic Design",
        "Web Design",
        "Social Media Design",
        "UI/UX Design",
      ].map((title, index) => (
        <section key={title} className="mb-8 ">
          <h2
            className={`font-['Climate_Crisis'] text-[#AA5486] text-2xl font-normal tracking-[0.06em] mb-4`}
          >
            {title}
          </h2>
          <p
            className={`${kalnia.className} text-sm sm:text-xl font-normal leading-[129%] tracking-[0.06em] text-black`}
          >
            {descriptions[index]}
          </p>
        </section>
      ))}
    </div>
  );
};

export default Services;
