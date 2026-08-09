import React from 'react';
import Image from 'next/image';

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`relative ${className} w-[180px]`}>
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