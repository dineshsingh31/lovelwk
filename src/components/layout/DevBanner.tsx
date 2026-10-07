"use client";

import { IS_DEV, PLACEHOLDER_NOTICE } from "@/lib/config";

export function DevBanner() {
  if (!IS_DEV) return null;

  return (
    <div
      role="status"
      aria-label="Development notice"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "6px 16px",
        backgroundColor: "var(--warn)",
        color: "var(--ink-0)",
        fontFamily: "var(--font-mono), monospace",
        fontSize: "10px",
        letterSpacing: "0.08em",
        textAlign: "center",
        lineHeight: 1.4,
      }}
    >
      {PLACEHOLDER_NOTICE}
    </div>
  );
}
