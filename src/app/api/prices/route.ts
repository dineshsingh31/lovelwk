import { NextResponse } from 'next/server';

// Base prices (INR per gram) - Placeholder data
const BASE_GOLD = 7450;
const BASE_SILVER = 92;

export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() {
  // Simulate slight drift for demo purposes (±0.3%)
  const drift = (base: number) => {
    const change = base * 0.003 * (Math.random() * 2 - 1);
    return Math.round((base + change) * 100) / 100;
  };

  const goldPrice = drift(BASE_GOLD);
  const silverPrice = drift(BASE_SILVER);

  const data = {
    goldPerGram: goldPrice,
    silverPerGram: silverPrice,
    lastUpdated: new Date().toISOString(),
    delta: {
      gold: Math.round((Math.random() - 0.5) * 100 * 100) / 100, // ±50 for demo
      silver: Math.round((Math.random() - 0.5) * 2 * 100) / 100,  // ±1 for demo
    },
    isPlaceholder: true,
  };

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  });
}
