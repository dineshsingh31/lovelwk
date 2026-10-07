"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { MetalPricePill } from "./MetalPricePill";
import { MobileMenu } from "./MobileMenu";
import { BRAND } from "@/lib/config";

const NAV_ITEMS = [
  { label: "GOLD", href: "/gold" },
  { label: "SILVER", href: "/silver" },
  { label: "LEARN", href: "/learn" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/90 backdrop-blur-md shadow-soft"
            : "bg-ivory"
        }`}
        style={{ 
          height: "var(--header-height)",
        }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-label text-ink hover:text-gold transition-colors relative group uppercase font-medium"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            {/* Lotus icon placeholder */}
            <svg
              className="w-5 h-5 text-gold mb-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2ZM6 10C6 10 3 12 3 15C3 16.7 4.3 18 6 18C7.7 18 9 16.7 9 15C9 12 6 10 6 10ZM18 10C18 10 15 12 15 15C15 16.7 16.3 18 18 18C19.7 18 21 16.7 21 15C21 12 18 10 18 10ZM12 14C12 14 9 16 9 19C9 20.7 10.3 22 12 22C13.7 22 15 20.7 15 19C15 16 12 14 12 14Z" />
            </svg>
            <span className="font-display text-2xl text-ink font-semibold tracking-wide">
              {BRAND.name || "LoveLWK"}
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <MetalPricePill />
            <button
              aria-label="Search"
              className="hidden md:block p-2 text-ink hover:text-gold transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="p-2 text-ink hover:text-gold transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              aria-label="Menu"
              className="md:hidden p-2 text-ink hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
