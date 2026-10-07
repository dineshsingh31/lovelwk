"use client";

import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { MetalSplit } from "@/components/sections/MetalSplit";
import { PriceCalculator } from "@/components/commerce/PriceCalculator";
import { DivineCarousel } from "@/components/commerce/DivineCarousel";
import { OccasionBento } from "@/components/commerce/OccasionBento";
import { ProcessSteps } from "@/components/commerce/ProcessSteps";
import { LearnCards } from "@/components/commerce/LearnCards";
import { TestimonialsFAQ } from "@/components/commerce/TestimonialsFAQ";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />
      <main className="bg-ivory">
        {/* 2. HERO (DARK) */}
        <Hero />
        
        {/* 3. TRUST STRIP (LIGHT) */}
        <TrustStrip />
        
        {/* 4. SHOP BY METAL (LIGHT) */}
        <MetalSplit />
        
        {/* 5. LIVE PRICE + CALCULATOR (LIGHT) */}
        <PriceCalculator />

        {/* 6. DIVINE DESIGNS (DARK) */}
        <section className="pt-24 bg-charcoal text-paper overflow-hidden">
           <div className="container text-center mb-4">
              <h2 className="font-display text-gold mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                 Divine Designs
              </h2>
              <p className="text-ivory/80 max-w-2xl mx-auto text-lg">
                 Eternal spiritual motifs meticulously crafted into 24K gold and 999 fine silver.
              </p>
           </div>
           <DivineCarousel />
        </section>

        {/* 7. GIFTING BY OCCASION (LIGHT) */}
        <OccasionBento />

        {/* 8. WHY LOVELWK / PROCESS (LIGHT) */}
        <ProcessSteps />

        {/* 9. LEARN (LIGHT) */}
        <LearnCards />

        {/* 10. REVIEWS + FAQ (LIGHT) */}
        <TestimonialsFAQ />

      </main>
      <Footer />
    </>
  );
}
