import Link from "next/link";
import { Reveal } from "./Reveal";

export function ClosingCta() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            Built something worth backing?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="/apply"
            className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-on transition-transform hover:bg-accent-hover active:scale-[0.98]"
          >
            Apply now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
