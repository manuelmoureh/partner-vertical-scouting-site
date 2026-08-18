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
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-20 md:pt-16">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.h1
            variants={item}
            className="max-w-[18ch] text-4xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-5xl"
          >
            We&apos;re a venture builder backing{" "}
            <span className="accent-gradient-text">validated AI products</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-secondary"
          >
            We provide access: to investors, engineers, and clients, to help
            you scale what you&apos;ve already built.
          </motion.p>

          <motion.div variants={item} className="mt-9">
            <a
              href="#apply"
              className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-on transition-transform hover:bg-accent-hover active:scale-[0.98]"
            >
              Apply now
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 pb-20 md:pb-28"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-bg-sunken">
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
