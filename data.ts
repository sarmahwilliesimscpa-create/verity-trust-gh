"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { BusinessCard } from "./BusinessCard";
import { NotFoundCard } from "./NotFoundCard";
import { businesses, searchExamples, Business } from "@/lib/data";

export function Hero() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Business | null | undefined>(undefined);
  const [searchedTerm, setSearchedTerm] = useState("");

  function handleSearch(value: string) {
    const term = value.trim();
    if (!term) return;
    setSearchedTerm(term);
    const q = term.toLowerCase();
    const match = businesses.find(
      (b) => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q.replace(/s$/, ""))
    );
    setResult(match ?? null);
  }

  function handleExample(value: string) {
    setQuery(value);
    handleSearch(value);
  }

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,145,47,0.06) 0%, rgba(200,145,47,0) 65%)",
        }}
      />
      <div className="container-content relative">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <h1 className="font-display font-semibold text-[36px] sm:text-[44px] md:text-[54px] leading-[1.08] text-ink tracking-tight">
            Find businesses you can trust.
          </h1>
          <p className="mt-5 text-[17px] md:text-[18px] text-muted max-w-[440px] mx-auto">
            Search for a business, confirm it&apos;s real, and connect directly.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={handleSearch}
            examples={searchExamples}
            onExampleClick={handleExample}
          />

          <div className="mt-6">
            <AnimatePresence mode="wait">
              {result === null && <NotFoundCard key="notfound" query={searchedTerm} />}
              {result && <BusinessCard key={result.id} business={result} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
