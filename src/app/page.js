"use client";

import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SubjectsSection from '../components/SubjectsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ClassFormatsSection from '../components/ClassFormatsSection';
import LearningApproachSection from '../components/LearningApproachSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FreeDemoSection from '../components/FreeDemoSection';
import RegistrationCTASection from '../components/RegistrationCTASection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import BookDemoModal from '../components/BookDemoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-20">
      <HeroSection   onOpenModal={handleOpenModal} />
      {/* <AboutSection /> */}
      <ClassFormatsSection />
      <SubjectsSection />

      <LearningApproachSection />

      {/* <WhyChooseUsSection /> */}

      <TestimonialsSection />
      {/* <FreeDemoSection onOpenModal={handleOpenModal} /> */}
      {/* <RegistrationCTASection onOpenModal={handleOpenModal} /> */}
      <FAQSection />
      {/* <CTASection /> */}
      
      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
