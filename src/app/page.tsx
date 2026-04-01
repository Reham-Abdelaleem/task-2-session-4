import SkillsSection from "@/components/organisms/SkillsSection"
import NewsletterSection from "@/components/organisms/NewsletterSection"
import PartnersSection from "@/components/organisms/PartnersSection"
import PricingSection from "@/components/organisms/PricingSection"
import Navbar from "@/components/organisms/Navbar"
export default function page() {
  return (
    <div>
      <Navbar />
      <SkillsSection />
      <NewsletterSection />
      <PartnersSection />
      <PricingSection />
    </div>
  );
}
