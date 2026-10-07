"use client";

import { Shield, CheckCircle, Lock, Truck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "100% Authentic",
    subtitle: "Certified purity, every coin",
  },
  {
    icon: CheckCircle,
    title: "BIS Hallmarked",
    subtitle: "Bureau of Indian Standards approved",
  },
  {
    icon: Truck,
    title: "Insured Delivery",
    subtitle: "Safe transit from vault to doorstep",
  },
  {
    icon: Lock,
    title: "Secure Packaging",
    subtitle: "Tamper-proof delivery",
  },
];

export function TrustStrip() {
  return (
    <section className="relative py-16 bg-paper overflow-hidden shadow-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gold/10">
                <item.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-ink mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-ink/70">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
