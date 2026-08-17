"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

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

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 md:grid-cols-12 md:items-center md:pb-28 md:pt-16">
        <motion.div
          className="md:col-span-7"
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
        >
          <motion.h1
            variants={reduce ? undefined : item}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-5xl"
          >
            We&apos;re a venture builder backing{" "}
            <span className="accent-gradient-text">validated AI products</span>{" "}
            out of Kenya.
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-secondary"
          >
            We provide access: to investors, engineers, and clients, to help
            you scale what you&apos;ve already built.
          </motion.p>

          <motion.div variants={reduce ? undefined : item} className="mt-9">
            <a
              href="#apply"
              className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-on transition-transform hover:bg-accent-hover active:scale-[0.98]"
            >
              Apply now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-bg-sunken">
            <Image
              src="https://picsum.photos/seed/nairobi-skyline-blue-hour/900/1125"
              alt="Nairobi skyline at dusk"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,11,15,0) 45%, rgba(10,11,15,0.55) 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
