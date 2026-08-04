"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

export function NotFoundCard({ query }: { query: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl bg-surface border border-line shadow-card p-6 md:p-7 text-left"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-full bg-canvas border border-line flex items-center justify-center shrink-0">
          <Search className="w-4.5 h-4.5 text-muted" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-[17px] text-ink">
            No match for &ldquo;{query}&rdquo;
          </h3>
          <p className="text-[14px] text-muted mt-1">
            This business may not have joined Verity yet, or the name doesn&apos;t match exactly.
          </p>
        </div>
      </div>
      <Link
        href={`/contact?invite=${encodeURIComponent(query)}`}
        className="inline-flex items-center justify-center rounded-full bg-ink text-canvas text-[13.5px] font-medium px-5 py-2.5 hover:bg-gold-500 hover:text-ink transition-colors"
      >
        Invite this business
      </Link>
    </motion.div>
  );
}
