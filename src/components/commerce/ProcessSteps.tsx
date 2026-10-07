"use client";

const STEPS = [
  { num: "01", title: "Select & Order", desc: "Choose your pure gold or silver coin and lock in the live market rate." },
  { num: "02", title: "Rigorous Assay", desc: "Every coin undergoes strict quality checks and BIS hallmarking." },
  { num: "03", title: "Insured Shipping", desc: "Discreet, tamper-proof packaging delivered securely to your doorstep." },
  { num: "04", title: "Easy Buy-back", desc: "100% transparent buy-back policy on all our certified coins." },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">The LoveLWK Promise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            From our vault to your hands, experience complete transparency and security at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-px bg-gold/30" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-paper border border-gold/30 flex items-center justify-center mb-6 shadow-sm group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                  <span className="font-display text-2xl text-gold">{step.num}</span>
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-muted max-w-[240px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
