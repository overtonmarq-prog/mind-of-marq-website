import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { SystemOverview } from "@/components/sections/SystemOverview";
import { AgePathway } from "@/components/sections/AgePathway";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { StageExperience } from "@/components/sections/StageExperience";
import { SchoolsPartnerships } from "@/components/sections/SchoolsPartnerships";
import { MissionBlock } from "@/components/sections/MissionBlock";
import { PartnerCallout } from "@/components/sections/PartnerCallout";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <SystemOverview />
        <AgePathway />
        <FeaturedProducts />
        <StageExperience />
        <SchoolsPartnerships />
        <MissionBlock />
        <PartnerCallout />
        <FooterCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
