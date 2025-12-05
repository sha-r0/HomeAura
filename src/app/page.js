import AboutSection from "@/component/AboutSection";
import ExpertiseSection from "@/component/ExpertiseSection";
import HeroSection from "@/component/Hero";
import PortfolioSection from "@/component/PortfolioSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <ExpertiseSection/>
      <PortfolioSection/>
    </main>
  );
}
