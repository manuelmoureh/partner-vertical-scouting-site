import Image from "next/image";

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo/vuria-wordmark.png"
        alt="Vuria"
        width={1538}
        height={508}
        priority
        className="h-7 w-auto -translate-y-[1px] object-contain"
      />
    </span>
  );
}
