import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SubjectsSection from '../components/SubjectsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ClassFormatsSection from '../components/ClassFormatsSection';
import LearningApproachSection from '../components/LearningApproachSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RegistrationCTASection from '../components/RegistrationCTASection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <SubjectsSection />
      <WhyChooseUsSection />
      <ClassFormatsSection />
      <LearningApproachSection />
      <TestimonialsSection />
      <RegistrationCTASection />
      <FAQSection />
      {/* <CTASection /> */}
    </div>
  );
}
