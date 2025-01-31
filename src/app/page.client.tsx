'use client';
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Skills from "./Home/Skills";

export function HomeClient() {
  return (
    <main className="space-y-16">
      <Hero />
      <Services />
        <Skills />
    </main>
  );
}