import { Reveal } from "./Reveal";

export function Gap() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-[62ch]">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            There&apos;s a gap between building and scaling.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            A validated product proves the idea works. Scaling it takes
            investor access, engineering capacity, and client relationships
            most founders don&apos;t have yet. We close that gap for
            founders who&apos;ve already proven the first part.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
