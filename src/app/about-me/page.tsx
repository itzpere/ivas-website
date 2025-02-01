import { Kalnia } from "next/font/google";

const kalnia = Kalnia({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function AboutMe() {
  return (
    <div className="max-w-5xl px-4 sm:px-12 mx-auto">
      <section className="container mx-auto">
        <h1 className={`
          font-['Climate_Crisis']
          text-3xl sm:text-5xl 
          py-12 sm:py-24      
          font-normal
          text-left
          decoration-from-font
          decoration-skip-ink-none
          text-[#FF9A00]
          opacity-100
          transition-opacity
          duration-300
        `}>
          ABOUT ME
        </h1>

        <div className={`
          ${kalnia.className}
          space-y-4 sm:space-y-6  
          text-base sm:text-xl 
          font-normal
          pr-0 sm:pr-24       
          text-left
          decoration-from-font
          decoration-skip-ink-none
          pb-8 sm:pb-0           
        `}>
          <p>
            I'm a passionate freelance designer based in Montenegro, currently studying 
            Mechatronics at the University of Novi Sad, Serbia. With a solid background 
            in graphic design, web design, and branding, I work collaboratively with 
            clients to create visually appealing and user-friendly designs.
          </p>

          <p>
            In my free time, I contribute to the EESTEC Design Team, where I focus on 
            designing Instagram posts, creating branding materials, and collaborating 
            on various design projects. I was also entrusted with creating the visual 
            branding for my parents' business, which involved developing an entire 
            brand identity from scratch.
          </p>
        </div>
      </section>
    </div>
  );
};