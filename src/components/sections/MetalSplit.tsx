"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MetalSplit() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[70vh] min-h-[500px]">
          {/* Gold Card */}
          <Link
            href="/gold"
            className="group relative overflow-hidden rounded-card bg-gradient-to-br from-[#1C1810] to-[#3A2F1A] p-12 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border border-gold/10"
          >
            <div className="relative z-10">
              <span className="font-mono text-xs tracking-label text-gold mb-4 block uppercase">
                24K GOLD
              </span>
              <h2 className="font-display text-5xl text-paper mb-4">
                Gold Collection
              </h2>
              <p className="text-paper/80 mb-6 max-w-sm">
                999.9 fine gold coins starting from 1 gram. BIS hallmarked,
                assay certified.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 mt-auto">
              <div className="font-mono text-gold text-lg">
                From ₹8,200
              </div>
              <div className="flex items-center gap-2 text-ink bg-gold hover:bg-gold-light w-max px-6 py-3 rounded-full font-medium transition-colors">
                <span>Shop Gold</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Decorative Gold Glow & Image Placeholder */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square bg-gold-glow rounded-full blur-[80px] group-hover:blur-[100px] transition-all" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[60%] aspect-square border-2 border-gold/30 rounded-full flex items-center justify-center bg-gradient-to-br from-gold/10 to-transparent">
              <span className="text-gold/50 font-display text-xl">Gold Coin</span>
            </div>
          </Link>

          {/* Silver Card */}
          <Link
            href="/silver"
            className="group relative overflow-hidden rounded-card bg-gradient-to-br from-[#F4F6F9] to-[#E2E6ED] p-12 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border border-silver/30"
          >
            <div className="relative z-10">
              <span className="font-mono text-xs tracking-label text-silver-dark mb-4 block uppercase">
                999 SILVER
              </span>
              <h2 className="font-display text-5xl text-ink mb-4">
                Silver Collection
              </h2>
              <p className="text-ink/70 mb-6 max-w-sm">
                Pure 999 silver coins from 10 grams to 1 kg. Investment grade,
                secure packaging.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 mt-auto">
              <div className="font-mono text-ink/80 text-lg">
                From ₹950
              </div>
              <div className="flex items-center gap-2 text-ink border border-ink/20 hover:bg-ink hover:text-paper w-max px-6 py-3 rounded-full font-medium transition-colors">
                <span>Shop Silver</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Decorative Silver Image Placeholder */}
            <div className="absolute bottom-[-5%] right-[-5%] w-[60%] aspect-square border-2 border-silver/50 rounded-full flex items-center justify-center bg-gradient-to-br from-silver/20 to-transparent">
              <span className="text-ink/40 font-display text-xl">Silver Coin</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
