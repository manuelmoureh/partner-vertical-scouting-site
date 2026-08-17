import { BrandLockup } from "./BrandMark";

const links = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#what-we-provide", label: "What we provide" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" aria-label="Trance Ventures home">
          <BrandLockup />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-[14.5px] font-medium text-accent-on transition-colors hover:bg-accent-hover"
        >
          Apply now
        </a>
      </div>
    </header>
  );
}
