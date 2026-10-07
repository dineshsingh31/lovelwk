"use client";

import { useState } from "react";
import { usePrices } from "@/hooks/usePrices";
import { ArrowRight, Calculator } from "lucide-react";

export function PriceCalculator() {
  const { prices } = usePrices();
  const [metal, setMetal] = useState<"gold" | "silver">("gold");
  const [weight, setWeight] = useState<number>(10);

  const rate = metal === "gold" ? prices?.gold?.pricePerGram || 7450 : prices?.silver?.pricePerGram || 92;
  const rawPrice = rate * weight;
  const makingCharge = rawPrice * 0.08; // 8% making charge
  const gst = (rawPrice + makingCharge) * 0.03; // 3% GST
  const finalPrice = rawPrice + makingCharge + gst;

  return (
    <section className="py-24 bg-ivory">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-ink mb-4">Live Price Calculator</h2>
          <p className="text-muted">Transparent pricing. No hidden fees.</p>
        </div>

        <div className="bg-paper rounded-[24px] p-8 md:p-12 shadow-soft border border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <label className="font-mono text-xs tracking-label uppercase text-ink/70 mb-3 block">Select Metal</label>
              <div className="flex bg-ivory p-1 rounded-full border border-ink/10">
                <button
                  onClick={() => setMetal("gold")}
                  className={`flex-1 py-3 rounded-full text-sm font-medium transition-colors ${metal === "gold" ? "bg-gold text-ink shadow-sm" : "text-muted hover:text-ink"}`}
                >
                  24K Gold
                </button>
                <button
                  onClick={() => setMetal("silver")}
                  className={`flex-1 py-3 rounded-full text-sm font-medium transition-colors ${metal === "silver" ? "bg-charcoal text-paper shadow-sm" : "text-muted hover:text-ink"}`}
                >
                  999 Silver
                </button>
              </div>
            </div>

            <div>
              <label className="font-mono text-xs tracking-label uppercase text-ink/70 mb-3 block">Select Weight (Grams)</label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 5, 10, 50].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWeight(w)}
                    className={`py-3 rounded-card text-sm font-medium border transition-all ${weight === w ? "border-gold bg-gold/10 text-ink" : "border-ink/10 text-muted hover:border-gold/40"}`}
                  >
                    {w}g
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-ivory rounded-card p-8 border border-gold/20 flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Live Rate ({weight}g × ₹{rate.toLocaleString("en-IN")})</span>
                <span className="font-mono text-ink">₹{rawPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Making Charges (8%)</span>
                <span className="font-mono text-ink">₹{makingCharge.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">GST (3%)</span>
                <span className="font-mono text-ink">₹{gst.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="w-full h-px bg-gold/30 my-2" />
              <div className="flex justify-between items-center">
                <span className="font-medium text-ink">Total Estimate</span>
                <span className="font-mono text-3xl text-gold font-medium">₹{finalPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 bg-charcoal text-paper py-4 rounded-full hover:bg-ink transition-colors font-medium">
              <Calculator className="w-5 h-5" />
              Shop {weight}g {metal === "gold" ? "Gold" : "Silver"} Coin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
