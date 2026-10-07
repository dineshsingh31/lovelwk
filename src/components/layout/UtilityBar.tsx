"use client";

import { Shield, CheckCircle, Lock, Truck, Users } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Shield, text: "100% Authentic" },
  { icon: CheckCircle, text: "BIS Hallmarked" },
  { icon: Lock, text: "Secure Packaging" },
  { icon: Truck, text: "Pan India Delivery" },
];

export function UtilityBar() {
  return (
    <div className="bg-charcoal text-gold-light text-xs h-10 flex items-center w-full z-50">
      <div className="container flex items-center justify-between">
        {/* Left: Trust claims */}
        <div className="flex items-center gap-4 md:gap-6">
          {TRUST_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <item.icon className="w-3.5 h-3.5" strokeWidth={2} />
              <span className="hidden sm:inline font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Right: Social proof */}
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" strokeWidth={2} />
          <span className="hidden md:inline font-medium">Trusted by 50,000+ Customers</span>
        </div>
      </div>
    </div>
  );
}
