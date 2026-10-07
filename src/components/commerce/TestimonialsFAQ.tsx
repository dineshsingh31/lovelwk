"use client";

import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Priya M.", text: "The presentation of the 24K gold coin was breathtaking. Perfect gift for my parents' anniversary." },
  { name: "Rahul S.", text: "Transparent pricing and quick delivery. The live price calculator gave me exact estimates before buying." },
  { name: "Anita D.", text: "I've purchased silver bullion from many places, but the BIS hallmark and quality here is unmatched." },
];

const FAQS = [
  { q: "How is the live price calculated?", a: "Our live prices are synced directly with market rates, updating every 60 seconds. The final price includes a standard making charge and 3% GST." },
  { q: "What is your buy-back policy?", a: "We offer a 100% transparent buy-back policy. You can sell your LoveLWK coins back to us at the prevailing market rate, minus nominal processing fees." },
  { q: "Are your products certified?", a: "Yes, every single gold and silver coin is BIS hallmarked and comes with an assay certificate guaranteeing its purity." },
  { q: "Is the shipping secure?", a: "Absolutely. We use tamper-proof packaging and fully insured logistics partners. Your purchase is 100% risk-free until it reaches your hands." },
];

export function TestimonialsFAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="py-24 bg-ivory">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Testimonials */}
          <div>
            <h2 className="font-display text-4xl text-ink mb-12">Trusted by Patrons</h2>
            <div className="space-y-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-paper p-8 rounded-[20px] shadow-sm">
                  <div className="flex text-gold mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-ink/80 text-lg italic mb-6">"{t.text}"</p>
                  <p className="font-medium text-ink">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <h2 className="font-display text-4xl text-ink mb-12">Common Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-paper rounded-[20px] overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-medium text-ink text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
