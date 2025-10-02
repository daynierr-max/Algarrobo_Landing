const Logo = () => (
    <div className="flex flex-col items-center justify-center mb-8">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-24 w-24 text-primary"
            fill="currentColor"
        >
            <path d="M85,80H15c-2.8,0-5-2.2-5-5V60c0-2.8,2.2-5,5-5h10V45c0-13.8,11.2-25,25-25s25,11.2,25,25v10h10c2.8,0,5,2.2,5,5v15C90,77.8,87.8,80,85,80z M20,65h10v10H20V65z M50,30c-8.3,0-15,6.7-15,15v25h10V45c0-2.8,2.2-5,5-5s5,2.2,5,5v25h10V45C65,36.7,58.3,30,50,30z M80,75H70V65h10V75z" />
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
