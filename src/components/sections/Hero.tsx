"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const coinY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-charcoal text-paper pt-[calc(var(--header-height)+var(--utility-bar-height))]"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/10 z-10" />
        {/* Placeholder for real hero image */}
        <div className="absolute inset-0 bg-charcoal" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="container relative z-20 min-h-screen flex items-center"
      >
        <div className="max-w-2xl py-10 lg:py-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-mono text-[12px] tracking-[0.12em] text-gold uppercase">
              Sacred Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display mb-6 max-w-[14ch]" style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            lineHeight: "1.05"
          }}>
            <span className="block text-gold">Divine</span>
            <span className="block text-paper">Designs</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-ivory/80 mb-10 max-w-lg leading-relaxed">
            Eternal spiritual motifs meticulously crafted into 24K gold and 999
            fine silver. Each piece tells a story of devotion.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/gold">
              <button className="group flex items-center gap-3 px-8 py-4 bg-gold text-ink rounded-full hover:bg-gold-hover transition-all duration-300 shadow-soft hover:shadow-soft-lg font-medium">
                Shop Coins
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/gifts">
              <button className="px-8 py-4 bg-transparent border border-gold text-gold rounded-full hover:bg-gold/10 transition-all duration-300 font-medium">
                Gifting
              </button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-silver">
             BIS-hallmarked · Assay certified · Insured delivery
          </div>
        </div>
      </motion.div>

      {/* Hero Coin (No background square, radial glow) */}
      <motion.div
        style={{ y: coinY }}
        className="hidden lg:block absolute right-[10%] top-[45%] -translate-y-1/2 z-10"
      >
        <div className="relative w-[400px] h-[400px]">
           {/* Radial Glow */}
           <div className="absolute inset-0 bg-gold-glow rounded-full blur-[80px]" />
           {/* Fallback Coin Placeholder */}
           <div className="absolute inset-0 rounded-full border-2 border-gold/30 bg-gradient-to-tr from-gold-hover/20 to-gold/40 flex items-center justify-center">
              <span className="text-gold font-display text-2xl">3D Coin Here</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
