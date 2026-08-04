"use client";

import { Search, ArrowRight } from "lucide-react";
import { FormEvent } from "react";

export function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Search for a business...",
  examples,
  onExampleClick,
  autoFocus = false,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (v: string) => void;
  placeholder?: string;
  examples?: string[];
  onExampleClick?: (v: string) => void;
  autoFocus?: boolean;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 bg-surface border border-line rounded-full pl-5 md:pl-6 pr-2 py-2 shadow-soft focus-within:border-navy-300 focus-within:shadow-lift transition-all">
          <Search className="w-4.5 h-4.5 text-muted-2 shrink-0" strokeWidth={2} />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="flex-1 bg-transparent outline-none border-none text-[15.5px] md:text-[16px] text-ink placeholder:text-muted-2 py-2.5 min-w-0"
          />
          <button
            type="submit"
            aria-label="Search"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-canvas font-medium text-[14px] px-4 md:px-5 py-3 hover:bg-gold-500 hover:text-ink transition-colors"
          >
            <span className="hidden sm:inline">Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {examples && examples.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 mt-4 justify-center text-[13px] text-muted-2">
          <span>Try:</span>
          {examples.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => onExampleClick?.(ex)}
              className="rounded-full border border-line px-3 py-1.5 text-ink hover:bg-ink hover:text-canvas hover:border-ink transition-colors"
            >
              {ex}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
