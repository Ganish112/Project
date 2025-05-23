import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection';
import ClientsSection from '../components/Home/ClientsSection';
import FaqSection from '../components/Home/FaqSection';
import CtaSection from '../components/Home/CtaSection';
import Responsive from '../components/Home/Responsive';
import SEO from '../components/UI/SEO';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Web Development Company"
        description="Transform your digital presence with expert web development services. Custom websites, e-commerce solutions, and web applications built for success."
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Responsive />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default HomePage;