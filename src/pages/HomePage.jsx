import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection';
import ClientsSection from '../components/Home/ClientsSection';
import FaqSection from '../components/Home/FaqSection';
import CtaSection from '../components/Home/CtaSection';
import Responsive from '../components/Home/Responsive'
const HomePage = () => {
  useEffect(() => {
    document.title = 'Obsidium | Web Development Company';
  }, []);
  
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <Responsive />
      <FaqSection />
      <CtaSection />
    </>
  );
};
//      <ClientsSection />

export default HomePage;