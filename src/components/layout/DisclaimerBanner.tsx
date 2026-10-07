"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(true);
  
  useEffect(() => {
    const stored = localStorage.getItem('disclaimer-dismissed');
    setDismissed(stored === 'true');
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('disclaimer-dismissed', 'true');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="status"
      aria-label="Disclaimer"
      className="fixed bottom-0 sm:bottom-auto sm:top-0 left-0 right-0 z-[9999] h-auto min-h-[32px] py-1.5 bg-[#D9A441] text-ink flex items-center justify-center gap-4 px-4 text-[12px] font-medium shadow-soft"
    >
      <p className="text-center flex-1 max-w-4xl line-clamp-2 sm:line-clamp-1">
        This is a placeholder development site. All products, prices, and claims shown are for demonstration purposes only.
      </p>
      <button
        onClick={handleDismiss}
        className="text-ink hover:text-ink/70 font-medium p-1 shrink-0"
        aria-label="Dismiss disclaimer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
