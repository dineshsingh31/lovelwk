"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: "Gold", href: "/gold" },
  { label: "Silver", href: "/silver" },
  { label: "Learn", href: "/learn" },
  { label: "Buyback", href: "/buyback" },
  { label: "Cart", href: "/cart" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-cream shadow-warm-lg">
        <div className="p-6">
          <button
            onClick={onClose}
            className="ml-auto block p-2 text-forest hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="mt-8 space-y-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block font-display text-2xl text-forest hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
