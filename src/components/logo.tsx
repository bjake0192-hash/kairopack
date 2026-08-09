import React from 'react';
import Image from 'next/image';

export function Logo({ className = "h-10 w-[180px]" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image 
        src="/images/logo.png"
        alt="KairoPack Logo"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
}