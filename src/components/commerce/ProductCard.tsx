"use client";

import { cn } from "@/lib/cn";
import type { Coin } from "@/data/coins";
import { useMetalPrice } from "@/hooks/useMetalPrice";
import { calculatePrice } from "@/lib/pricing";
import { formatPrice } from "@/lib/config";
import { CoinPosterSVG } from "./CoinPosterSVG";
import Link from "next/link";

interface ProductCardProps {
  coin: Coin;
  className?: string;
}

export function ProductCard({ coin, className }: ProductCardProps) {
  const prices = useMetalPrice();
  const spot =
    coin.metal === "gold" ? prices.goldPerGram : prices.silverPerGram;
  const price = calculatePrice(
    coin.weightGrams,
    coin.fineness,
    spot,
    coin.pricing.premiumPct
  );
  const perGram = price / coin.weightGrams;
  const isOutOfStock = coin.stock.status === "out_of_stock";
  const isLowStock = coin.stock.status === "low_stock";
  const isGold = coin.metal === "gold";

  return (
    <Link
      href={`/coins/${coin.slug}`}
      className={cn(
        "group relative block",
        "overflow-hidden transition-all duration-300",
        "rounded-card shadow-lg hover:shadow-2xl hover:-translate-y-1",
        isOutOfStock && "opacity-60",
        className
      )}
      style={{
        background: isGold
          ? "linear-gradient(135deg, #FFFFFF 0%, #FFF8F0 50%, #F5EFE7 100%)"
          : "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #F0F2F4 100%)",
      }}
    >
      {/* Card image area — 3:4 ratio with consistent coin size */}
      <div className="relative aspect-[3/4] flex items-center justify-center overflow-hidden">
        {/* Multi-layered lighting effect (PMJ style) */}
        <div
          className="absolute inset-0"
          style={{
            background: isGold
              ? "radial-gradient(ellipse at 50% 30%, rgba(255,223,138,0.4) 0%, rgba(255,223,138,0.15) 40%, transparent 70%)"
              : "radial-gradient(ellipse at 50% 30%, rgba(226,232,240,0.5) 0%, rgba(226,232,240,0.2) 40%, transparent 70%)",
          }}
        />
        {/* Bottom shadow for depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: isGold
              ? "linear-gradient(to top, rgba(120,80,30,0.08), transparent)"
              : "linear-gradient(to top, rgba(71,85,105,0.06), transparent)",
          }}
        />

        {/* Top-left: spec label */}
        <span className={cn(
          "absolute top-3 left-3 font-mono-label text-[9px] z-10 font-semibold px-2 py-1 rounded backdrop-blur-sm",
          isGold 
            ? "text-amber-900 bg-amber-50/80" 
            : "text-slate-700 bg-white/80"
        )}>
          {coin.metal === "gold" ? "GOLD" : "SILVER"} {coin.purityLabel} ·{" "}
          {coin.weightGrams} G
        </span>

        {/* Top-right: badge */}
        {(isLowStock || coin.limited) && (
          <span
            className={cn(
              "absolute top-3 right-3 z-10",
              "font-mono-label text-[8px] px-2 py-1",
              "border rounded-md font-bold",
              isLowStock
                ? "text-orange-600 border-orange-400 bg-orange-50/80"
                : "text-rose-600 border-rose-400 bg-rose-50/80"
            )}
          >
            {isLowStock ? "LOW STOCK" : "LIMITED"}
          </span>
        )}

        {/* Coin SVG — FIXED size for all cards */}
        <CoinPosterSVG
          metal={coin.metal}
          size={180}
          className="relative z-[2] transition-transform duration-[var(--dur-md)] group-hover:scale-110 drop-shadow-lg"
        />
      </div>

      {/* Card content */}
      <div className={cn(
        "p-6",
        isGold ? "bg-white/60" : "bg-white/70",
      )}>
        <h3 className={cn("text-base font-semibold mb-2 truncate", isGold ? "text-amber-950" : "text-slate-900")}>
          {coin.name}
        </h3>
        <p className={cn("text-2xl font-bold tabular-nums mb-1", isGold ? "text-amber-900" : "text-slate-800")}>
          {formatPrice(price)}
        </p>
        <p className={cn("font-mono-label text-[10px] mt-1", isGold ? "text-amber-700/70" : "text-slate-700/70")}>
          {formatPrice(perGram)}/G · INCL. PREMIUM
        </p>

        {isOutOfStock && (
          <span className={cn("inline-block mt-3 font-mono-label text-[9px] border px-3 py-1 rounded-md font-semibold", isGold ? "text-amber-700 border-amber-300 bg-amber-100/40" : "text-slate-700 border-slate-300 bg-slate-100/40")}>
            NOTIFY ME
          </span>
        )}
      </div>
    </Link>
  );
}
