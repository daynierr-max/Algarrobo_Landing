import Image from 'next/image';

const Logo = () => (
  <Image
    src="/logo.png"
    alt="Algarrobo Adult Day Care Logo"
    width={200}
    height={120}
    className="h-auto"
  />
);

export default Logo;
