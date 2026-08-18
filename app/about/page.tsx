import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Our approach | Vuria",
  description: "How Vuria works with founders, and why it exists.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our approach."
        lead="We're a venture builder: capital, hands-on building support, and access, combined."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="max-w-[62ch]">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">
              Working alongside you
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Most support for growth-stage founders comes as either a
              curriculum or a check, and then the founder is on their own.
              We stay involved instead, bringing in investors, engineers,
              and clients as you need them.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="max-w-[62ch]">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">
              Why this exists
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              A validated product proves the idea works, but scaling it
              takes investor access, engineering capacity, and client
              relationships most founders don&apos;t have yet. Vuria closes
              that gap for founders who&apos;ve already proven the first
              part works.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
