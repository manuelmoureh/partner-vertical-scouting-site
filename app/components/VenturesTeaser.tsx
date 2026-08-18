import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const ventures = [
  { name: "Trance AI", src: "/logos/trance-ai.png", w: 180, h: 33 },
  { name: "Afridemy", src: "/logos/afridemy.png", w: 180, h: 45 },
  { name: "Novara", src: "/logos/novara.png", w: 150, h: 26 },
  { name: "Zenia", src: "/logos/zenia.png", w: 108, h: 42 },
];

export function VenturesTeaser() {
  return (
    <section id="who-we-are" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-[62ch]">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Built by the same team behind these ventures.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {ventures.map((v) => (
              <Image
                key={v.name}
                src={v.src}
                alt={v.name}
                width={v.w}
                height={v.h}
                loading="eager"
                className="logo-mono h-7 w-auto object-contain md:h-8"
              />
            ))}
          </div>

          <Link
            href="/proof"
            className="mt-8 inline-block text-[15px] font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
          >
            More on our track record
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
