'use client';
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Skills from "./Home/Skills";
import Contact from "./Home/Contact";

export function HomeClient() {
  return (
    <main className="space-y-12">
      <Hero />
      <Services />
      <Skills />
      <Contact />
    </main>
  );
}