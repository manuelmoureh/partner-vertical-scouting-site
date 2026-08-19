import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const ventures = [
  { name: "Trance AI", src: "/logos/trance-ai.png", w: 180, h: 33, size: "h-8 md:h-9" },
  { name: "Afridemy", src: "/logos/afridemy.png", w: 180, h: 45, size: "h-11 md:h-12" },
  { name: "Novara", src: "/logos/novara.png", w: 150, h: 26, size: "h-8 md:h-9" },
  { name: "Tizy", src: "/logos/tizy.png", w: 160, h: 32, size: "h-8 md:h-9" },
  { name: "Zenia", src: "/logos/zenia.png", w: 156, h: 41, size: "h-8 md:h-9" },
];

export function VenturesTeaser() {
  return (
    <section id="who-we-are" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal className="max-w-[62ch]">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            The ventures we&apos;re backing first.
          </h2>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-10 rounded-[20px] border border-border bg-bg-elevated p-8 md:p-10"
        >
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
            {ventures.map((v) => (
              <Image
                key={v.name}
                src={v.src}
                alt={v.name}
                width={v.w}
                height={v.h}
                loading="eager"
                className={`logo-mono w-auto object-contain ${v.size}`}
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
