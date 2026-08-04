"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { BusinessCard } from "@/components/BusinessCard";
import { businesses, categories } from "@/lib/data";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    return businesses.filter((b) => {
      const matchesQuery =
        submitted.trim() === "" ||
        b.name.toLowerCase().includes(submitted.toLowerCase()) ||
        b.category.toLowerCase().includes(submitted.toLowerCase());
      const matchesCategory = !activeCategory || b.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [submitted, activeCategory]);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-14 pb-10 md:pt-20 md:pb-12">
          <div className="container-content">
            <div className="max-w-[620px] mx-auto text-center mb-10">
              <h1 className="font-display font-semibold text-[30px] md:text-[38px] text-ink leading-tight">
                Search verified businesses
              </h1>
              <p className="mt-3 text-[16px] text-muted">
                Browse the directory or search for a business by name.
              </p>
            </div>
            <div className="max-w-[600px] mx-auto">
              <SearchBar
                value={query}
                onChange={setQuery}
                onSubmit={(v) => setSubmitted(v)}
                placeholder="Search by name or category..."
              />
            </div>
          </div>
        </section>

        <section className="pb-24" id="categories">
          <div className="container-content">
            <div className="flex items-center gap-2.5 flex-wrap justify-center mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full px-4 py-2 text-[13.5px] font-medium border transition-colors ${
                  activeCategory === null
                    ? "bg-ink text-canvas border-ink"
                    : "border-line text-ink hover:border-navy-300"
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-4 py-2 text-[13.5px] font-medium border transition-colors ${
                    activeCategory === c
                      ? "bg-ink text-canvas border-ink"
                      : "border-line text-ink hover:border-navy-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((b) => (
                  <BusinessCard key={b.id} business={b} />
                ))}
              </div>
            ) : (
              <div className="max-w-[420px] mx-auto text-center py-16">
                <p className="text-[15px] text-muted">
                  No verified businesses match your search yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
