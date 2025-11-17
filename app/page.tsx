import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import GitHubContributions from "@/components/sections/GitHubContributions";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ParallaxBanner from "@/components/ParallaxBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <ParallaxBanner 
        title="20+ Projects Delivered"
        subtitle="Building scalable solutions that make a difference"
        gradient="from-slate-900 via-slate-800 to-slate-900"
      />
      <Projects />
      <Skills />
      <GitHubContributions />
      <Education />
      <ParallaxBanner 
        title="Let's Build Something Amazing"
        subtitle="Ready to bring your ideas to life"
        gradient="from-slate-900 via-slate-800 to-slate-900"
      />
      <Contact />
      <Footer />
    </main>
  );
}

