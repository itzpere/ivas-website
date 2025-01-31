'use client';
import Hero from "./Home/Hero";
import Services from "./Home/Services";

export function HomeClient() {
  return (
    <main className="space-y-16">
      <Hero />
      <Services />
    </main>
  );
}