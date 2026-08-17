import { Reveal } from "./Reveal";

export function Criteria() {
  return (
    <section id="what-we-provide" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <Reveal>
          <h3 className="text-2xl font-bold tracking-tight text-text-primary">
            What we look for
          </h3>
          <p className="mt-4 max-w-[42ch] text-[17px] leading-relaxed text-text-secondary">
            Validated AI products with real users, revenue, or a working
            demo, not a slide deck. Kenya-based, for now.
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="border-t border-border pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-16"
        >
          <h3 className="text-2xl font-bold tracking-tight text-text-primary">
            What we provide
          </h3>
          <p className="mt-4 max-w-[42ch] text-[17px] leading-relaxed text-text-secondary">
            Access to investors, engineers, and clients, so you can scale
            what you&apos;ve already built.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
