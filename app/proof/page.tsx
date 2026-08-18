import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Proof | Vuria",
  description: "Vuria hasn't backed anyone yet. Here's what the team has already built.",
};

const ventures = [
  { name: "Trance AI", src: "/logos/trance-ai.png", w: 220, h: 40 },
  { name: "Afridemy", src: "/logos/afridemy.png", w: 220, h: 55 },
  { name: "Novara", src: "/logos/novara.png", w: 190, h: 33 },
  { name: "Tizy", src: "/logos/tizy.png", w: 200, h: 40 },
  { name: "Zenia", src: "/logos/zenia.png", w: 130, h: 51 },
];

export default function ProofPage() {
  return (
    <>
      <PageHeader
        title="Proof, not a portfolio."
        lead="Vuria is new. We haven't backed anyone yet. But the team behind it has already built what this model is meant to produce."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Reveal className="rounded-[20px] border border-border bg-bg-elevated p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-x-14 gap-y-10">
              {ventures.map((v) => (
                <Image
                  key={v.name}
                  src={v.src}
                  alt={v.name}
                  width={v.w}
                  height={v.h}
                  loading="eager"
                  className="h-9 w-auto object-contain md:h-10"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
