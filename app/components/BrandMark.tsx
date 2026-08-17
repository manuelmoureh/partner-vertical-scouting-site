export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tv-mark-grad" x1="2" y1="26" x2="30" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1E4FD8" />
          <stop offset="1" stopColor="#3E8EFF" />
        </linearGradient>
      </defs>
      <rect x="3" y="18" width="6" height="11" rx="1.5" fill="url(#tv-mark-grad)" />
      <rect x="13" y="10" width="6" height="19" rx="1.5" fill="url(#tv-mark-grad)" />
      <rect x="23" y="3" width="6" height="26" rx="1.5" fill="url(#tv-mark-grad)" />
    </svg>
  );
}

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <BrandMark className="h-6 w-6 shrink-0" />
      <span className="font-display font-bold text-[17px] tracking-tight text-text-primary">
        Trance Ventures
      </span>
    </div>
  );
}
