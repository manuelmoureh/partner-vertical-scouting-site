"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { BrandLockup } from "./BrandMark";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/about", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/proof", label: "Proof" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Vuria home" onClick={() => setOpen(false)}>
          <BrandLockup />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[14.5px] transition-colors hover:text-text-primary ${
                  active ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle className="hidden h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text-primary md:inline-flex" />

          <Link
            href="/apply"
            className="ml-2 hidden h-10 items-center rounded-full bg-accent px-5 text-[14.5px] font-medium text-accent-on transition-colors hover:bg-accent-hover md:inline-flex"
          >
            Apply now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-primary md:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-bg px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`text-[16px] font-medium ${
                    active ? "text-accent" : "text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3">
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-fit items-center rounded-full bg-accent px-6 text-[15px] font-medium text-accent-on"
              >
                Apply now
              </Link>
              <ThemeToggle className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
