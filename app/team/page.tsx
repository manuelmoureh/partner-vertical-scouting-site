import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Team | Vuria",
  description: "The investors and builders behind Vuria.",
};

const groups = [
  {
    label: "The investors",
    body: "A small group of angel investors, with networks that reach directly into investors, clients, and the later-stage capital that gets a company from seed to scale.",
  },
  {
    label: "The builders",
    body: "The same engineers and operators behind the ventures on our Proof page. They don't advise from the sidelines — they sit inside the businesses we back, doing the work.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Who we are."
        lead="A small group of angel investors and builders, working together."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="grid gap-5 sm:grid-cols-2">
            {groups.map((group) => (
              <div
                key={group.label}
                className="rounded-[20px] border border-border bg-bg-elevated p-7 md:p-8"
              >
                <p className="text-[17px] font-medium text-text-primary">
                  {group.label}
                </p>
                <p className="mt-3 max-w-[38ch] text-[15.5px] leading-relaxed text-text-secondary">
                  {group.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08} className="mt-10 max-w-[58ch]">
            <p className="text-[15.5px] leading-relaxed text-text-secondary">
              Two things, one team: capital and access on one side, hands-on
              building on the other.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
