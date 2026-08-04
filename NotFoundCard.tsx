import Link from "next/link";
import { Check } from "lucide-react";
import { VerifiedBadge } from "./VerifiedBadge";

export function BusinessTeaser() {
  return (
    <section className="py-20 md:py-28 bg-navy text-canvas">
      <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-mono text-[12px] tracking-wide uppercase text-gold-300 mb-4 block">
            For businesses
          </span>
          <h2 className="font-display font-semibold text-[32px] md:text-[38px] leading-tight mb-5">
            Help customers find and trust your business.
          </h2>
          <p className="text-[16px] text-canvas/60 max-w-[440px] mb-8">
            This is what a customer sees when they search for you. A verified profile means
            they reach the real thing — not a copy.
          </p>

          <ul className="flex flex-col gap-3 mb-9">
            {[
              "Submit your business details",
              "Verity reviews and confirms your business",
              "Your profile goes live for customers to find",
            ].map((line, i) => (
              <li key={line} className="flex items-center gap-3 text-[14.5px] text-canvas/80">
                <span className="w-5 h-5 rounded-full border border-canvas/25 flex items-center justify-center shrink-0 text-[11px] font-mono text-canvas/60">
                  {i + 1}
                </span>
                {line}
              </li>
            ))}
          </ul>

          <Link
            href="/for-businesses#apply"
            className="inline-flex items-center rounded-full bg-gold-500 text-ink text-[14.5px] font-medium px-6 py-3 hover:bg-gold-300 transition-colors"
          >
            Verify Your Business
          </Link>
        </div>

        <div className="rounded-2xl bg-canvas/[0.04] border border-canvas/10 p-6">
          <div className="rounded-xl bg-navy-800 border border-canvas/10 p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-display font-semibold text-[18px] text-canvas mb-0.5">
                  Your Business Name
                </h3>
                <p className="text-[13px] text-canvas/50">Your Category</p>
              </div>
              <VerifiedBadge size="md" />
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {["Call", "WhatsApp", "Website"].map((l) => (
                <div
                  key={l}
                  className="rounded-lg border border-canvas/10 py-3 text-center text-[11.5px] font-medium text-canvas/70"
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-canvas/40 border-t border-canvas/10 pt-4">
              <Check className="w-3.5 h-3.5 text-gold-300" />
              This is how customers will see you, verified.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
