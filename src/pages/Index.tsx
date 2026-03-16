import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ThesisSection from "@/components/ThesisSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ThesisSection />
      <JourneySection />
      <SkillsSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
