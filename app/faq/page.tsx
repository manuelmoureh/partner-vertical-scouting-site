import type { Metadata } from "next";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "FAQ | Vuria",
  description: "Answers to common questions about applying to Vuria.",
};

const faqs = [
  {
    q: "What are you looking for?",
    a: "Validated AI products with real users, revenue, or a working demo.",
  },
  {
    q: "What do you provide?",
    a: "Capital, engineers, and warm introductions to investors and clients, plus help fundraising and preparing for your next raise or sale.",
  },
  {
    q: "What do you take in return?",
    a: "We discuss terms directly, once we're both interested. It depends on the business, so there's no fixed number we can share here.",
  },
  {
    q: "Is there a cost to apply?",
    a: "No. Applying is free, and there's no obligation.",
  },
  {
    q: "Do I need to already be live?",
    a: "No, though it helps. We also consider products that are built but not yet live, as long as the problem and the evidence behind it are real.",
  },
  {
    q: "Where are you focused?",
    a: "We're currently focused on Africa.",
  },
  {
    q: "What happens after I apply?",
    a: "We review every application. If it's a fit, we'll reach out to talk next steps.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently asked questions."
        lead="Everything applicants usually ask, answered up front."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="max-w-[720px] divide-y divide-border border-t border-border">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium text-text-primary">
                  {item.q}
                  <CaretDown
                    size={18}
                    weight="bold"
                    className="shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
