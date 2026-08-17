import { BrandLockup } from "./BrandMark";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <BrandLockup />
          <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-text-secondary">
            A venture builder backing validated AI products out of Kenya.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[14.5px] text-text-secondary">
          <a
            href="mailto:manuelmoureh@gmail.com"
            className="w-fit text-text-primary underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            manuelmoureh@gmail.com
          </a>
          <p>Nairobi, Kenya</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10">
        <p className="text-[13px] text-text-tertiary">
          &copy; {new Date().getFullYear()} Trance Ventures.
        </p>
      </div>
    </footer>
  );
}
