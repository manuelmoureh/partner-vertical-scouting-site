import Link from "next/link";
import { BrandLockup } from "./BrandMark";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <BrandLockup />
          <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-text-secondary">
            We invest in validated AI products and help them scale.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[14.5px] text-text-secondary">
          <Link href="/about" className="w-fit transition-colors hover:text-text-primary">
            Approach
          </Link>
          <Link href="/proof" className="w-fit transition-colors hover:text-text-primary">
            Proof
          </Link>
          <Link href="/faq" className="w-fit transition-colors hover:text-text-primary">
            FAQ
          </Link>
          <Link href="/privacy" className="w-fit transition-colors hover:text-text-primary">
            Privacy
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[14.5px] text-text-secondary">
          <a
            href="mailto:hello@trance-ai.com"
            className="w-fit text-text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            hello@trance-ai.com
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10">
        <p className="text-[13px] text-text-tertiary">
          &copy; {new Date().getFullYear()} Vuria.
        </p>
      </div>
    </footer>
  );
}
