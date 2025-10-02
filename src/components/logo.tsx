const Logo = () => (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
            <svg 
              width="60" 
              height="45" 
              viewBox="0 0 85 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-auto text-primary mb-2"
            >
              <path 
                d="M42.5 58C38.5 58 35.5 55.5 35.5 52C35.5 48.5 38.5 45.5 42.5 45.5C46.5 45.5 49.5 48.5 49.5 52C49.5 55.5 46.5 58 42.5 58ZM42.5 48.5C40.19 48.5 38.31 50.04 38.31 52C38.31 53.96 40.19 55.5 42.5 55.5C44.81 55.5 46.69 53.96 46.69 52C46.69 50.04 44.81 48.5 42.5 48.5Z" 
                fill="currentColor"
              />
              <path 
                d="M42.5 45.5C42.5 45.5 43.5 42.5 43.5 38C43.5 33.5 42.5 31 42.5 31M42.5 45.5C42.5 45.5 41.5 42.5 41.5 38C41.5 33.5 42.5 31 42.5 31M42.5 31C42.5 31 40.5 29 38.5 25C36.5 21 35.5 17.5 35.5 17.5M42.5 31C42.5 31 44.5 29 46.5 25C48.5 21 49.5 17.5 49.5 17.5M35.5 17.5C35.5 17.5 34.5 14.5 32.5 11.5C30.5 8.5 28.5 6.5 28.5 6.5M35.5 17.5C35.5 17.5 37.5 15.5 39.5 12C41.5 8.5 42.5 5 42.5 5M49.5 17.5C49.5 17.5 50.5 14.5 52.5 11.5C54.5 8.5 56.5 6.5 56.5 6.5M49.5 17.5C49.5 17.5 47.5 15.5 45.5 12C43.5 8.5 42.5 5 42.5 5M42.5 5C42.5 5 42.5 2 42.5 1M28.5 6.5C28.5 6.5 26.5 9 24.5 12.5C22.5 16 21.5 20 21.5 20M56.5 6.5C56.5 6.5 58.5 9 60.5 12.5C62.5 16 63.5 20 63.5 20" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
            <span className="text-3xl font-headline font-bold text-primary tracking-widest">
                ALGARROBO
            </span>
            <span className="text-xs font-semibold text-primary/90 tracking-[0.2em] mt-1">
                ADULT DAY CARE LLC
            </span>
            <span className="text-[0.6rem] font-medium text-accent-foreground/70 tracking-[0.3em] mt-1">
                FAMILY FIRST
            </span>
        </div>
    </div>
);

export default Logo;
