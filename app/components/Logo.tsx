import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
  link?: boolean;
}

export default function Logo({ variant = 'full', className = '', link = true }: LogoProps) {
  const logoContent = (
    <div className={`logo-wrapper ${className}`}>
      <Image
        src="/logo.png"
        alt="SERWIS OPON KINASTOWSKI"
        width={variant === 'compact' ? 200 : 300}
        height={variant === 'compact' ? 80 : 90}
        className="logo-image"
        priority
      />
    </div>
  );

  if (link) {
    return (
      <Link href="/" className="logo-link">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

