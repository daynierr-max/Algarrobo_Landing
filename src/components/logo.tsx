import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M18 33.75V9C18 6.64924 16.0294 4.67859 13.6786 4.67859C11.3279 4.67859 9.35718 6.64924 9.35718 9V15.75" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.35718 12.375C6.72682 12.375 4.58574 14.5161 4.58574 17.1464C4.58574 19.7768 6.72682 21.9179 9.35718 21.9179" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 33.75C18 28.5625 20.9643 25.125 25.8215 25.125C30.6786 25.125 33.75 28.5625 33.75 33.75" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default Logo;
