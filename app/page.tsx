import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsNewtonSection } from "@/components/sections/WhatIsNewtonSection";
import { WhatWeOfferSection } from "@/components/sections/WhatWeOfferSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BackingSection } from "@/components/sections/BackingSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsNewtonSection />
      <WhatWeOfferSection />
      <PrinciplesSection />
      <AudienceSection />
      <BackingSection />
      <FinalCTASection />
    </>
  );
}
