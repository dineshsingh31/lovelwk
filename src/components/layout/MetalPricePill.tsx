"use client";

import { useState, useEffect } from "react";
import { usePrices } from "@/hooks/usePrices";

export function MetalPricePill() {
  const { prices, loading } = usePrices();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading || !prices.gold || !prices.silver) {
    return (
      <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-ivory shadow-sm min-w-[200px]">
        <span className="font-mono text-xs text-ink/50 animate-pulse">Loading live prices...</span>
      </div>
    );
  }

  // Parse time safely
  const timeStr = new Date(prices.lastUpdated).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold/30 bg-ivory shadow-sm">
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[11px] tracking-label text-gold uppercase">AU</span>
        <span className="font-mono text-xs text-ink font-medium">
          ₹{prices.gold.pricePerGram.toLocaleString("en-IN")}
        </span>
        <span className={`text-[10px] ${prices.gold.delta > 0 ? "text-green-600" : "text-red-600"}`}>
          {prices.gold.delta > 0 ? "▲" : "▼"}
        </span>
      </div>
      <div className="w-px h-3 bg-gold/30" />
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[11px] tracking-label text-silver-dark uppercase">AG</span>
        <span className="font-mono text-xs text-ink font-medium">
          ₹{prices.silver.pricePerGram.toLocaleString("en-IN")}
        </span>
        <span className={`text-[10px] ${prices.silver.delta > 0 ? "text-green-600" : "text-red-600"}`}>
          {prices.silver.delta > 0 ? "▲" : "▼"}
        </span>
      </div>
      <div className="w-px h-3 bg-gold/30" />
      <div className="text-[10px] text-ink/50 font-mono">
        {timeStr}
      </div>
    </div>
  );
}
