import Image from "next/image";
import { Reveal } from "./Reveal";

export function Gap() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:items-center md:gap-12 md:py-24">
        <Reveal className="md:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            There&apos;s a gap between building and scaling.
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-text-secondary">
            A validated product proves the idea works. Scaling it takes
            investors, engineers, and clients most founders don&apos;t have
            yet. We close that gap for founders who&apos;ve already proven
            the first part.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-bg-sunken">
            <Image
              src="/photos/typing-detail.jpg"
              alt="Working on a laptop, close detail"
              width={1200}
              height={896}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
