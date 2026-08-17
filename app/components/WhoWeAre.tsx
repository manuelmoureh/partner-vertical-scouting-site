import Image from "next/image";
import { Reveal } from "./Reveal";

const ventures = [
  { name: "Afridemy", src: "/logos/afridemy.png", w: 132, h: 40 },
  { name: "Africore Tech", src: "/logos/africore-tech.png", w: 150, h: 40 },
  { name: "Dream Credit", src: "/logos/dream-credit.png", w: 120, h: 40 },
];

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-[62ch]">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Built by someone who&apos;s already done this.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            Manuel Moureh builds AI systems for African businesses. He built
            the lending infrastructure behind Dream Credit, the growth
            systems behind Africore Tech, and founded Afridemy.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
            Built by the same founder
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6">
            {ventures.map((v) => (
              <Image
                key={v.name}
                src={v.src}
                alt={v.name}
                width={v.w}
                height={v.h}
                loading="eager"
                className="logo-mono h-8 w-auto object-contain"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
