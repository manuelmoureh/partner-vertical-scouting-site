import { Reveal } from "./Reveal";

export function PageHeader({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-14 md:pt-20">
        <Reveal className="max-w-[52ch]">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
