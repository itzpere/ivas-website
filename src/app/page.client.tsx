'use client';
import { useState, useEffect, useRef } from 'react';
import Hero from "./Home/Hero";
import Services from "./Home/Services"; 
import Skills from "./Home/Skills";
import Contact from "./Home/Contact";


export function useInView() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
}

export function HomeClient() {
  const [servicesRef, servicesVisible] = useInView();
  const [skillsRef, skillsVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  return (
    <main className="space-y-12">
      <div className="transition-all duration-700 ease-out">
        <Hero />
      </div>

      <div 
        ref={servicesRef}
        className={`transition-all duration-700 ease-out translate-y-6 opacity-0 ${
          servicesVisible ? 'translate-y-0 opacity-100' : ''
        }`}
      >
        <Services />
      </div>

      <div 
        ref={skillsRef}
        className={`transition-all duration-700 ease-out translate-y-6 opacity-0 ${
          skillsVisible ? 'translate-y-0 opacity-100' : ''
        }`}
      >
        <Skills />
      </div>

      <div 
        ref={contactRef}
        className={`transition-all duration-700 ease-out translate-y-6 opacity-0 ${
          contactVisible ? 'translate-y-0 opacity-100' : ''
        }`}
      >
        <Contact />
      </div>
    </main>
  );
}