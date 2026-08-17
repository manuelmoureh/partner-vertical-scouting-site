import type { Metadata } from "next";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "FAQ | Trance Ventures",
  description: "Answers to common questions about applying to Trance Ventures.",
};

const faqs = [
  {
    q: "What are you looking for?",
    a: "Validated AI products with real users, revenue, or a working demo. Not idea-stage, and not a slide deck.",
  },
  {
    q: "What do you provide?",
    a: "Access: to investors, engineers, and clients, so you can scale what you've already built.",
  },
  {
    q: "What do you take in return?",
    a: "We discuss terms directly with applicants once there's mutual interest. There's no public rate card, because every situation is different.",
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
