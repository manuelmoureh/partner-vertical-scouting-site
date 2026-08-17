import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-[62ch]">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Built by someone who&apos;s already done this.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            Manuel Moureh builds AI systems for African businesses. He
            founded Afridemy, and brings the same builder discipline to
            every company he backs.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-[15px] font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
          >
            More about the founder
          </Link>
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
  );
}
