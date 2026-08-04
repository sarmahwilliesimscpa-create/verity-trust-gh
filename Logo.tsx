"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

type DropdownItem = { label: string; href: string; hint?: string };
type NavItem = { label: string; href?: string; items?: DropdownItem[] };

const navItems: NavItem[] = [
  { label: "Search Businesses", href: "/search" },
  {
    label: "Explore",
    items: [
      { label: "Verified Businesses", href: "/search", hint: "Browse the full directory" },
      { label: "Business Categories", href: "/search#categories", hint: "Restaurants, banks, and more" },
      { label: "Recently Verified", href: "/search?sort=recent", hint: "Newest profiles on Verity" },
    ],
  },
  {
    label: "For Businesses",
    items: [
      { label: "Get Verified", href: "/for-businesses#apply", hint: "Submit your business" },
      { label: "Benefits of Verification", href: "/for-businesses#benefits", hint: "Why businesses join" },
      { label: "Business Support", href: "/contact", hint: "Talk to our team" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Help Center", href: "/resources", hint: "Guides and answers" },
      { label: "FAQs", href: "/resources#faqs", hint: "Common questions" },
      { label: "Support", href: "/contact", hint: "Get in touch" },
    ],
  },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openWithDelay(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function closeWithDelay() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  useEffect(() => {
    setMobileOpen(false);
  }, [openMenu]);

  return (
    <header className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md border-b border-line">
      <div className="container-content">
        <div className="flex items-center justify-between h-[72px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.items ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openWithDelay(item.label)}
                  onMouseLeave={closeWithDelay}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2.5 text-[14.5px] font-medium text-navy-600 hover:text-ink rounded-lg transition-colors"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-surface border border-line rounded-xl shadow-lift p-2">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block rounded-lg px-3.5 py-2.5 hover:bg-canvas transition-colors"
                            >
                              <div className="text-[14px] font-medium text-ink">{sub.label}</div>
                              {sub.hint && (
                                <div className="text-[12.5px] text-muted-2 mt-0.5">{sub.hint}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-4 py-2.5 text-[14.5px] font-medium text-navy-600 hover:text-ink rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="px-4 py-2.5 text-[14.5px] font-medium text-navy-600 hover:text-ink rounded-lg transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/for-businesses#apply"
              className="inline-flex items-center rounded-full bg-ink text-canvas text-[14px] font-medium px-5 py-2.5 hover:bg-gold-500 hover:text-ink transition-colors"
            >
              Verify Your Business
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-line bg-canvas overflow-hidden"
          >
            <div className="container-content py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <details>
                      <summary className="list-none flex items-center justify-between py-3 text-[15px] font-medium text-ink cursor-pointer">
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </summary>
                      <div className="pl-3 pb-2 flex flex-col gap-1">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-[14px] text-muted"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-[15px] font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[15px] font-medium text-ink"
              >
                Contact
              </Link>
              <Link
                href="/for-businesses#apply"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-ink text-canvas text-[14.5px] font-medium px-5 py-3"
              >
                Verify Your Business
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
