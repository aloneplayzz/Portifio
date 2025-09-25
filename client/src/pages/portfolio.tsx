import AnimatedCodeBackground from "@/components/AnimatedCodeBackground";
import ProfileSection from "@/components/ProfileSection";
import TechStackSection from "@/components/TechStackSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden" data-testid="portfolio-page">
      <AnimatedCodeBackground />
      <ProfileSection />
      <TechStackSection />
      <WorkProcessSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
