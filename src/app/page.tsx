import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Blogs } from '@/components/sections/Blogs';
import { HowIThink } from '@/components/sections/HowIThink';
import { Contact } from '@/components/sections/Contact';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { FocusMode } from '@/components/ui/FocusMode';
import { DearDiEasterEgg } from '@/components/providers/DearDiEasterEgg';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <DearDiEasterEgg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Blogs />
        <HowIThink />
        <Contact />
      </main>
      <Footer />
      <FocusMode />
    </>
  );
}
