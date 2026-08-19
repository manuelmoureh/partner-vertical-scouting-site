import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact | Vuria",
  description: "Not applying? Reach the Vuria team directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact."
        lead="Founder applications go through the Apply page. For press, partners, or anything else, reach us directly."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="flex max-w-[52ch] flex-col gap-6">
            <a
              href="mailto:hello@trance-ai.com"
              className="w-fit text-2xl font-bold tracking-tight text-text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-accent md:text-3xl"
            >
              hello@trance-ai.com
            </a>
            <p className="text-[15.5px] leading-relaxed text-text-secondary">
              Building something and want to apply instead?{" "}
              <Link
                href="/apply"
                className="text-text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                Go to the Apply page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
