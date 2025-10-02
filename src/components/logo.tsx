const Logo = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-20 h-20 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 85C40 85 35 75 35 70C35 65 40 60 50 60C60 60 65 65 65 70C65 75 60 85 50 85Z" strokeWidth="2.5" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" />
      <path d="M50 60V25" strokeWidth="3" />
      {/* Branches */}
      <path d="M50 25C40 25 40 15 45 15" />
      <path d="M50 25C60 25 60 15 55 15" />
      <path d="M50 35C40 35 35 25 40 25" />
      <path d="M50 35C60 35 65 25 60 25" />
      <path d="M50 45C40 45 35 35 40 35" />
      <path d="M50 45C60 45 65 35 60 35" />
      <path d="M35 55C30 55 25 50 30 45" />
      <path d="M65 55C70 55 75 50 70 45" />
      <path d="M40 20C35 20 30 15 35 12" />
      <path d="M60 20C65 20 70 15 65 12" />
      {/* Leaf */}
      <path d="M56 14 C 58 12, 60 12, 60 15 C 58 17, 56 17, 56 14Z" fill="hsl(var(--accent))" stroke="hsl(var(--accent))" />
    </svg>
    <div className="flex flex-col items-center leading-none -mt-2">
      <span className="text-3xl font-headline font-bold text-primary tracking-widest leading-none">
        ALGARROBO
      </span>
      <span className="text-xs font-semibold text-primary/90 tracking-[0.2em] leading-tight mt-1">
        ADULT DAY CARE LLC
      </span>
      <span className="text-[0.6rem] font-medium text-accent-foreground/70 tracking-[0.3em] leading-tight mt-1">
        FAMILY FIRST
      </span>
    </div>
  </div>
);

export default Logo;
