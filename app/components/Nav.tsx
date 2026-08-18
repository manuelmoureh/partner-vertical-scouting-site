"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { BrandLockup } from "./BrandMark";

const links = [
  { href: "/about", label: "Approach" },
  { href: "/proof", label: "Proof" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Vuria home" onClick={() => setOpen(false)}>
          <BrandLockup />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#apply"
            className="hidden h-10 items-center rounded-full bg-accent px-5 text-[14.5px] font-medium text-accent-on transition-colors hover:bg-accent-hover md:inline-flex"
          >
            Apply now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-primary md:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#apply"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-fit items-center rounded-full bg-accent px-6 text-[15px] font-medium text-accent-on"
            >
              Apply now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
