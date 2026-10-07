"use client";

import { useState, useEffect } from "react";

export interface PriceData {
  gold: {
    pricePerGram: number;
    delta: number;
  };
  silver: {
    pricePerGram: number;
    delta: number;
  };
  lastUpdated: string;
  isPlaceholder: true;
}

const FALLBACK: PriceData = {
  gold: {
    pricePerGram: 7450,
    delta: 0,
  },
  silver: {
    pricePerGram: 92,
    delta: 0,
  },
  lastUpdated: new Date().toISOString(),
  isPlaceholder: true,
};

export function usePrices() {
  const [prices, setPrices] = useState<PriceData>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('/api/prices');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPrices(data);
      } catch (err) {
        console.warn('Price fetch failed, using fallback', err);
        setPrices(FALLBACK);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Poll every 60s
    return () => clearInterval(interval);
  }, []);

  return { prices, loading };
}
