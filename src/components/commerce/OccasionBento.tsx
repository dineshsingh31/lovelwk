"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const OCCASIONS = [
  { id: "wedding", title: "Wedding & Bridal", span: "col-span-1 md:col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1599643478514-4a120539c279?auto=format&fit=crop&q=80" },
  { id: "diwali", title: "Diwali Festivities", span: "col-span-1 md:col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1605342416047-975a5e3a388e?auto=format&fit=crop&q=80" },
  { id: "anniversary", title: "Anniversaries", span: "col-span-1 md:col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" },
  { id: "corporate", title: "Corporate Gifting", span: "col-span-1 md:col-span-2 row-span-1", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80" },
];

export function OccasionBento() {
  return (
    <section className="py-24 bg-paper">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">Gifting by Occasion</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Mark life's most precious milestones with purity. Our curated gifting collections come in premium packaging with personalized notes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {OCCASIONS.map((occ) => (
            <Link
              key={occ.id}
              href={`/gifts/${occ.id}`}
              className={`group relative overflow-hidden rounded-[24px] ${occ.span} shadow-sm hover:shadow-soft transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors z-10" />
              <Image
                src={occ.img}
                alt={occ.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent">
                <h3 className="font-display text-2xl text-paper mb-2">{occ.title}</h3>
                <div className="flex items-center gap-2 text-gold font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
