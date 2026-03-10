import React from 'react';
import HeroSection from '../Website/HeroSection.jsx';
import TrustBar from '../Website/TrustBar.jsx';
import Services from '../Website/Services.jsx';
import Stats from '../Website/Stats.jsx';
import Process from '../Website/Process.jsx';
import Portfolio from '../Website/Portfolio.jsx';
import Testimonials from '../Website/Testimonials.jsx';
import Pricing from '../Website/Pricing.jsx';
import FAQ from '../Website/FAQ.jsx';
import Insights from '../Website/Insights.jsx';
import BigCta from '../Website/BigCta.jsx';
import ContactPage from '../pages/ContactPage.jsx';   

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Services />
      {/* <Stats /> */}
      <Process />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <Insights />
      <BigCta />
      <ContactPage />
    </>
  );
}

export default HomePage;