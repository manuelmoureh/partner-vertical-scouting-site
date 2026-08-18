import { Reveal } from "./Reveal";

const offers = [
  {
    label: "Capital",
    body: "Sized to what the business actually needs.",
  },
  {
    label: "Engineering support",
    body: "Hands-on build capacity, embedded alongside your team.",
  },
  {
    label: "Investor and client access",
    body: "Warm introductions into our network.",
  },
  {
    label: "Scaling support",
    body: "Fundraising, go-to-market, and exit-readiness help as you grow.",
  },
];

export function Criteria() {
  return (
    <section id="what-we-provide" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-[62ch]">
          <h3 className="text-2xl font-bold tracking-tight text-text-primary">
            What we look for
          </h3>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-text-secondary">
            Validated AI products with real users, revenue, or a working
            demo.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 border-t border-border pt-16">
          <h3 className="text-2xl font-bold tracking-tight text-text-primary">
            What we provide
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {offers.map((offer) => (
              <div key={offer.label}>
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
