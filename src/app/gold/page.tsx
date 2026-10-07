"use client";

import { getCoinsByMetal } from "@/data/coins";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { ToastContainer } from "@/components/ui/Toast";
import { useState } from "react";
import { cn } from "@/lib/cn";

const WEIGHT_FILTERS = [
  { label: "All", value: "all" },
  { label: "5 g", value: "5" },
  { label: "10 g", value: "10" },
  { label: "20 g", value: "20" },
  { label: "1 oz", value: "31.1035" },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Weight: Low → High", value: "weight-asc" },
  { label: "Weight: High → Low", value: "weight-desc" },
];

export default function GoldPage() {
  const [weightFilter, setWeightFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [hideOutOfStock, setHideOutOfStock] = useState(false);

  const allCoins = getCoinsByMetal("gold");

  let coins = allCoins.filter((c) => {
    if (weightFilter !== "all" && c.weightGrams.toString() !== weightFilter) return false;
    if (hideOutOfStock && c.stock.status === "out_of_stock") return false;
    return true;
  });

  coins = [...coins].sort((a, b) => {
    switch (sortBy) {
      case "weight-asc": return a.weightGrams - b.weightGrams;
      case "weight-desc": return b.weightGrams - a.weightGrams;
      case "price-asc": return a.weightGrams - b.weightGrams; // approximate
      case "price-desc": return b.weightGrams - a.weightGrams;
      default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div data-metal="gold">
      <ToastContainer />
      <SiteHeader />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 via-amber-100/40 to-white border-b-2 border-gold-300/30">
        <div className="max-w-[var(--grid-max)] mx-auto px-[var(--grid-gutter)]">
          <Reveal>
            <p className="font-mono-label text-accent mb-3 text-[10px]">
              GOLD COLLECTION
            </p>
            <h1
              className="font-[family-name:var(--font-display)] text-amber-950 mb-6 drop-shadow-sm"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Our Gold Coins
            </h1>
            <p className="text-amber-900/70 max-w-lg text-lg leading-relaxed font-medium">
              24-karat gold coins in weights from 5 grams to 1 troy ounce. Each coin is
              individually assayed, serial-numbered and delivered insured.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter bar — horizontal chips */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-sm border-b-2 border-gold-200/50 shadow-sm">
        <div className="max-w-[var(--grid-max)] mx-auto px-[var(--grid-gutter)] py-3 flex items-center gap-4 overflow-x-auto">
          {/* Weight chips */}
          <div className="flex items-center gap-2 shrink-0">
            {WEIGHT_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setWeightFilter(f.value)}
                className={cn(
                  "px-4 py-2 text-xs font-mono-label rounded-full border-2 transition-all cursor-pointer font-semibold",
                  weightFilter === f.value
                    ? "bg-gold-300/20 border-gold-500 text-gold-700 shadow-md"
                    : "border-gold-200 text-amber-700 hover:text-amber-900 hover:border-gold-400 hover:bg-amber-50/50"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-line shrink-0" />

          {/* Hide out of stock */}
          <label className="flex items-center gap-2 text-amber-800 text-xs cursor-pointer shrink-0 font-medium">
            <input
              type="checkbox"
              checked={hideOutOfStock}
              onChange={(e) => setHideOutOfStock(e.target.checked)}
              className="accent-gold-500"
            />
            Hide out of stock
          </label>

          <div className="flex-1" />

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border-2 border-gold-300 text-amber-900 text-xs px-4 py-2 rounded-lg cursor-pointer focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-300/30 font-medium"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Grid — gold uses 2-column editorial layout */}
      <section className="py-section bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30">
        <div className="max-w-[var(--grid-max)] mx-auto px-[var(--grid-gutter)]">
          <p className="font-mono-label text-amber-700/70 text-[10px] mb-8 tracking-wider font-bold">
            {coins.length} {coins.length === 1 ? "COIN" : "COINS"}
          </p>

          {coins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coins.map((coin, i) => (
                <Reveal key={coin.id} stagger={i}>
                  <ProductCard coin={coin} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-amber-700/50">No coins match your filters.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
