import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "About | Vuria",
  description: "Why Vuria exists, and who's behind it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Built by someone who's already done this."
        lead="We're a new venture builder, but the team behind it isn't new to building."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="max-w-[62ch]">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">
              The founder
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Manuel Moureh runs Trance AI, a studio that builds AI systems
              for African businesses, and founded Afridemy, a platform that
              trains African builders in practical AI systems work,
              credentialed through verified project work rather than a
              certificate.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Vuria applies the same hands-on approach, one stage
              further along: to founders who&apos;ve already built something
              real.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Image
              src="/logos/afridemy.png"
              alt="Afridemy"
              width={132}
              height={40}
              loading="eager"
              className="logo-mono h-8 w-auto object-contain"
            />
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
              There&apos;s a gap between having a validated product and
              having the investor access, engineering capacity, and client
              relationships to scale it. Vuria closes that gap for
              founders who&apos;ve already proven the first part works.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
