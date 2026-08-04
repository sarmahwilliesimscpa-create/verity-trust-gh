import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Search Businesses", href: "/search" },
      { label: "For Businesses", href: "/for-businesses" },
      { label: "Get Verified", href: "/for-businesses#apply" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/resources" },
      { label: "FAQs", href: "/resources#faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "hello@verity.trust", href: "mailto:hello@verity.trust" },
      { label: "Accra, Ghana", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-canvas/70">
      <div className="container-content py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-canvas/10">
          <div className="col-span-2 md:col-span-1">
            <Logo wordmarkClassName="text-canvas" />
            <p className="mt-4 text-[14px] leading-relaxed text-canvas/50 max-w-[240px]">
              Find the right business. Know it&apos;s the right one. Connect directly.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12.5px] uppercase tracking-wide text-canvas/40 font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-canvas/75 hover:text-gold-300 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px] text-canvas/40">
          <span>&copy; 2026 Verity. All rights reserved.</span>
          <span>Verity is a business verification service, not a financial institution.</span>
        </div>
      </div>
    </footer>
  );
}
