"use client";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="relative w-full font-mozilla-headline">
      {/* main contents */}
      <div className="h-screen relative z-10 flex flex-col">
        {/* header */}
        <Header />
        <div className="flex-1 flex md:items-center md:justify-center">
          <Hero />
        </div>
      </div>

      <section className="h-screen flex itens-center justify-center">
        <Projects />
      </section>
    </main>
  );
}
