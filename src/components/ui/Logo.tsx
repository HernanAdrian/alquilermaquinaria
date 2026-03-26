// src/components/ui/Logo.tsx
import Link from 'next/link'

interface LogoProps {
  size?: 'default' | 'large'
  className?: string
  onClick?: () => void
}

export function Logo({ size = 'default', className, onClick }: LogoProps) {
  const textSize = size === 'large' ? 'text-3xl' : 'text-2xl'
  
  return (
    <Link href="/" onClick={onClick} className={`inline-flex items-center ${className}`}>
      <span className={`${textSize} font-black tracking-tight leading-none`}>
        <span className="text-[#1E2832] dark:text-white">MAQ</span>
        <span className="text-[#E8621A]">ON</span>
      </span>
    </Link>
  )
}
