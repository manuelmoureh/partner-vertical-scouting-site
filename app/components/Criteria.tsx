import { Reveal } from "./Reveal";

const offers = [
  {
    label: "Capital",
    body: "A check sized to the stage you're actually at, so you're not raising more than you need or diluting early for runway you won't use.",
  },
  {
    label: "Engineers",
    body: "Our own engineers sit with your team on the specific problems slowing you down, whether that's infrastructure, AI implementation, or shipping features you don't have the hands for.",
  },
  {
    label: "Investors and clients",
    body: "Direct introductions to the specific investors and clients in our network who make sense for what you're building, made by us, not a cold list.",
  },
  {
    label: "Scaling support",
    body: "As you grow, help with fundraising strategy, pricing, and hiring, plus preparation for your next raise or exit when that time comes.",
  },
];

export function Criteria() {
  return (
    <section id="what-we-provide" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal className="max-w-[62ch]">
          <h3 className="text-2xl font-bold tracking-tight text-text-primary">
            What we look for
          </h3>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-text-secondary">
            Validated AI products with real users, revenue, or a working
            demo.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 border-t border-border pt-14">
          <h3 className="text-2xl font-bold tracking-tight text-text-primary">
            What we provide
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {offers.map((offer) => (
              <div
                key={offer.label}
                className="rounded-[16px] border border-border bg-bg-elevated p-6"
              >
                <p className="text-[17px] font-medium text-text-primary">
                  {offer.label}
                </p>
                <p className="mt-2 max-w-[38ch] text-[15.5px] leading-relaxed text-text-secondary">
                  {offer.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
