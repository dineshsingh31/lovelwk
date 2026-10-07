"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

const COIN_2025_VARIANTS = [
  {
    id: "gold",
    name: "2025 Gold Coin",
    metal: "gold",
    tagline: "24K FINE GOLD • 10G",
    description: "Limited edition commemorative coin featuring intricate 2025 design",
    image: "/coins/2025-gold.png",
    price: "₹75,450",
    badge: "BESTSELLER",
  },
  {
    id: "silver",
    name: "2025 Silver Coin",
    metal: "silver",
    tagline: "999 FINE SILVER • 31.1G",
    description: "Limited edition commemorative coin featuring intricate 2025 design",
    image: "/coins/2025-silver.png",
    price: "₹2,865",
    badge: "NEW ARRIVAL",
  },
];

export function Coin2025Showcase() {
  const [activeVariant, setActiveVariant] = useState<"gold" | "silver">("gold");
  const currentCoin = COIN_2025_VARIANTS.find((c) => c.metal === activeVariant) || COIN_2025_VARIANTS[0];

  return (
    <section className="w-full py-section">
      <div className="max-w-[var(--grid-max)] mx-auto px-[var(--grid-gutter)]">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono-label text-accent mb-3 block">EXCLUSIVE RELEASE</span>
          <h2 className="font-display text-5xl md:text-6xl text-ivory mb-4">
            2025 Collection
          </h2>
          <p className="text-ivory-mute text-lg max-w-2xl mx-auto">
            Celebrate the new year with our limited edition commemorative coins, 
            meticulously crafted in both gold and silver variants.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-line/20">
          {/* Background gradient based on active variant */}
          <div 
            className={cn(
              "absolute inset-0 transition-all duration-700",
              activeVariant === "gold" 
                ? "bg-gradient-to-br from-amber-950/40 via-amber-900/20 to-yellow-900/40"
                : "bg-gradient-to-br from-slate-900/40 via-slate-800/20 to-blue-900/30"
            )}
          />
          
          {/* Radial spotlight effect */}
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none transition-opacity duration-700",
              activeVariant === "gold" ? "opacity-100" : "opacity-0"
            )}
            style={{
              background: "radial-gradient(ellipse at 60% 50%, rgba(201,162,75,0.15) 0%, transparent 60%)",
            }}
          />
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none transition-opacity duration-700",
              activeVariant === "silver" ? "opacity-100" : "opacity-0"
            )}
            style={{
              background: "radial-gradient(ellipse at 60% 50%, rgba(196,202,210,0.12) 0%, transparent 60%)",
            }}
          />

          {/* Content Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">
            
            {/* Left: Coin Image */}
            <div className="relative flex items-center justify-center">
              {/* Floating particles effect */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "absolute w-1 h-1 rounded-full animate-pulse",
                      activeVariant === "gold" ? "bg-gold-300" : "bg-silver-300"
                    )}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                      opacity: 0.4,
                    }}
                  />
                ))}
              </div>

              {/* Coin display with glow */}
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow ring */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-full blur-3xl transition-all duration-700",
                    activeVariant === "gold" 
                      ? "bg-gold-300/20" 
                      : "bg-silver-300/15"
                  )}
                />
                
                {/* Coin placeholder - replace with actual images */}
                <div className={cn(
                  "relative w-full h-full rounded-full flex items-center justify-center text-6xl font-display transition-all duration-700 shadow-2xl",
                  activeVariant === "gold"
                    ? "bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-600 text-amber-900"
                    : "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 text-slate-700"
                )}>
                  2025
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center space-y-6">
              
              {/* Badge */}
              <span className={cn(
                "inline-block self-start font-mono-label text-[10px] px-3 py-1.5 rounded-full border font-bold",
                activeVariant === "gold"
                  ? "bg-gold-500/10 text-gold-300 border-gold-500/30"
                  : "bg-silver-500/10 text-silver-300 border-silver-500/30"
              )}>
                {currentCoin.badge}
              </span>

              {/* Name */}
              <h3 className="font-display text-4xl md:text-5xl text-ivory leading-tight">
                {currentCoin.name}
              </h3>

              {/* Tagline */}
              <p className={cn(
                "font-mono-label text-sm",
                activeVariant === "gold" ? "text-gold-300" : "text-silver-300"
              )}>
                {currentCoin.tagline}
              </p>

              {/* Description */}
              <p className="text-ivory-mute text-base leading-relaxed">
                {currentCoin.description}
              </p>

              {/* Variant Toggle */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setActiveVariant("gold")}
                  className={cn(
                    "flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2",
                    activeVariant === "gold"
                      ? "bg-gold-500/20 border-gold-500 text-gold-300 shadow-lg shadow-gold-500/20"
                      : "bg-surface/40 border-line/40 text-ivory-mute hover:border-gold-500/40"
                  )}
                >
                  <span className="block font-mono-label text-[10px] mb-1">24K</span>
                  <span className="block text-sm">Gold</span>
                </button>
                <button
                  onClick={() => setActiveVariant("silver")}
                  className={cn(
                    "flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2",
                    activeVariant === "silver"
                      ? "bg-silver-500/20 border-silver-500 text-silver-300 shadow-lg shadow-silver-500/20"
                      : "bg-surface/40 border-line/40 text-ivory-mute hover:border-silver-500/40"
                  )}
                >
                  <span className="block font-mono-label text-[10px] mb-1">999</span>
                  <span className="block text-sm">Silver</span>
                </button>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-4 pt-4">
                <div>
                  <p className="font-mono-label text-[10px] text-ivory-mute mb-1">STARTING FROM</p>
                  <p className="text-3xl font-bold text-ivory tabular-nums">{currentCoin.price}</p>
                </div>
                <button className={cn(
                  "flex-1 px-8 py-4 rounded-lg font-semibold text-ink-0 transition-all duration-300 hover:scale-105 shadow-xl",
                  activeVariant === "gold"
                    ? "bg-gradient-to-r from-gold-700 via-gold-500 to-gold-300 hover:shadow-gold-500/40"
                    : "bg-gradient-to-r from-silver-700 via-silver-500 to-silver-300 hover:shadow-silver-500/40"
                )}>
                  View Details
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line/20">
                <div>
                  <p className="font-mono-label text-[9px] text-ivory-mute mb-1">PURITY</p>
                  <p className="text-sm font-semibold text-ivory">
                    {activeVariant === "gold" ? "999.9" : "999"}
                  </p>
                </div>
                <div>
                  <p className="font-mono-label text-[9px] text-ivory-mute mb-1">WEIGHT</p>
                  <p className="text-sm font-semibold text-ivory">
                    {activeVariant === "gold" ? "10g" : "31.1g"}
                  </p>
                </div>
                <div>
                  <p className="font-mono-label text-[9px] text-ivory-mute mb-1">MINTAGE</p>
                  <p className="text-sm font-semibold text-ivory">Limited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

