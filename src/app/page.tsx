import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Timeline } from "@/components/timeline";
import { TechStack } from "@/components/tech-stack";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] selection:bg-rose-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Timeline />
      <TechStack />
      <Team />
      <Contact />
    </main>
  );
}
