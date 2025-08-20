import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SubjectsSection from '../components/SubjectsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import LearningApproachSection from '../components/LearningApproachSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <SubjectsSection />
      <WhyChooseUsSection />
      <LearningApproachSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
