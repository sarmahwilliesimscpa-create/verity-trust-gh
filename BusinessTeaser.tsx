import { Check } from "lucide-react";

export function VerifiedBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  const isMd = size === "md";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-navy text-gold-300 font-medium ${
        isMd ? "text-[13px] px-3 py-1.5" : "text-[12px] px-2.5 py-1"
      }`}
    >
      <Check className={isMd ? "w-3.5 h-3.5" : "w-3 h-3"} strokeWidth={3} />
      Verified
    </span>
  );
}
