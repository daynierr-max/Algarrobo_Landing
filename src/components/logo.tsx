const Logo = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-24 w-24 text-primary"
            fill="currentColor"
        >
            <path d="M50 20C35 20 25 35 25 45c0 8 5 15 10 15h-5c-5 0-10 5-10 10v10h60V70c0-5-5-10-10-10h-5c5-0 10-7 10-15C75 35 65 20 50 20zM40 60V45c0-5.52 4.48-10 10-10s10 4.48 10 10v15H40z" />
        </svg>
        <div className="flex flex-col items-center mt-4">
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
