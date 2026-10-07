"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import Image from "next/image";

const DIVINE_COINS = [
  { id: "ganesh", name: "Shree Ganesh", image: "/coins/divine-ganesh.png", tagline: "Remover of Obstacles" },
  { id: "lakshmi", name: "Maa Lakshmi", image: "/coins/divine-lakshmi.png", tagline: "Goddess of Wealth" },
  { id: "durga", name: "Maa Durga", image: "/coins/divine-durga.png", tagline: "Divine Strength" },
  { id: "hanuman", name: "Shree Hanuman", image: "/coins/divine-hanuman.png", tagline: "Eternal Devotion" },
  { id: "radhakrishna", name: "Radha Krishna", image: "/coins/divine-radhakrishna.png", tagline: "Divine Love" },
  { id: "om", name: "Om", image: "/coins/divine-om.png", tagline: "Sacred Sound" },
];

export function DivineCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("ganesh");

  const scrollByCard = (dir: -1 | 1) => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    const childEl = track.querySelector<HTMLElement>("button[data-divine-card='true']");
    const child = childEl ?? (track.firstElementChild as HTMLElement | null);
    if (!child) return;

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const amount = child.clientWidth + gap;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-container mx-auto px-4 relative mt-16 pb-20">
      {/* Arrow Controls */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 hidden lg:block">
        <button
          onClick={() => scrollByCard(-1)}
          className="w-12 h-12 rounded-full bg-charcoal/90 border border-gold/40 flex items-center justify-center text-ivory hover:border-gold hover:bg-charcoal hover:scale-110 transition-all backdrop-blur-md cursor-pointer"
        >
          ←
        </button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 hidden lg:block">
        <button
          onClick={() => scrollByCard(1)}
          className="w-12 h-12 rounded-full bg-charcoal/90 border border-gold/40 flex items-center justify-center text-ivory hover:border-gold hover:bg-charcoal hover:scale-110 transition-all backdrop-blur-md cursor-pointer"
        >
          →
        </button>
      </div>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-pl-4"
        style={{ scrollbarWidth: "none" }}
      >
        {DIVINE_COINS.map((coin) => (
          <button
            key={coin.id}
            data-divine-card="true"
            onClick={() => setActiveId(coin.id)}
            className={cn(
              "relative flex-shrink-0 aspect-[4/5] w-[200px] sm:w-[220px] lg:w-[240px] flex flex-col items-start justify-between",
              "py-6 px-5 rounded-card snap-center transition-all duration-500 cursor-pointer text-left",
              "border",
              activeId === coin.id
                ? "border-gold bg-gradient-to-b from-ink/90 to-charcoal/90 shadow-[0_8px_30px_rgba(201,165,75,0.15)] scale-105"
                : "border-gold/20 bg-charcoal/50 hover:border-gold/40 hover:bg-charcoal/80"
            )}
          >
            {/* Active glow effect */}
            {activeId === coin.id && (
              <div
                className="absolute inset-0 rounded-card pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 30%, rgba(201, 165, 75, 0.15) 0%, transparent 60%)",
                }}
              />
            )}

            {/* Coin Image */}
            <div className="relative w-full aspect-square mb-4 flex-shrink-0 flex items-center justify-center">
              <div className={cn(
                "relative w-full h-full transition-transform duration-500",
                activeId === coin.id && "scale-105"
              )}>
                {/* Fallback gray circle instead of real image if not found */}
                <div className="absolute inset-0 m-4 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/30 text-xs text-center border border-ivory/20">
                  {coin.name} Image
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="w-full flex flex-col items-center">
              <h3 className={cn(
                "text-lg font-display font-medium text-center leading-tight mb-1 transition-colors w-full line-clamp-2 min-h-[2.8em]",
                activeId === coin.id ? "text-ivory" : "text-ivory/70"
              )}>
                {coin.name}
              </h3>
              <p className={cn(
                "font-mono text-[10px] uppercase tracking-label text-center mb-4 transition-colors",
                activeId === coin.id ? "text-gold" : "text-ivory/50"
              )}>
                {coin.tagline}
              </p>

              <div className="flex flex-row gap-2 flex-wrap justify-center">
                <span className="font-mono text-[10px] tracking-label text-gold bg-charcoal/80 px-3 py-1 rounded-full border border-gold/30 whitespace-nowrap">
                  24K Gold
                </span>
                <span className="font-mono text-[10px] tracking-label text-silver bg-charcoal/80 px-3 py-1 rounded-full border border-silver/30 whitespace-nowrap">
                  999 Silver
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Mobile dots */}
      <div className="flex justify-center mt-6 lg:hidden">
        <div className="flex gap-2">
          {DIVINE_COINS.map((coin) => (
            <button
              key={`dot-${coin.id}`}
              onClick={() => setActiveId(coin.id)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeId === coin.id ? "w-8 bg-gold" : "w-2 bg-ivory/20"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
