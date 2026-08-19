import Image from "next/image";
import { Reveal } from "./Reveal";

const stats = [
  { value: "5", label: "Top African markets" },
  { value: "5", label: "Ventures we've already built" },
];

const topRow = ["Kenya", "Nigeria", "South Africa", "Egypt"];
const bottomRow = ["Ghana"];

function Pill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg px-4 py-2 text-[13.5px] font-medium text-text-primary">
      {name}
    </span>
  );
}

export function WhatWeDo() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12 md:items-center md:gap-10 md:py-24">
        <Reveal className="md:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Built for African founders, solving real problems in Africa.
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-text-secondary">
            We invest in AI products that already have real users or
            revenue, and give founders the capital, engineers, and access it
            takes to scale.
          </p>

          <div className="mt-10 flex divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="pr-8 first:pl-0 [&:not(:first-child)]:pl-8">
                <p className="text-4xl font-bold tracking-tight text-text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[16ch] text-[14px] text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <div className="flex flex-col items-center gap-8 rounded-[20px] border border-border bg-bg-elevated px-8 py-12">
            <Image
              src="/logo/vuria-mark.png"
              alt=""
              width={811}
              height={923}
              loading="eager"
              className="h-24 w-auto object-contain"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {topRow.map((name) => (
                  <Pill key={name} name={name} />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                {bottomRow.map((name) => (
                  <Pill key={name} name={name} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
