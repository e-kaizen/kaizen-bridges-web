import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Solutions } from "@/components/Solutions";
import { CaseStudies } from "@/components/CaseStudies";
import { Support } from "@/components/Support";
import { ContactButton } from "@/components/ContactButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Solutions />
      <CaseStudies />
      <Support />
      <ContactButton />
    </div>
  );
};

export default Index;