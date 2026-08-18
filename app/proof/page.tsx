import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Proof | Vuria",
  description: "Vuria hasn't backed anyone yet. Here's what the team has already built.",
};

export default function ProofPage() {
  return (
    <>
      <PageHeader
        title="Proof, not a portfolio."
        lead="Vuria is new. We haven't backed anyone yet. But the team has already built what this model is meant to produce."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="max-w-[640px] rounded-[20px] border border-border bg-bg-elevated p-8 md:p-10">
            <Image
              src="/logos/afridemy.png"
              alt="Afridemy"
              width={148}
              height={44}
              loading="eager"
              className="h-9 w-auto object-contain"
            />
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              An AI-systems training platform for African builders,
              credentialed through verified project work rather than a
              certificate. Founded and built by the same team behind Vuria.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-[15px] font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
            >
              More about the team
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
