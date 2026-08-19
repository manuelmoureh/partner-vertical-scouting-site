"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { AsteriskSimple } from "@phosphor-icons/react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const offers = [
  "Capital",
  "Engineers",
  "Investors and clients",
  "Scaling support",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-10 md:pb-12 md:pt-14">
        <motion.div
          className="grid gap-8 md:grid-cols-12 md:gap-10"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <div className="md:col-span-7">
            <motion.h1
              variants={item}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-5xl"
            >
              We back{" "}
              <span className="accent-gradient-text">validated AI</span>{" "}
              products and help them scale.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-secondary"
            >
              We provide access: to investors, engineers, and clients, to
              help you scale what you&apos;ve already built.
            </motion.p>

            <motion.div variants={item} className="mt-9">
              <a
                href="#apply"
                className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-on transition-transform hover:bg-accent-hover active:scale-[0.98]"
              >
                Apply now
              </a>
              <p className="mt-3 text-[13px] text-text-tertiary">
                Free to apply. No obligation.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="flex md:col-span-5 md:h-full md:flex-col md:justify-center"
          >
            <div className="overflow-hidden rounded-[16px] border border-border">
              <div className="bg-accent px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.06em] text-accent-on">
                What we provide
              </div>
              <div className="divide-y divide-border bg-bg-elevated">
                {offers.map((offer) => (
                  <div
                    key={offer}
                    className="flex items-center gap-3 px-5 py-3"
                  >
                    <AsteriskSimple
                      size={14}
                      weight="bold"
                      className="shrink-0 text-accent"
                    />
                    <span className="text-[15px] text-text-primary">
                      {offer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative h-[220px] w-full overflow-hidden bg-bg-sunken sm:h-[280px] md:h-[340px] lg:h-[400px]">
          <Image
            src="/photos/hero-towers.jpg"
            alt="Modern city skyline of glass towers"
            width={1376}
            height={768}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
