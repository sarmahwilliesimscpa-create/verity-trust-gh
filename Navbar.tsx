"use client";

import { Phone, MessageCircle, Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Business } from "@/lib/data";
import { VerifiedBadge } from "./VerifiedBadge";

export function BusinessCard({ business }: { business: Business }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl bg-surface border border-line shadow-card p-6 md:p-7 text-left"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display font-semibold text-[19px] text-ink">{business.name}</h3>
          </div>
          <p className="text-[13.5px] text-muted">{business.category}</p>
        </div>
        <VerifiedBadge size="md" />
      </div>

      <p className="text-[14.5px] text-muted mb-5 leading-relaxed">{business.description}</p>

      <div className="flex items-center gap-1.5 text-[13.5px] text-muted mb-6">
        <MapPin className="w-3.5 h-3.5 shrink-0" />
        {business.location}
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <a
          href={`tel:${business.phone.replace(/\s/g, "")}`}
          className="flex flex-col items-center gap-1.5 rounded-xl border border-line py-3 hover:border-navy hover:bg-navy hover:text-canvas transition-colors text-ink"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[11.5px] font-medium">Call</span>
        </a>
        <a
          href={`https://wa.me/${business.whatsapp.replace(/[^\d]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 rounded-xl border border-line py-3 hover:border-navy hover:bg-navy hover:text-canvas transition-colors text-ink"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[11.5px] font-medium">WhatsApp</span>
        </a>
        <a
          href={`https://${business.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 rounded-xl border border-line py-3 hover:border-navy hover:bg-navy hover:text-canvas transition-colors text-ink"
        >
          <Globe className="w-4 h-4" />
          <span className="text-[11.5px] font-medium">Website</span>
        </a>
      </div>

      <div className="mt-5 pt-5 border-t border-line flex items-center justify-between text-[12px] text-muted-2 font-mono">
        <span>Verified since {business.verifiedSince}</span>
        <span>{business.verificationId}</span>
      </div>
    </motion.div>
  );
}
