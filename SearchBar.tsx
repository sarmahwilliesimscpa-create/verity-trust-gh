import Image from "next/image";
import Link from "next/link";

export function Logo({
  size = 34,
  showWordmark = true,
  wordmarkClassName = "text-ink",
}: {
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Verity home">
      <span
        className="relative overflow-hidden rounded-[9px] shrink-0"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo-icon.png"
          alt=""
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>
      {showWordmark && (
        <span className={`font-display font-semibold text-[19px] tracking-tight ${wordmarkClassName}`}>
          Verity
        </span>
      )}
    </Link>
  );
}
