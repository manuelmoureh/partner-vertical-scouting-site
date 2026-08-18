import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    label: "Apply",
    body: "Tell us what you've built, and the evidence it's real.",
  },
  {
    n: "02",
    label: "Review",
    body: "We assess every application. If it's a fit, we reach out.",
  },
  {
    n: "03",
    label: "Partner",
    body: "We talk terms directly, once we're both interested.",
  },
  {
    n: "04",
    label: "Scale",
    body: "Investors, engineers, and clients, as you need them.",
  },
];

export function Process() {
  return (
    <section className="border-b border-border bg-bg-sunken">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal className="max-w-[52ch]">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            How it works
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="rounded-[16px] border border-border bg-bg-elevated p-6">
                <p className="font-mono text-[13px] text-text-tertiary">
                  {step.n}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-text-primary">
                  {step.label}
                </h3>
                <p className="mt-2 max-w-[38ch] text-[15.5px] leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
