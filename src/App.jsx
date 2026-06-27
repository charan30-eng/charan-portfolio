import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import AuroraBackground from './components/AuroraBackground';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Articles from './sections/Articles';
import CodingProfiles from './sections/CodingProfiles';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import { portfolioData } from './data/portfolioData';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{portfolioData.seo.title}</title>
        <meta name="description" content={portfolioData.seo.description} />
        <meta name="keywords" content={portfolioData.seo.keywords} />
        <meta property="og:title" content={portfolioData.seo.title} />
        <meta property="og:description" content={portfolioData.seo.description} />
        <meta property="og:url" content={portfolioData.seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={portfolioData.seo.title} />
        <meta name="twitter:description" content={portfolioData.seo.description} />
      </Helmet>

      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <AuroraBackground />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Articles />
          <CodingProfiles />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
