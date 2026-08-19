import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Proof | Vuria",
  description: "The ventures Vuria is backing first, built by the same team.",
};

const live = [
  {
    name: "Trance AI",
    src: "/logos/trance-ai.png",
    w: 220,
    h: 40,
    size: "h-9",
    description:
      "AI-driven growth systems for consumer brands, built to move revenue, not just deliverables. Work spans Jumia, Microsoft, and MSK.",
    url: "https://trance-ai.com/",
  },
  {
    name: "Afridemy",
    src: "/logos/afridemy.png",
    w: 220,
    h: 55,
    size: "h-12",
    description:
      "Trains African talent in practical AI-systems building, credentialed through verified, real deployed work instead of a certificate.",
    url: "http://afridemy.online/",
  },
];

const building = [
  { name: "Novara", src: "/logos/novara.png", w: 190, h: 33, size: "h-8" },
  { name: "Tizy", src: "/logos/tizy.png", w: 200, h: 40, size: "h-8" },
  { name: "Zenia", src: "/logos/zenia.png", w: 190, h: 50, size: "h-8" },
];

export default function ProofPage() {
  return (
    <>
      <PageHeader
        title="Proof, not a portfolio."
        lead="Vuria is new, so we're starting with the ventures we know best: the ones built by our own team. These five are our first cohort."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <Reveal>
            <p className="text-[15px] font-medium text-text-primary">Live</p>
          </Reveal>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {live.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.06}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-8 rounded-[20px] border border-border bg-bg-elevated p-7 transition-colors hover:border-accent md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Image
                      src={v.src}
                      alt={v.name}
                      width={v.w}
                      height={v.h}
                      loading="eager"
                      className={`w-auto object-contain ${v.size}`}
                    />
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-text-tertiary transition-colors group-hover:text-accent"
                    />
                  </div>
                  <p className="max-w-[42ch] text-[15.5px] leading-relaxed text-text-secondary">
                    {v.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal>
            <p className="text-[15px] font-medium text-text-primary">Building</p>
          </Reveal>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {building.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between gap-8 rounded-[20px] border border-border bg-bg-sunken p-7">
                  <Image
                    src={v.src}
                    alt={v.name}
                    width={v.w}
                    height={v.h}
                    loading="eager"
                    className={`w-auto object-contain opacity-70 ${v.size}`}
                  />
                  <span className="w-fit rounded-full border border-border px-2.5 py-1 text-[12px] font-medium text-text-tertiary">
                    In build
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
