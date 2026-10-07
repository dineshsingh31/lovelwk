"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  { title: "Understanding Purity: 999 vs 916", category: "Guide", readTime: "4 min read" },
  { title: "How to Safely Store Your Bullion", category: "Care", readTime: "3 min read" },
  { title: "The LoveLWK Buy-back Policy Explained", category: "Policy", readTime: "5 min read" },
];

export function LearnCards() {
  return (
    <section className="py-24 bg-paper">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl text-ink mb-4">Knowledge Hub</h2>
            <p className="text-muted">Empower your investment journey with expert insights on precious metals.</p>
          </div>
          <Link href="/learn" className="flex items-center gap-2 text-gold font-medium hover:text-gold-hover transition-colors">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <Link key={idx} href="/learn" className="group block bg-ivory rounded-[20px] p-8 hover:bg-gold/5 transition-colors border border-transparent hover:border-gold/20">
              <div className="flex justify-between items-center mb-16">
                <span className="font-mono text-xs tracking-label uppercase text-gold">{article.category}</span>
                <span className="text-xs text-muted">{article.readTime}</span>
              </div>
              <h3 className="font-display text-2xl text-ink mb-4 group-hover:text-gold-hover transition-colors">{article.title}</h3>
              <div className="flex items-center gap-2 text-ink text-sm font-medium">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
