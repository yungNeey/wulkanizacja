import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'compact' | 'footer';
  className?: string;
  link?: boolean;
}

export default function Logo({ variant = 'full', className = '', link = true }: LogoProps) {
  const isFooter = variant === 'footer';
  const logoSrc = isFooter ? '/logo-footer.png' : '/logo.png';
  
  const logoContent = (
    <div className={`logo-wrapper ${className}`}>
      <Image
        src={logoSrc}
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

